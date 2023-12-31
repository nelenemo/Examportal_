import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public loginStatusSubject=new Subject<boolean>();

  constructor(private http: HttpClient) { }
  url = environment.apiUrl;
//current user which is looged in
  public getCurrentUser(){
    return this.http.get(`${this.url}/current-user`);
  }

  //generate token
  public generateToken(loginData: any) {
    return this.http.post(`${this.url}/generate-token`, loginData)
    
  }

  //Login user:set token in LocalStorage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    this.loginStatusSubject.next(true);
    return true; 
  }

  //isLogin: user is looged in
  public isLoggedIn() {
    let tokenStr = localStorage.getItem("token");
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //LOgout:remov efrom localStrorge

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    return true;
  }

  //Get token
  public getToken() {
    return localStorage.getItem('token');

  }

  //set userDetails
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  //getuser
  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr)
    }
    else{
      this.logout();
      return null;
    }

  }

  //get USer Role
  public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }

}
