import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  constructor(public login:LoginService){

  }
isLoggedIn:boolean=false;
 user=null;
  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
    // this.login.loginStatusSubject.asObservable().subscribe((data) => {
    //   this.isLoggedIn = this.login.isLoggedIn();
    //   this.user = this.login.getUser();
    // });
    
  
  }
 logouts(){
  this.login.logout();
  this.isLoggedIn=false;
  this.user=null;
  window.location.reload();
  // this.login.loginStatusSubject.next(false);
  
}

}
