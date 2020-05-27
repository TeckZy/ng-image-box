import { Injectable } from '@angular/core';
import { Image } from './../models/image.model';
import { Subject } from 'rxjs';

@Injectable()
export class NgxLightboxService {
	ls = new Subject();
	gallery: { [key: string]: Array<Image> } = {};

	createGallery(key: string): void {
		this.gallery[key] = [];

		return;
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

	openImage(index) {
		this.ls.next(index);
	}
}
