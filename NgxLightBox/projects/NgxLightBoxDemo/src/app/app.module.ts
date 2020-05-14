import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxLightBoxModule } from 'ngx-light-box';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NgxLightBoxModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
