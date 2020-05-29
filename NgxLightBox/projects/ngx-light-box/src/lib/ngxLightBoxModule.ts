import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

export * from './service/lightbox.service';
export * from './component/lightbox.component';
export * from './models/image.model';

import { NgxLightboxComponent } from './component/lightbox.component';
import { NgxLightboxService } from './service/lightbox.service';

// import 'photoswipe/dist/photoswipe.css';
// import 'photoswipe/dist/default-skin/default-skin.css';

export let providers = [NgxLightboxService];

@NgModule({
	imports: [CommonModule],
	declarations: [NgxLightboxComponent],
	providers: [NgxLightboxService],
	exports: [NgxLightboxComponent],
})
export class NgxLigthBoxModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: NgxLigthBoxModule,
			providers,
		};
	}
}
