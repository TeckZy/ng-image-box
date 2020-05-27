import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import * as imagesloaded_ from 'imagesloaded';
const IL = imagesloaded_;
import {
	Component,
	ViewEncapsulation,
	Input,
	Output,
	EventEmitter,
	ChangeDetectorRef,
	Inject,
	PLATFORM_ID,
	OnChanges,
	ViewChild,
	Optional,
	OnDestroy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Image } from './../models/image.model';
import { PhotoswipeImage } from '../models/photoswipe-image.model';
import { NgxLightboxService } from './../service/lightbox.service';
import { NgxLightBoxDirective } from './../directive/ngxLightBox.directive';
import {
	LIGHTBOX_CONFIG,
	LightBoxConfig,
} from '../models/photoswipe-interface';
import { Subscription } from 'rxjs';

@Component({
	selector: 'ngx-lightbox',
	templateUrl: './lightbox.component.html',
	styleUrls: ['../style/lightbox.style.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class NgxLightboxComponent implements OnChanges, OnDestroy, OnChanges {
	@Input('galleryKey') galleryKey: string;
	@ViewChild('Ngx', { static: false })
	directiveRef?: NgxLightBoxDirective;

	// OutPut Event Emmiter

	@Output() imagesLoaded: EventEmitter<number> = new EventEmitter();
	@Output() beforeChange: EventEmitter<any> = new EventEmitter<any>();
	@Output() afterChange: EventEmitter<any> = new EventEmitter<any>();
	@Output() imageLoadComplete: EventEmitter<any> = new EventEmitter<any>();
	@Output() resize: EventEmitter<any> = new EventEmitter<any>();
	@Output() gettingData: EventEmitter<any> = new EventEmitter<any>();
	@Output() mouseUsed: EventEmitter<any> = new EventEmitter<any>();
	@Output() initialZoomIn: EventEmitter<any> = new EventEmitter<any>();
	@Output() initialZoomInEnd: EventEmitter<any> = new EventEmitter<any>();
	@Output() initialZoomOut: EventEmitter<any> = new EventEmitter<any>();
	@Output() initialZoomOutEnd: EventEmitter<any> = new EventEmitter<any>();
	@Output() parseVerticalMargin: EventEmitter<any> = new EventEmitter<any>();
	@Output() close: EventEmitter<any> = new EventEmitter<any>();
	@Output() unbindEvents: EventEmitter<any> = new EventEmitter<any>();
	@Output() destroy: EventEmitter<any> = new EventEmitter<any>();
	@Output() updateScrollOffset: EventEmitter<any> = new EventEmitter<any>();
	@Output() preventDragEvent: EventEmitter<any> = new EventEmitter<any>();
	@Output() shareLinkClick: EventEmitter<any> = new EventEmitter<any>();

	isBrowser: boolean;
	key: any;
	image: any;
	subscription: Subscription;
	gallery: PhotoSwipe<PhotoSwipe.Options>;

	constructor(
		private lbService: NgxLightboxService,
		private ref: ChangeDetectorRef,
		@Inject(PLATFORM_ID) platformId: string,
		@Optional() @Inject(LIGHTBOX_CONFIG) private defaults: LightBoxConfig,
	) {
		ref.detach();
		this.isBrowser = this.isBrowser = isPlatformBrowser(platformId);
		this.subscription = this.lbService.ls.subscribe((index) => {
			this.openImage(index);
		});
		this.key = this.galleryKey;
	}

	ngOnChanges(): void {
		this.ref.detectChanges();
		if (this.isBrowser) {
			this.checkImageLoad();
		}
	}

	openImage(index): boolean {
		const galleryDOM = document.getElementsByClassName('ngx_photoswipe')[0];
		this.openPhotoSwipe(index, galleryDOM);
		return false;
	}

	getImages(): Array<Image> {
		return this.lbService.getImages(this.galleryKey);
	}

	private checkImageLoad(): void {
		IL(`#${this.galleryKey}`, (check: any) => {
			this.imagesLoaded.emit(check.images.length);
		});
	}

	private openPhotoSwipe(index: number, galleryDOM: any): boolean {
		const options: PhotoSwipe.Options = {};
		options.galleryUID = galleryDOM.getAttribute('data-pswp-uid') || 1;
		options.index = index ? index : 0;
		const PSWP: HTMLElement = document.querySelectorAll(
			'.pswp',
		)[0] as HTMLElement;

		this.gallery = new PhotoSwipe(
			PSWP,
			PhotoSwipeUI_Default,
			this.getImagesAsPhotoswipe(),
			this.getConfigOptions(options),
		);
		this.gallery.init();
		this.listenForEvent();
		return false;
	}

	private getConfigOptions(
		defaultOptions: LightBoxConfig,
	): PhotoSwipeUI_Default.Options {
		const config: LightBoxConfig = { ...this.defaults };
		Object.assign(config, defaultOptions);
		return config;
	}

	private getImagesAsPhotoswipe(): Array<PhotoswipeImage> {
		const items: Array<PhotoswipeImage> = [];
		items.length = 0;

		this.lbService
			.getImages(this.galleryKey)
			.forEach(function f(img): void {
				items.push(
					new PhotoswipeImage(img.largeUrl, img.width, img.height),
				);
			});
		return items;
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
		this._destroy();
	}

	private _destroy() {
		this.gallery.destroy();
	}

	listenForEvent() {
		this.gallery.listen('beforeChange', () => {
			this.beforeChange.emit();
		});
		this.gallery.listen('afterChange', () => {
			this.afterChange.emit();
		});
		this.gallery.listen('imageLoadComplete', () => {
			this.imageLoadComplete.emit();
		});
		this.gallery.listen('resize', () => {
			this.resize.emit();
		});
		this.gallery.listen('gettingData', () => {
			this.gettingData.emit();
		});
		this.gallery.listen('mouseUsed', () => {
			this.mouseUsed.emit();
		});
		this.gallery.listen('initialZoomIn', () => {
			this.initialZoomIn.emit();
		});
		this.gallery.listen('initialZoomInEnd', () => {
			this.initialZoomInEnd.emit();
		});
		this.gallery.listen('initialZoomOut', () => {
			this.initialZoomOut.emit();
		});
		this.gallery.listen('initialZoomOutEnd', () => {
			this.initialZoomOutEnd.emit();
		});
		this.gallery.listen('parseVerticalMargin', (item: PhotoSwipe.Item) => {
			this.parseVerticalMargin.emit(item);
		});
		this.gallery.listen('close', () => {
			this.close.emit();
		});
		this.gallery.listen('unbindEvents', () => {
			this.unbindEvents.emit();
		});
		this.gallery.listen('destroy', () => {
			this.destroy.emit();
		});
		this.gallery.listen('updateScrollOffset', () => {
			this.updateScrollOffset.emit();
		});
		this.gallery.listen(
			'preventDragEvent',
			(
				e: MouseEvent,
				isDown: boolean,
				preventObj: { prevent: boolean },
			) => {
				this.preventDragEvent.emit({ e, isDown, preventObj });
			},
		);
		this.gallery.listen('shareLinkClick', (e, target) => {
			this.shareLinkClick.emit({ e, target });
		});
	}

	private _goto(arg: number): void {
		this.gallery.goTo(arg);
	}
	private _next() {
		this.gallery.next();
	}
	private _prev(arg: number) {
		this.gallery.prev();
	}

	private _close() {
		this.gallery.close();
	}
	// Update gallery size
	// @param  {boolean} `force` If you set it to `true`,
	//                          size of the gallery will be updated
	//                          even if viewport size hasn't changed.
	// pswp.updateSize(force);
	private _updateSize(force: boolean) {
		this.gallery.updateSize(force);
	}

	// Zoom current slide to (optionally with animation)
	// @param  {number}   `destZoomLevel` Destination scale number. 1 - original.
	//                                   pswp.currItem.fitRatio - image will fit into viewport.
	// @param  {object}   `centerPoint`   Object of x and y coordinates, relative to viewport.
	// @param  {int}      `speed`         Animation duration. Can be 0.
	// @param  {function} `easingFn`      Easing function (optional). Set to false to use default easing.
	// @param  {function} `updateFn`      Function will be called on each update frame. (optional)
	//
	// Example below will 2x zoom to center of slide:
	// pswp.zoomTo(2, {x:pswp.viewportSize.x/2,y:pswp.viewportSize.y/2}, 2000, false, function(now) {
	//
	// });
	private _zoomCurrentlide(
		destZoomLevel: number,
		centerPoint: { x: number; y: number },
		speed: number,
		easingFn?: (k: number) => number,
		updateFn?: (now: number) => void,
	): void {
		this.gallery.zoomTo(
			destZoomLevel,
			centerPoint,
			speed,
			easingFn,
			updateFn,
		);
	}

	// set  items {
	// 	return this.gallery.items;
	// }
}
