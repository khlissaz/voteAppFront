import { Component, OnInit } from '@angular/core';
import { User } from '../modeles/user';
import { Route } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 currentUser : User;
  constructor(private authenticationService: AuthService) {
    this.currentUser= JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
  }

}
