import { Component, OnInit } from '@angular/core';

//service 
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private _authService:AuthService) { }

  ngOnInit() {

  }
  /**
   * register
   */
  public register() {
    
  }

}
