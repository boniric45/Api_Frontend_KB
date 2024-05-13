import { Component, OnInit } from '@angular/core';
import { DocumentationService } from '../../services/documentation.service';
import { Documentation } from '../../models/documentation';


@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss'
})


export class DocumentationComponent implements OnInit{

  constructor(private documentationSvc: DocumentationService){}

  public documentations!:Documentation[];
  public documentation!: Documentation;

  ngOnInit(): void {
  this.getDocumentations();
  }


  // get all documentations
  getDocumentations() {
    this.documentationSvc.getAllDocumentation().subscribe((result)=> {
      this.documentations = result;
    });
    }

    
  // Get one documentation
  getDocumentationById(id:any){
    this.documentationSvc.getDocumentationById(id).subscribe((result)=>{
    this.documentation = result;
    });
  }

}
