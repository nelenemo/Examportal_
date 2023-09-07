import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { environment } from './helper';
// import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url=environment.apiUrl;
  constructor(
    private http:HttpClient,
    // private helper:HelperService
  ) { }
  // apiUrl=this.helper.baseUrl;
addUser(user:any){
    // return this.http.post(`${baseUrl}/user/create`,user);
return this.http.post(this.url+"/user/create",user,{
  headers:new HttpHeaders().set('Content-Type','application/json')
})
  }
}
