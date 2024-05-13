import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { LinkQr } from '../models/link-qr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LinkQrService {

  endPointURL = environment.baseUrl + '/linkQr';

  constructor(private httpClient: HttpClient) {}

  public getAllLinkQr(){
    return new Observable<LinkQr[]>((observer)=>{
  this.httpClient.get(this.endPointURL+'/all', {withCredentials:false}).subscribe( (result:any) => {
  const list = [];
  for(const json of result){
    const listLink = new LinkQr();
    listLink.loadFromJson(json);
    list.push(listLink);
  }
  observer.next(list);
  observer.complete();
  
  },error => {
    observer.error(error);
    observer.complete();
  });
    })
  }
  
  public getLinkQrById(id:any){
    return new Observable<LinkQr>((observer)=>{
      this.httpClient.get(this.endPointURL+'/'+id, {withCredentials:false}).subscribe( (result:any) => {
        const linkQr = new LinkQr();
        linkQr.loadFromJson(result);
      observer.next(linkQr);
      observer.complete();
      },error => {
        observer.error(error);
        observer.complete();
      });   
  })
}


}
