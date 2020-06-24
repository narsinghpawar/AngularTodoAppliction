import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorPageMessage ='Some Thing Went Wrong Contatce Admin.... ';
  constructor() { }

  ngOnInit(): void {
  }

}
