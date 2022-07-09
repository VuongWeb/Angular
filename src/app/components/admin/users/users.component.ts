import { Component, OnInit } from '@angular/core';
import { TUser } from 'src/app/models/typeUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersList!: TUser[];
  constructor(private userService: UserService) { 
    this.ListUser();
  }

  ngOnInit(): void {
  }

  ListUser() {
    this.userService.getUsers().subscribe((data: any) => {
      this.usersList = data
    })
  }

}
