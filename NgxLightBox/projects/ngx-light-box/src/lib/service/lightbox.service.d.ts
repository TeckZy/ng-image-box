import { Image } from './../models/image.model';
export declare class NgxLightboxService {
	gallery: {
		[key: string]: Image[];
	};
	constructor();
	createGallery(key: string): void;
	setImages(key: string, images: Image[]): void;
	addImage(key: string, image: Image): void;
	getImages(key: string): Image[];
	removeImage(key: string, id: number): void;
	openGallery(index: any): void;
	openAutoGallery(index: number, interval: number): void;
	getReference(): PhotoSwipe<PhotoSwipe.Options>;
}
