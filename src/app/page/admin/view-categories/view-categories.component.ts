import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit{
categories=[
  {
    cid:23,
    title:"programming language",
    description:"hil helo"
  },
  {
    cid:23,
    title:"AI",
    description:"hil helo"
  },
  {
    cid:23,
    title:"Machine Learning",
    description:"hil helo"
  },
  {
    cid:23,
    title:"BlockChain",
    description:"hil helo"
  },
]

constructor( private _category:CategoryService){


}

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(this.categories);
      },
      (error)=>{
        console.log("error occur"+error);
        Swal.fire("error", "Error is loading", "error");
      }
    );
    }

}
