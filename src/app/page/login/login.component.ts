import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: ''
  }

  constructor(
    private _snackBar: MatSnackBar,
    private login: LoginService
  ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  formSubmit() {
    console.log("form submitted");
    if (this.loginData.username == '' || this.loginData.username == null) {
      //  alert("user name is rquired !!!!")
      this._snackBar.open("Unique username is required !!", '', { duration: 2000, verticalPosition: 'top' })
      return;
    }
    //request to serve to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log("success")
        console.log(data);
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user: any) => {
            this.login.setUser(user);
            console.log(user);
            //redirect....Admin : admin dashboard
            //redirect....User :user dashboard
            if(this.login.getUserRole()=='ADMIN'){
            window.location.href='/admin';
            }
            else if(this.login.getUserRole()=='NORMAL'){
              window.location.href='/user';
            }else{
              this.login.logout();
            }
          }

          );

      },
      (error) => {
        console.log("Error !");
        console.log(error);
        this._snackBar.open("Invalid Data!!! Please try again",'',{duration:2000, verticalPosition:'top'});
      }
    );
  }


}



