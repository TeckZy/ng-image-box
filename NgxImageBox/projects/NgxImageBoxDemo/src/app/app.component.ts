import { Component, ViewChild } from '@angular/core';
import { NgxImageboxService, Image } from 'dist/ngx-image-box';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'NgxLightBoxDemo';
	@ViewChild('photoSwipe', { static: false }) photoSwipe;

	constructor(private _ls: NgxImageboxService) {}
	images = [
		{
			src: 'http://via.placeholder.com/600x400',
			w: 600,
			h: 400,
		},
		{
			src: 'http://via.placeholder.com/800x600',
			w: 1200,
			h: 900,
		},
		{
			src: 'http://via.placeholder.com/960x960',
			w: 960,
			h: 960,
		},
		{
			src: 'http://via.placeholder.com/1080x960',
			w: 1080,
			h: 960,
		},
		{
			src: 'http://via.placeholder.com/1200x900',
			w: 1200,
			h: 900,
		},
	];
	open(imageIndex: number = 0) {
		this._ls.createGallery('galleryKey');
		const self = this;
		this.images.forEach((value) => {
			const img = new Image();
			img.largeUrl = value.src;
			img.height = 1920;
			img.width = 1280;
			img.size = `${img.width}x${img.height}`;
			img.thumbUrl = value.src;
			self._ls.addImage('galleryKey', img);
		});
		this._ls.openGallery(imageIndex);
	}

	autoSlide(index) {
		this._ls.createGallery('galleryKey');
		const self = this;
		this.images.forEach((value) => {
			const img = new Image();
			img.largeUrl = value.src;
			img.height = 1920;
			img.width = 1280;
			img.size = `${img.width}x${img.height}`;
			img.thumbUrl = value.src;
			self._ls.addImage('galleryKey', img);
		});
		this._ls.openAutoGallery(index, 1000); // time interval is 1000 ml
	}
}
