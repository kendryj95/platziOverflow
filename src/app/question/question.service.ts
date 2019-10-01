import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { HttpClient } from '@angular/common/http';
import { Response, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class QuestionService {

	private questionsUrl: string;

	constructor(private http: HttpClient) {
		this.questionsUrl = urljoin(environment.apiUrl, 'questions');
	}

	getQuestions(): Observable<Question[]> {
		return this.http.get(this.questionsUrl)
			.pipe(
				map( res => {
					return res as Question[]
				})
			)
	}

	getQuestion(id): Observable<Question> {
		const url = urljoin(this.questionsUrl, id);

		return this.http.get(url)
			.pipe(
				map( res => {
					return res as Question
				})
			)
	}

	addQuestion(question: Question){
		const body = JSON.stringify(question);
		const headers = new Headers({'Content-Type': 'application/json'});

		return this.http.post(this.questionsUrl, body, { headers })
			.map((response: Response) => response.json())
			.catch((error: Response) => Observable.throw(error.json()));
	}

	handleError(error: any) {
		let errMsg = error.message ? error.message : 
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';

		console.log(errMsg);
	}

}