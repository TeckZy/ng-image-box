import { ChangeDetectorRef, EventEmitter, OnChanges } from '@angular/core';
import { Image } from '../models/image.model';
import { NgxImageboxService } from '../service/ngx-image-box.service';
export declare class NgxImageboxComponent implements OnChanges {
	private lbService;
	private ref;
	key: string;
	loadedEmitter: EventEmitter<number>;
	isBrowser: boolean;
	constructor(
		lbService: NgxImageboxService,
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
