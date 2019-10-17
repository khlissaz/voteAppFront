import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../modeles/user';
import { AuthService } from '../services/auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
   
    public currentUser: User;
    constructor( private route: ActivatedRoute, private router: Router,  private authService: AuthService) {
      
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
        email: new FormControl ('', Validators.required),
        password: new FormControl ('', Validators.required)
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }


onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
        data => {
           console.log(data);
            this.router.navigate([this.returnUrl]);
        },
        error => {
            
           alert("Login ou mot de passe est incorrect!"+ error);
            this.loading = false;
        });
}

}




