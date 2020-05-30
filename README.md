# Angular Image Box [Demo](https://teckzy.github.io/ng-image-box/)

![Angular](https://img.shields.io/badge/Angular---1.0.0-brightgreen)
![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)

This is an Angular image box library for the [PhotoSwipe](https://photoswipe.com/).

This documentation is for the first version which requires Angular 5 or newer.

### Building the library

```bash
npm install
npm run build:lib
```

### Running the example

```bash
npm install
npm run start
```

### Installing and usage

```bash
npm install ngx-image-box --save
```

##### Load the module for your app:

Add NgxImageBox Module and Config

```javascript

import { NgxImageBoxModule, NgxImageBox, IMAGEBOX_CONFIG } from 'ngx-image-box';


const DEFAULT_CONFIG: NgxImageBox.NgxImageBoxConfig = {
	loop: false,
	escKey: false,
	closeOnScroll: false,
	// ui-config
	arrowEl: true,
};

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NgxImageBoxModule.forRoot()],
	providers: [
		{
			provide: IMAGEBOX_CONFIG,
			useValue: DEFAULT_CONFIG,
		},
	],
	bootstrap: [AppComponent],
})

```

##### Load the module for your app:

Add service and image model in your app component

```javascript

import { Component } from '@angular/core';
import { NgxImageboxService, Image } from 'ngx-image-box';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'NgxImageBoxDemo';

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
}


```

##### Use it in your HTML template:

```html
<ngx-image-box class="item" galleryKey="galleryKey"></ngx-image-box>
```

##### Available control / helper functions (provided by service):

```javascript
createGallery(key: string)                                      // Create gallery with provided key name

addImage(key: string, image: Image)                             // Added Image in gallery
removeImage(key: string, id: number)                            // Added Image from gallery

openGallery(index: number)                                      // Open gallery with provided index of gallery images
openAutoGallery(index: number, interval: number))               // Open gallery with provided index of gallery images and set interval at which slide change

```

Above functions can be accessed through the imagebox service

## 🛡 License

This project is licensed under the GNU v3 Public License License - see the [LICENSE](LICENSE) file for details

## 👨‍💻 Authors

-Manoj
-Akash Singh
