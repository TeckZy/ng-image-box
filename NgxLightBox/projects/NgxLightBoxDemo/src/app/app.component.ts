import { Component, ViewChild } from '@angular/core';
import { NgxLightboxService, Image } from 'ngx-light-box';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'NgxLightBoxDemo';
	@ViewChild('photoSwipe', { static: false }) photoSwipe;

	constructor(private _ls: NgxLightboxService) {}
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
	options = {
		// optionName: 'option value'
		// for example:
		index: 0, // start at first slide
	};
	open() {
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
		this._ls.openImage(0);
		setInterval(this._ls.getReference().next, 1000);
	}
}
