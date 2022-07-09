import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TUser } from 'src/app/models/typeUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: TUser = {
    email: "",
    name: "",
    password: ""
  }
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  //  name = localStorage.getItem(JSON.parse('user'))

  onRegister() {
    this.userService.register(this.user).subscribe(user => {
      console.log(user);
      setTimeout(()=>{
        this.router.navigateByUrl('')
      },2000)
    })
    console.log(this.user);
  }
}
