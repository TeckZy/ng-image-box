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
export class NgxLightBoxDirective implements AfterViewInit {
	@Input('ngxlightbox') config?: any;

	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		private zone: NgZone,
		private elementRef: ElementRef,
		private differs: KeyValueDiffers,
	) {}
	ngAfterViewInit(): void {
		console.log(this.elementRef, PLATFORM_ID);
	}
}
