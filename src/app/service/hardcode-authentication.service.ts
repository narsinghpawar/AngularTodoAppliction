import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    //console.log('before..... '+this.isUserLoggedIn());
    if (username === 'in28mins' && password === 'sairam41') {
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('after.... '+this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  //Enabling menu links based on user logged in
  //menu.component.ts file 
  //created boolean variable 
  //and invoking hardcodeAuthenticationService in 
  //constructor( public hardcodeAuthenticationService: 
   // HardcodeAuthenticationService) {console.log('const......'); }
   //ngOnInit() {
    //this.isUserLoggedIn = this.hardcodeAuthenticationService.isUserLoggedIn();
    //console.log('ngOnInit......'+this.isUserLoggedIn);
 //  }
 //Above method will get invoked while page get loaded i.e(Angular life cycle..)

 //menu.component.html page we make use of *ngIf="hardcodeAuthenticationService.isUserLoggedIn()"
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
