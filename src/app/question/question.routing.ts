import { QuestionListComponent } from './question-list.component';
import { QuestionDetailComponent } from './question-detail.component';
import { QuestionFormComponent } from './question-form.component';

import { Routes } from '@angular/router';

export const QUESTION_ROUTES: Routes = [
	{path: '', component: QuestionListComponent},
	{path: 'new', component: QuestionFormComponent},
	{path: ':id', component: QuestionDetailComponent}
]; 