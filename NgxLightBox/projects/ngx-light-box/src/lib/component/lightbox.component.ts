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
	@Output('imagesLoaded') imagesLoaded: EventEmitter<
		number
	> = new EventEmitter();
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
		this.openPhotoSwipe(
			index,
			document.getElementsByClassName('ngx_photoswipe')[0],
		);

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
		options.galleryUID = galleryDOM.getAttribute('data-pswp-uid');
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
		return false;
	}

	private getConfigOptions(defaultOptions: LightBoxConfig) {
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
	}
	private _destroy() {
		this.gallery.destroy();
	}
}
