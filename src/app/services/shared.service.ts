import { Injectable } from '@angular/core';
import { User } from '../models/user.model'
import { Http, Response } from '@angular/http';

@Injectable()

export class SharedService {
  public user : User;
  constructor(private http: Http) {
    this.user = new User();
  }


  getUser(){
    return this.user;
  }

  setUser(user:User){
    this.user = user;
  }


}
