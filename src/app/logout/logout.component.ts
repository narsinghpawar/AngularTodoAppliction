import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private hardcodeAuthenticationService: HardcodeAuthenticationService) { }

  ngOnInit() {
    this.hardcodeAuthenticationService.logout();
    this.router.navigate(['Login']);
  }

}
