import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Functionality } from '../models/functionality';
import { Observable } from 'rxjs';
import { Documentation } from '../models/documentation';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {

  endPointURL = environment.baseUrl + '/functionality';

  constructor(private httpClient: HttpClient) {}

  public getAllFunctionality(){
    return new Observable<Functionality[]>((observer)=>{
  this.httpClient.get(this.endPointURL+'/all', {withCredentials:false}).subscribe( (result:any) => {
  const list = [];
  for(const json of result){
    const listFunctionality = new Functionality();
    listFunctionality.loadFromJson(json);
    list.push(listFunctionality);
  }
  observer.next(list);
  observer.complete();
  
  },error => {
    observer.error(error);
    observer.complete();
  });
    })
  }
  
  public getFunctionalityById(id:any){
    return new Observable<Functionality>((observer)=>{
      this.httpClient.get(this.endPointURL+'/'+id, {withCredentials:false}).subscribe( (result:any) => {
        const functionality = new Functionality();
        functionality.loadFromJson(result);
      observer.next(functionality);
      observer.complete();
      },error => {
        observer.error(error);
        observer.complete();
      });   
  })
}

  
}
