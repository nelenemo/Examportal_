import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  constructor(private _quiz: QuizService) { }
  quizzes: any[] = [
    {
      qid: 21,
      title: "Science",
      description: "Science encompasses the systematic study of the structure and behaviour of the physical and natural world through observation and experiment, and technology is the application of scientific knowledge for practical purposes.",
      maxMarks: "100",
      numberOfQuestions: '20',
      active: '',
      category: {
        title: 'Science and Research',
      }
    },
    {
      qid: 25,
      title: "Math",
      description: "all about Math",
      maxMarks: "100",
      numberOfQuestions: '20',
      active: '',
      category: {
        title: 'Math and Research',
      }
    },
  ]

  ngOnInit(): void {
    console.log("start")
    this._quiz.quizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log("helloooooooo" + data)
      },
      (error) => {
        console.log("error occur", error)
        Swal.fire("Error !!!", "Error occur in server", "error");
      }

    );

  }
    deleteQuiz(qid: any) {
    this._quiz.deleteQuiz(qid).subscribe(
      (data) => {
        
        
          console.log("ID deleted successfully");
          Swal.fire("Success!!", "Quiz successfully deleted", "success");
      },
      (error)=>{
        Swal.fire("error!!", "Quiz error ", "error");
      }
   
    );
  }

 
  

}
// function next(value: Object): void {
//   throw new Error('Function not implemented.');
// }

