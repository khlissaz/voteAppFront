import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
currentUser: any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"))
    console.log(this.authService.currentUser)
    console.log(this.authService.currentUserValue)
   // console.log(this.authService.currentUserValue.firstName)
  }

}
