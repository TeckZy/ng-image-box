import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
	NgZone,
	Inject,
	Optional,
	ElementRef,
	Directive,
	AfterViewInit,
	OnDestroy,
	DoCheck,
	OnChanges,
	Input,
	Output,
	EventEmitter,
	SimpleChanges,
	KeyValueDiffer,
	KeyValueDiffers,
} from '@angular/core';

@Directive({
	selector: '[ngxlightbox]',
	exportAs: 'NgxLightBox',
})
export class NgxLightBoxDirective {
	constructor(@Inject(PLATFORM_ID) private platformId: Object) {
		console.log(this);
	}
}
