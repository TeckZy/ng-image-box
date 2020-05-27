import { LightBoxConfig } from './../../../ngx-light-box/src/lib/models/photoswipe-interface';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxLigthBoxModule, LIGHTBOX_CONFIG } from 'ngx-light-box';
const DEFAULT_CONFIG: LightBoxConfig = {
	loop: false,
	escKey: false,
	closeOnScroll: false,
	//ui-config
	arrowEl: false,
};

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NgxLigthBoxModule.forRoot()],
	providers: [
		{
			provide: LIGHTBOX_CONFIG,
			useValue: DEFAULT_CONFIG,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
