import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<h1>{{title1}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApplication';
  //title1 = 'todo'; 
  // message = 'Wel Come';

  //OnSubmit function

  onSubmit(data) {
    console.log(data);
  }
}
