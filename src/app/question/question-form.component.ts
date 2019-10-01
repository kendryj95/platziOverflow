import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Question } from "./question.model";
import icons from "./icons";

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styles: [`
    	i {
    		font-size: 48px
    	}	

    	small {
    		display: block
    	}
    `]
})

export class QuestionFormComponent {

	public icons: Object[] = icons;

	getIconVersion(icon: any){
		let version;

		if (icon.name != 'illustrator') {
			if (icon.versions.font.includes('plain-wordmark')) {
				version = 'plain-wordmark';
			} else {
				version = icon.versions.font[0];
			}
		} else {
			version = 'plain';
		}

		return version;
	}

	onSubmit(form: NgForm) {

		console.log(form);

		const q = new Question(
			form.value.title,
			form.value.description,
			new Date(),
			form.value.icon
		);

		console.log(q);
	}
}