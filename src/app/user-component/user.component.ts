import { Component, OnInit,  Input  } from '@angular/core';
import  { UserService } from '../services/user.service';
import {User} from '../models/user.model';

import { ActivatedRoute } from "@angular/router";
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  submitted : boolean
  user : User
  currentId: any
  userId: any
  @Input() parentMessage: string
  siblingMessage: User

  constructor(private userService: UserService, private route:ActivatedRoute, private sharedService: SharedService) {
    this.user = new User();
    this.route.params.subscribe(params => {this.userId = params['id'];

      if(this.userId>0){
      this.userService.getUserById(this.userId).subscribe((data) =>{
        this.user = data[0];
      });
       }
      this.siblingMessage = this.sharedService.getUser();
      console.log(this.siblingMessage);
    });

    this.user = new User();
    this.submitted = false;
    this.userService.getUserList().subscribe((data) =>{
      this.currentId = data.length;
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  addUser(valid:boolean){
    if(!valid)
      return;
    this.user.id = this.currentId+1;
    this.userService.addUser(this.user).subscribe((data) => {
      alert('User Added Successfully..!!');
      this.user = new User();
    })
  }

  editUser(valid:boolean){
    if(!valid)
      return;
    this.userService.updateUser(this.user).subscribe((data) => {
       alert('User Saved Successfully..!!');
       this.user = new User();
    })
  }
}
