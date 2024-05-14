import { Component, OnInit } from '@angular/core';
import { FunctionalityService } from '../../services/functionality.service';
import { Functionality } from '../../models/functionality';
import { Question } from '../../models/question';
import { Response } from '../../models/response';
import { LinkQr } from '../../models/link-qr';
import { QuestionService } from '../../services/question.service';
import { LinkQrService } from '../../services/link-qr.service';
import { ResponseService } from '../../services/response.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-functionality',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,CommonModule],
  templateUrl: './functionality.component.html',
  styleUrl: './functionality.component.scss'
})
export class FunctionalityComponent implements OnInit {


  constructor
  (
    private functionalitySvc: FunctionalityService,
    private questionSvc:QuestionService, 
    private responseSvc:ResponseService,
    private linkQrSvc:LinkQrService
  ){}
 
  ngOnInit(): void {
    this.getFunctionalitys();
  }

  public functionalitys!:Functionality[];
  public functionality!: Functionality;
  public questions!:Question[];
  public question!: Question;
  public responses!:Response[];
  public response!: Response;
  public linkQrs!:LinkQr[];
  public linkQr!: LinkQr;
  public idFunctionality!: number;

  // get all functionality
  getFunctionalitys() {
    this.functionalitySvc.getAllFunctionality().subscribe((result)=> {
      this.functionalitys = result;
      console.log(this.functionalitys);
      });
    }

  // Get one documentation with id
  getFunctionalityById(id:any){
    this.functionalitySvc.getFunctionalityById(this.idFunctionality).subscribe((result)=> {
      this.functionality = result;
      console.log(result);
      });
    }

  // Get all questions
  getQuestions() {
    this.questionSvc.getAllQuestion().subscribe((result)=> {
      this.questions = result;
      });
    }
    
  // Get one question with id
  getQuestionById(id:any){
    this.questionSvc.getQuestionById(id).subscribe((result)=> {
      this.question = result;

      });
    }

      // Get all response
  getResponses() {
    this.responseSvc.getAllResponse().subscribe((result)=> {
      this.responses = result;
      });
    }
    
  // Get one response with id
  getResponseById(id:any){
    this.responseSvc.getResponseById(id).subscribe((result)=> {
      this.response = result;
      console.log(this.response);
      });
    }

  // Get all link QR
  getLinkQrs() {
    this.linkQrSvc.getAllLinkQr().subscribe((result)=> {
      this.linkQrs = result;
      });
    }
    
  // Get one linkQr with id
  getLinkQrById(id:any){
    this.linkQrSvc.getLinkQrById(id).subscribe((result)=> {
      this.linkQr = result;
      });
    }



}
