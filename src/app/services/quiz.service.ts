import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  url=environment.apiUrl

  constructor(private _http:HttpClient) { }

  public quizzes(){
    return this._http.get(`${this.url}/quiz/`)
  }

  public addQuizzes(quiz:any){
    return this._http.post(`${this.url}/quiz/`, quiz)//pass data  in quiz
  } 

  public deleteQuiz(qid:number){
    console.log("inside delete service");
    return this._http.delete(`${this.url}/quiz/${qid}`)
  }
}
