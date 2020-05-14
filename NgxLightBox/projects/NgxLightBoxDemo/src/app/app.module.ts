import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxLigthBoxModule } from 'ngx-light-box';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NgxLigthBoxModule.forRoot()],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
