import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  userForm:FormGroup | undefined;


  constructor(
    private userService:UserService,
    private _snackBar:MatSnackBar,
    private validation:FormBuilder
    ){
      this.userForm = this.validation.group({
        username: ['', [Validators.required, Validators.email]],
      });
    }


public user={
  username:'',
  password: "",
  firstname: "",
  lastname: "",
  email: "",
  phone: ""
 

}

  ngOnInit(): void {
    
  }
  

formSubmit(){
  console.log(this.user);
  if(this.user.username=='' || this.user.username==null){
  //  alert("user name is rquired !!!!")
  this._snackBar.open("Unique username is required !!",'',{duration:2000, verticalPosition:'top'})
   return;
  }

if(this.user.email==''|| this.user.email==null ){
  this._snackBar.open("email is required !!",'',{duration:2000, verticalPosition:'top'})
  return;
}

  

  this.userService.addUser(this.user).subscribe(
    (data:any)=>{
      console.log(data);
      // alert("user has been registered")
      Swal.fire('Successfully done !!!!',data.id+" user has been registered",'success')
    },
    (error)=>{
      console.log("error occure");
      alert("something went wrong");
    }
   
  );
}

}
