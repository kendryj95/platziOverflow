import { Component, OnInit } from "@angular/core";
import { Question } from './question.model';
import { QuestionService } from './question.service';

const q = new Question(
    '¿Como reutilizo un componente en Android',
    'Miren, esta es mi pregunta...',
    new Date(),
    'none'
)

@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styles:[`
        i {
            font-size: 48px;
        }
        i.help {
            width: 48px !important;
            height: 48px !important;
            padding: 0 !important;
            font-size: 48px !important;
        }
        .add-question {
            position: fixed;
            bottom: 30px;
            right: 30px;
            font-size: 40px !important;
        }
        .spinner {
            margin: 20px auto;
        }
    `],
    providers: [QuestionService]
})

export class QuestionListComponent implements OnInit {
    questions: Question[];
    loading = true;

    constructor(private questionService: QuestionService){
    }

    ngOnInit(){
        this.questionService.getQuestions().subscribe((data:any) => {
            this.loading = false;
            this.questions = data;
        }, error => {
            this.loading = false;
            this.questionService.handleError(error);
        });
    }
    
}