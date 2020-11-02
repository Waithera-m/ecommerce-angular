import { Component, OnInit } from '@angular/core';
import { Route, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = {};
  loginError: string;

  constructor(private formbuilder: FormBuilder, private authenticationService: AuthenticationService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required],
      dashboard_id: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authenticationService.logOut();
  }

  get email() {return this.loginForm.get('email');}
  get dashboard_id() {return this.loginForm.get('dashboard_id');}
  get password() {return this.loginForm.get('password');}

  onSubmit () {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.email.value, this.dashboard_id.value, this.password.value).subscribe(data => {
        if (this.authenticationService.isLoggedIn) {
          const redirect = this.authenticationService.redirectUrl ? this.authenticationService.redirectUrl : '/';
          this.router.navigate([redirect]);
        } else {
          this.loginError = 'Username or password is incorrect.';
        }
      },
      error => this.error = error
    );
  }
  

}
