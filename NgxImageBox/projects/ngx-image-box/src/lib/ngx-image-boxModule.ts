import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxImageboxService } from './service/ngx-image-box.service';
import { NgxImageboxComponent } from './component/ngx-image-box.component';

export * from './service/ngx-image-box.service';
export * from './component/ngx-image-box.component';
export * from './models/image.model';

export let providers = [NgxImageboxService];

@NgModule({
	imports: [CommonModule],
	declarations: [NgxImageboxComponent],
	providers: [NgxImageboxService],
	exports: [NgxImageboxComponent],
})
export class NgxImageBoxModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: NgxImageBoxModule,
			providers,
		};
	}
}
