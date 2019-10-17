import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../modeles/user';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 


  constructor(private router: Router, private authService: AuthService) {
     
  }

  ngOnInit() {
   
  }

}