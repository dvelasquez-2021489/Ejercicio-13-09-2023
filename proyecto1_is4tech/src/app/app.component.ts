import { Component, OnInit } from '@angular/core';
import { DogsServiceService } from './admin/services/dogs-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser
} from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) {}

  token = false;
  ngOnInit() {
    const hasToken = localStorage.getItem('token');
    if (hasToken) {
      this.token = true;
    } else {
      this.token = false;
    }
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.socialAuthService.authState.subscribe(user => {
      this.token = false;
      this.socialUser = user;
      this.isLoggedin = user != null;
      if (this.isLoggedin) {
        this.token = false;
        localStorage.setItem('token', this.socialUser.idToken);
        this.router.navigate(['/admin/dogs']);
      }
      console.log(this.socialUser);
    });
  }
  loginWithGoogle(): void {
    this.token = false;
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logOut(): void {
    this.token = true;
    localStorage.removeItem('token');
    this.socialAuthService.signOut().then(value => {
      {
        this.token = true;
      }
    });
    this.router.navigate(['']);
  }
}
