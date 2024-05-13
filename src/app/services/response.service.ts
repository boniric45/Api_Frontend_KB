import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  endPointURL = environment.baseUrl + '/response';

  constructor(private httpClient: HttpClient) {}

  public getAllResponse(){
    return new Observable<Response[]>((observer)=>{
  this.httpClient.get(this.endPointURL+'/all', {withCredentials:false}).subscribe( (result:any) => {
  const list = [];
  for(const json of result){
    const listResponse = new Response();
    listResponse.loadFromJson(json);
    list.push(listResponse);
  }
  observer.next(list);
  observer.complete();
  
  },error => {
    observer.error(error);
    observer.complete();
  });
    })
  }
  
  public getResponseById(id:any){
    return new Observable<Response>((observer)=>{
      this.httpClient.get(this.endPointURL+'/'+id, {withCredentials:false}).subscribe( (result:any) => {
        const response = new Response();
        response.loadFromJson(result);
      observer.next(response);
      observer.complete();
      },error => {
        observer.error(error);
        observer.complete();
      });   
  })
}




}
