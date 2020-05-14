import { ChangeDetectorRef, EventEmitter, OnChanges } from '@angular/core';
import { Image } from './../models/image.model';
import { NgxLightboxService } from '../service/lightbox.service';
export declare class NgxLightboxComponent implements OnChanges {
	private lbService;
	private ref;
	key: string;
	loadedEmitter: EventEmitter<number>;
	isBrowser: boolean;
	constructor(
		lbService: NgxLightboxService,
		ref: ChangeDetectorRef,
		platformId: string,
	);
	ngOnChanges(): void;
	private checkImageLoad();
	openImage(img: Image): boolean;
	getImages(): Image[];
	private openPhotoSwipe(img, galleryDOM);
	private getImagesAsPhotoswipe();
}
