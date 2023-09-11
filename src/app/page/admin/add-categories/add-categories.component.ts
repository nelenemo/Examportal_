import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
category={
  title:'',
  description:''
}
constructor(
  private _category:CategoryService,
  private _snack:MatSnackBar
  ){}

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.category.title.trim()==null || this.category.title==""){
this._snack.open("Title is Required !!", "", {duration:3000})
return;
    }

    this._category.addCategory(this.category).subscribe(
      (data)=>{
        Swal.fire("Success","Category has been added Succesfully!!", "success");
      },
      (error)=>{
        console.log("error occur", error);
        Swal.fire("error", "Server Error !!", "error");
      
      }
          );
      


  }

}

