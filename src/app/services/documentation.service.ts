import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { Documentation } from '../models/documentation';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  endPointURL = environment.baseUrl + '/documentation';

  constructor(private httpClient: HttpClient) {}

  public getAllDocumentation(){
    return new Observable<Documentation[]>((observer)=>{
  this.httpClient.get(this.endPointURL+'/all', {withCredentials:false}).subscribe( (result:any) => {
  const list = [];
  for(const json of result){
    const listDocumentation = new Documentation();
    listDocumentation.loadFromJson(json);
    list.push(listDocumentation);
  }
  observer.next(list);
  observer.complete();
  
  },error => {
    observer.error(error);
    observer.complete();
  });
    })
  }
  
  public getDocumentationById(id:any){
    return new Observable<Documentation>((observer)=>{
      this.httpClient.get(this.endPointURL+'/'+id, {withCredentials:false}).subscribe( (result:any) => {
        const documentation = new Documentation();
        documentation.loadFromJson(result);
      observer.next(documentation);
      observer.complete();
      },error => {
        observer.error(error);
        observer.complete();
      });   
  })
}




}
