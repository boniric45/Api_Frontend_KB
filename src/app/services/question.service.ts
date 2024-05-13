import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  endPointURL = environment.baseUrl + '/question';

  constructor(private httpClient: HttpClient) {}

  public getAllQuestion(){
    return new Observable<Question[]>((observer)=>{
  this.httpClient.get(this.endPointURL+'/all', {withCredentials:false}).subscribe( (result:any) => {
  const list = [];
  for(const json of result){
    const listQuestion = new Question();
    listQuestion.loadFromJson(json);
    list.push(listQuestion);
  }
  observer.next(list);
  observer.complete();
  
  },error => {
    observer.error(error);
    observer.complete();
  });
    })
  }
  
  public getQuestionById(id:any){
    return new Observable<Question>((observer)=>{
      this.httpClient.get(this.endPointURL+'/'+id, {withCredentials:false}).subscribe( (result:any) => {
        const question = new Question();
        question.loadFromJson(result);
      observer.next(question);
      observer.complete();
      },error => {
        observer.error(error);
        observer.complete();
      });   
  })
}

}
