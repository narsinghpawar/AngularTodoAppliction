import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errormessage = 'InValid UserName && Pasword';
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter
  //Currently we are using dependency Injection
  //dec an router variable of type router
  constructor(private router: Router,
    private hardcodeAuthenticationService: HardcodeAuthenticationService) { }

  ngOnInit() {

  }

  handleLogin() {

    //if(this.username==='in28mins' && this.password==='sairam41'){
    if (this.hardcodeAuthenticationService.authenticate(this.username, this.password)) {
      console.log('if-condition.....')
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
  //onSubmit(data){
  //console.log(data);
  // }


}
