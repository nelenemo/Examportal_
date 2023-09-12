import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories = [
    {
      cid: 23,
      title: "stupid",

    },
    {
      cid: 23,
      title: "stupid",

    }
  ]

  quizData = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: null,

  }

  constructor(
    private _cat: CategoryService,
    private _snack: MatSnackBar,
    private _quiz: QuizService
  ) { }
  ngOnInit(): void {

    this._cat.categories().subscribe(
      (data: any) => {
        this.categories = data;
        console.log(data, this.categories);
      },
      (error) => {
        console.log(error);
        Swal.fire("Error !!", "Data is loading", "error");
      }
    );

  }
  addQuiz() {
    if (this.quizData.title.trim() == '' || this.quizData.title == null) {
      this._snack.open("Required Title!!!", "", { duration: 3000 ,verticalPosition:'top'});
      return;
    }
    else if(this.quizData.maxMarks.trim() == '' || this.quizData.maxMarks == null){
      this._snack.open("Required Maximum Mark is required!!!", "", { duration: 3000 ,verticalPosition:'top'});
      return;
    }
    else if(this.quizData.numberOfQuestions.trim() == '' || this.quizData.numberOfQuestions == null){
      this._snack.open("Required number of marks is required!!!", "", { duration: 3000 ,verticalPosition:'top'});
      return;
    }
    console.log("the data:", this.quizData);

    this._quiz.addQuizzes(this.quizData).subscribe(
      (data) => {
        Swal.fire("Success!!!", "the quiz has been added succesfully", "success");
        this.quizData = {
          title: '',
          description: '',
          maxMarks: '',
          numberOfQuestions: '',
          active: true,
          category: null,

        }
      },
      (error) => {
        Swal.fire("Error!!!", "Error occur while adding quiz", "error");

        console.log("error occue : ", error);
      }
    );
  }


}
