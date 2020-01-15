import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthServiceService, private router: Router) { }


  onSubmit(loginform: NgForm) {
    if (loginform.valid) {
      this.authService.login(loginform.value);
      this.router.navigate(['']);
    }
  }

  ngOnInit() {

  }

}
