import { HardcodeAuthenticationService } from './../service/hardcode-authentication.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn: boolean = false;
  
  constructor( public hardcodeAuthenticationService: 
    HardcodeAuthenticationService) {console.log('const......'); }

  ngOnInit() {
   // this.isUserLoggedIn = this.hardcodeAuthenticationService.isUserLoggedIn();
  //console.log('ngOnInit......'+this.isUserLoggedIn);
  }

}
