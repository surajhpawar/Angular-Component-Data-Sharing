import { Injectable } from '@angular/core';
import { User } from '../models/user.model'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ServerURLs } from  '../../assets/config';

@Injectable()
export class UserService {
  public user : string;
  constructor(private http: Http) {
    this.user ="";
  }

  getUserById(userId:any) : any {
    return this.http.get(ServerURLs.baseUrl+"/search?id="+userId).pipe(map(r => r.json()));
  }

  getUserList() : Observable<any> {
    return this.http.get(ServerURLs.baseUrl).pipe(map(r => r.json()));
  }

  deletetUserById(userId:any) : any {
    return this.http.delete(ServerURLs.baseUrl+"/id/"+userId).pipe(map(r => r.json()));
  }

  addUser(user: User) : Observable<any> {
    return this.http.post(ServerURLs.baseUrl, {'data':[user]}).pipe(map(r => r.json()));
  }

  updateUser(user: User) : Observable<any> {
    return this.http.put(ServerURLs.baseUrl+"/id/"+user.id, {'data':[user]}).pipe(map(r => r.json()));
  }

  getUser(){
    console.log(this.user);
    return this.user;
  }

  setUser(user:User){
    this.user = user.name;
    console.log(this.user);
  }


}
