import { Injectable, OnDestroy } from '@angular/core';
import { Image } from '../models/image.model';
import { Subject } from 'rxjs';
import { LightBox } from '../models/photoswipe-interface';

@Injectable()
export class NgxImageboxService implements OnDestroy {
	ls = new Subject();
	gallery: { [key: string]: Array<Image> } = {};
	galleryElement: PhotoSwipe<LightBox.LightBoxConfig>;
	timedGalleryInstance: any;

	createGallery(key: string): void {
		this.gallery[key] = [];

		return;
	}

	private _getReference() {
		this.ls.next('GET_REF');
	}

	setImages(key: string, images: Array<Image>): void {
		this.gallery[key] = images;

		return;
	}

	addImage(key: string, image: Image): void {
		if (key in this.gallery) {
			this.gallery[key].push(image);
		} else {
			throw new Error(`gallery '${key}' does not exist`);
		}

		return;
	}

	getImages(key: string): Array<Image> {
		return this.gallery[key];
	}
	removeImage(key: string, id: number): void {
		this.gallery[key].forEach((img, index) => {
			if (img.id === id) {
				this.gallery[key].splice(index, 1);
			}
		});
	}

	openGallery(index) {
		this.ls.next(index);
	}

	openAutoGallery(index: number, interval: number) {
		this.ls.next(index);
		this._getReference();
		this.timedGalleryInstance = setInterval(this.getReference().next, 1000);
	}

	getReference(): PhotoSwipe<LightBox.LightBoxConfig> {
		if (!this.galleryElement)
			throw Error('Call Open Image First to get The Reference ');
		return this.galleryElement;
	}

	clearReference() {
		clearInterval(this.timedGalleryInstance);
	}

	ngOnDestroy(): void {
		if (this.galleryElement) {
			this.clearReference();
			this.galleryElement.destroy();
		}
	}
}
