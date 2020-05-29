import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxLightBoxModule, LIGHTBOX_CONFIG, LightBox } from 'ngx-light-box';
const DEFAULT_CONFIG: LightBox.LightBoxConfig = {
	loop: false,
	escKey: false,
	closeOnScroll: false,
	// ui-config
	arrowEl: true,
};

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NgxLightBoxModule.forRoot()],
	providers: [
		{
			provide: LIGHTBOX_CONFIG,
			useValue: DEFAULT_CONFIG,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
