import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxImageBoxModule, NgxImageBox, IMAGEBOX_CONFIG } from 'ngx-image-box';

const DEFAULT_CONFIG: NgxImageBox.NgxImageBoxConfig = {
	loop: false,
	escKey: false,
	closeOnScroll: false,
	// ui-config
	arrowEl: true,
};

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NgxImageBoxModule.forRoot()],
	providers: [
		{
			provide: IMAGEBOX_CONFIG,
			useValue: DEFAULT_CONFIG,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
