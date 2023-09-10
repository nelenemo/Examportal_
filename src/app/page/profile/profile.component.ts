import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = null;

  constructor(private login: LoginService) {

  }
  ngOnInit(): void {

    this.user = this.login.getUser(); //calling from localstorage of web
    // this.login.getCurrentUser().subscribe( //calling direct from the server
    //   (user:any)=>{
    //   this.user=user;
    //   },
    //   (error)=>{
    //   alert("error")
    //   }
    //   );
    


    throw new Error('Method not implemented.');
  }

}
