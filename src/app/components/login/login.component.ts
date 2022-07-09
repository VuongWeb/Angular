import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TUser } from 'src/app/models/typeUser';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: { email: string, password: string } = {
    email: "",
    password: ""
  }

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.userService.login(this.user).subscribe(user => {
      localStorage.setItem('user', JSON.stringify(user));
      console.log(user);
    })
    console.log(this.user);
  }

}
