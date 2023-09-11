import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http:HttpClient
    //load all the categories
    
  ) { }
  url = environment.apiUrl;


  public categories(){
    console.log("calling categories")
    return this._http.get(`${this.url}/category/`)
  }
}
