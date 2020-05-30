# Angular Light Box

This is an Angular light box library for the [PhotoSwipe](https://photoswipe.com/).

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
```

##### Load the module for your app:

Add service and image model in your app component

```javascript
```

##### Use it in your HTML template:

```html

```

##### Available control / helper functions (provided by service):

```javascript
createGallery(key: string)                                      // Create gallery with provided key name

addImage(key: string, image: Image)                             // Added Image in gallery
removeImage(key: string, id: number)                            // Added Image from gallery

openGallery(index: number)                                      // Open gallery with provided index of gallery images
openAutoGallery(index: number, interval: number))               // Open gallery with provided index of gallery images and set interval at which slide change

```

Above functions can be accessed through the lightbox service
