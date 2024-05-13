import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-kb',
  standalone: true,
  imports: [],
  templateUrl: './admin-kb.component.html',
  styleUrl: './admin-kb.component.scss'
})
export class AdminKbComponent implements OnInit {

  ngOnInit(): void {
      window.location.href = 'http://localhost:1111';
  }


}
