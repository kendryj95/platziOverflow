import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { 
 MatIconModule,
 MatCardModule,
 MatButtonModule,
 MatInputModule,
 MatListModule,
 MatGridListModule,
 MatRadioModule,
 MatProgressSpinnerModule
} from '@angular/material';

const modules = [
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatButtonModule,
	MatInputModule,
	MatListModule,
	MatGridListModule,
	MatRadioModule,
	MatProgressSpinnerModule
];

@NgModule({
	imports: modules,
	exports: modules
})


export class MaterialModule {}