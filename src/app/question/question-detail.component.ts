import { Component } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
	selector: 'app-question-detail',
	templateUrl: './question-detail.component.html',
	styleUrls: ['./question-detail.component.css'],
	providers: [QuestionService]
})

export class QuestionDetailComponent {
	question?: Question;
	loading = true;

	constructor(private questionService: QuestionService, private route: ActivatedRoute) {
		let _id = this.route.snapshot.params.id;
		this.getQuestionDetail(_id);
	}

	getQuestionDetail(id:string){
		this.questionService.getQuestion(id).subscribe((data:any) => {
			this.question = data;
			this.loading = false;
		}, error => {
			this.loading = false;
			this.questionService.handleError(error);
		});
	}


}