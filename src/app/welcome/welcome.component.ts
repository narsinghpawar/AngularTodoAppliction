//Pacakge com.in28minites.springboot.web;
//import org.springframework.boot.springApplication;

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {

 // message : string = 'Some Wel Come Message';
 message = 'Some Wel Come Message';
 name=''
  //Java String message ="Some Wel Come Message";

  //public SpringBootFirstWebApplication(){}
  //ActivatedRoute
  constructor(private route:ActivatedRoute) { }

  //void init(){}
  ngOnInit() {

    //To pring message value 
    console.log(this.message);
   // console.log(this.route.snapshot.params['name'])
      this.name = this.route.snapshot.params['name'];
    //System.out.println("HI... "+message);
  }

}
