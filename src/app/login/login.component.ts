import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted: boolean

  constructor(
    public formBuilder: FormBuilder) {
    this.isSubmitted = false;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      privacyPolicy: [false],
    });
  }

  

  // login method
  submit() {
    this.isSubmitted = true
    if (!this.loginForm.valid) {
      console.log("form is invalid")
      return false;
    }
    else{
      alert("login successful !")
      return true
    }

  }


}
