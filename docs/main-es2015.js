(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/ngx-light-box/fesm2015/ngx-light-box.js":
/*!******************************************************************************************!*\
  !*** /Users/akashs/ng-LightBox/NgxLightBox/dist/ngx-light-box/fesm2015/ngx-light-box.js ***!
  \******************************************************************************************/
/*! exports provided: Image, LIGHTBOX_CONFIG, LightBoxEvents, NgxLightboxComponent, NgxLightboxService, NgxLigthBoxModule, providers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHTBOX_CONFIG", function() { return LIGHTBOX_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightBoxEvents", function() { return LightBoxEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLightboxComponent", function() { return NgxLightboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLightboxService", function() { return NgxLightboxService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLigthBoxModule", function() { return NgxLigthBoxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! photoswipe */ "../../node_modules/photoswipe/dist/photoswipe.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(photoswipe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ "../../node_modules/photoswipe/dist/photoswipe-ui-default.js");
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! imagesloaded */ "../../node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxLightboxService {
    constructor() {
        this.ls = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.gallery = {};
    }
    /**
     * @param {?} key
     * @return {?}
     */
    createGallery(key) {
        this.gallery[key] = [];
        return;
    }
    /**
     * @private
     * @return {?}
     */
    _getReference() {
        this.ls.next('GET_REF');
    }
    /**
     * @param {?} key
     * @param {?} images
     * @return {?}
     */
    setImages(key, images) {
        this.gallery[key] = images;
        return;
    }
    /**
     * @param {?} key
     * @param {?} image
     * @return {?}
     */
    addImage(key, image) {
        if (key in this.gallery) {
            this.gallery[key].push(image);
        }
        else {
            throw new Error(`gallery '${key}' does not exist`);
        }
        return;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getImages(key) {
        return this.gallery[key];
    }
    /**
     * @param {?} key
     * @param {?} id
     * @return {?}
     */
    removeImage(key, id) {
        this.gallery[key].forEach((/**
         * @param {?} img
         * @param {?} index
         * @return {?}
         */
        (img, index) => {
            if (img.id === id) {
                this.gallery[key].splice(index, 1);
            }
        }));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    openGallery(index) {
        this.ls.next(index);
    }
    /**
     * @param {?} index
     * @param {?} interval
     * @return {?}
     */
    openAutoGallery(index, interval) {
        this.ls.next(index);
        this._getReference();
        this.timedGalleryInstance = setInterval(this.getReference().next, 1000);
    }
    /**
     * @return {?}
     */
    getReference() {
        if (!this.galleryElement)
            throw Error('Call Open Image First to get The Reference ');
        return this.galleryElement;
    }
    /**
     * @return {?}
     */
    clearReference() {
        clearInterval(this.timedGalleryInstance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.galleryElement) {
            this.clearReference();
            this.galleryElement.destroy();
        }
    }
}
NgxLightboxService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PhotoswipeImage {
    /**
     * @param {?} src
     * @param {?} w
     * @param {?} h
     */
    constructor(src, w, h) {
        this.src = src;
        this.w = w;
        this.h = h;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LIGHTBOX_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('LIGHTBOX_CONFIG');
/** @type {?} */
const LightBoxEvents = [
    'beforeChange',
    'afterChange',
    'imageLoadComplete',
    'resize',
    'gettingData',
    'mouseUsed',
    'initialZoomIn',
    'initialZoomInEnd',
    'initialZoomOut',
    'initialZoomOutEnd',
    'parseVerticalMargin',
    'close',
    'unbindEvents',
    'destroy',
    'updateScrollOffset',
    'preventDragEvent',
    'shareLinkClick',
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const IL = imagesloaded__WEBPACK_IMPORTED_MODULE_4__;
class NgxLightboxComponent {
    /**
     * @param {?} lbService
     * @param {?} ref
     * @param {?} platformId
     * @param {?} defaults
     */
    constructor(lbService, ref, platformId, defaults) {
        this.lbService = lbService;
        this.ref = ref;
        this.defaults = defaults;
        // OutPut Event Emmiter
        this.imagesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.beforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.afterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageLoadComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gettingData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseUsed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initialZoomIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initialZoomInEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initialZoomOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initialZoomOutEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.parseVerticalMargin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unbindEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateScrollOffset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.preventDragEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shareLinkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        ref.detach();
        this.isBrowser = this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId);
        this.subscription = this.lbService.ls.subscribe((/**
         * @param {?} index
         * @return {?}
         */
        (index) => {
            if (index === 'GET_REF') {
                this.lbService.galleryElement = this.gallery;
            }
            else
                this.openImage(index);
        }));
        this.key = this.galleryKey;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ref.detectChanges();
        if (this.isBrowser) {
            this.checkImageLoad();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    openImage(index) {
        /** @type {?} */
        const galleryDOM = document.getElementsByClassName('ngx_photoswipe')[0];
        this.openPhotoSwipe(index, galleryDOM);
        return false;
    }
    /**
     * @return {?}
     */
    getImages() {
        return this.lbService.getImages(this.galleryKey);
    }
    /**
     * @private
     * @return {?}
     */
    checkImageLoad() {
        IL(`#${this.galleryKey}`, (/**
         * @param {?} check
         * @return {?}
         */
        (check) => {
            this.imagesLoaded.emit(check.images.length);
        }));
    }
    /**
     * @private
     * @param {?} index
     * @param {?} galleryDOM
     * @return {?}
     */
    openPhotoSwipe(index, galleryDOM) {
        /** @type {?} */
        const options = {};
        options.galleryUID = galleryDOM.getAttribute('data-pswp-uid') || 1;
        options.index = index ? index : 0;
        /** @type {?} */
        const PSWP = (/** @type {?} */ (document.querySelectorAll('.pswp')[0]));
        this.gallery = new photoswipe__WEBPACK_IMPORTED_MODULE_2__(PSWP, photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_3__, this.getImagesAsPhotoswipe(), this.getConfigOptions(options));
        this.gallery.init();
        this.listenForEvent();
        return false;
    }
    /**
     * @private
     * @param {?} defaultOptions
     * @return {?}
     */
    getConfigOptions(defaultOptions) {
        /** @type {?} */
        const config = Object.assign({}, this.defaults);
        Object.assign(config, defaultOptions);
        return config;
    }
    /**
     * @private
     * @return {?}
     */
    getImagesAsPhotoswipe() {
        /** @type {?} */
        const items = [];
        items.length = 0;
        this.lbService
            .getImages(this.galleryKey)
            .forEach((/**
         * @param {?} img
         * @return {?}
         */
        function f(img) {
            items.push(new PhotoswipeImage(img.largeUrl, img.width, img.height));
        }));
        return items;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this._destroy();
    }
    /**
     * @private
     * @return {?}
     */
    _destroy() {
        this.gallery.destroy();
    }
    /**
     * @return {?}
     */
    listenForEvent() {
        this.gallery.listen('beforeChange', (/**
         * @return {?}
         */
        () => {
            this.beforeChange.emit();
        }));
        this.gallery.listen('afterChange', (/**
         * @return {?}
         */
        () => {
            this.afterChange.emit();
        }));
        this.gallery.listen('imageLoadComplete', (/**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        (index, item) => {
            this.imageLoadComplete.emit({ index, item });
        }));
        this.gallery.listen('resize', (/**
         * @return {?}
         */
        () => {
            this.resize.emit();
        }));
        this.gallery.listen('gettingData', (/**
         * @return {?}
         */
        () => {
            this.gettingData.emit();
        }));
        this.gallery.listen('mouseUsed', (/**
         * @return {?}
         */
        () => {
            this.mouseUsed.emit();
        }));
        this.gallery.listen('initialZoomIn', (/**
         * @return {?}
         */
        () => {
            this.initialZoomIn.emit();
        }));
        this.gallery.listen('initialZoomInEnd', (/**
         * @return {?}
         */
        () => {
            this.initialZoomInEnd.emit();
        }));
        this.gallery.listen('initialZoomOut', (/**
         * @return {?}
         */
        () => {
            this.initialZoomOut.emit();
        }));
        this.gallery.listen('initialZoomOutEnd', (/**
         * @return {?}
         */
        () => {
            this.initialZoomOutEnd.emit();
        }));
        this.gallery.listen('parseVerticalMargin', (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            this.parseVerticalMargin.emit(item);
        }));
        this.gallery.listen('close', (/**
         * @return {?}
         */
        () => {
            this.lbService.clearReference();
            this.close.emit();
        }));
        this.gallery.listen('unbindEvents', (/**
         * @return {?}
         */
        () => {
            this.unbindEvents.emit();
        }));
        this.gallery.listen('destroy', (/**
         * @return {?}
         */
        () => {
            this.lbService.clearReference();
            this.destroy.emit();
        }));
        this.gallery.listen('updateScrollOffset', (/**
         * @param {?} _offset
         * @return {?}
         */
        (_offset) => {
            this.updateScrollOffset.emit(_offset);
        }));
        this.gallery.listen('preventDragEvent', (/**
         * @param {?} e
         * @param {?} isDown
         * @param {?} preventObj
         * @return {?}
         */
        (e, isDown, preventObj) => {
            this.preventDragEvent.emit({ e, isDown, preventObj });
        }));
        this.gallery.listen('shareLinkClick', (/**
         * @param {?} e
         * @param {?} target
         * @return {?}
         */
        (e, target) => {
            this.shareLinkClick.emit({ e, target });
        }));
    }
}
NgxLightboxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ngx-lightbox',
                template: "<div\n\tclass=\"ngx_photoswipe\"\n\t[id]=\"key\"\n\tngxlightbox\n\titemscope\n\titemtype=\"http://schema.org/ImageGallery\"\n>\n\t<figure\n\t\titemprop=\"associatedMedia\"\n\t\titemscope\n\t\titemtype=\"http://schema.org/ImageObject\"\n\t\t*ngFor=\"let image of getImages()\"\n\t>\n\t\t<a\n\t\t\thref=\"{{ image.largeUrl }}\"\n\t\t\titemprop=\"contentUrl\"\n\t\t\t[attr.data-size]=\"image.width + 'x' + image.height\"\n\t\t\t(click)=\"openImage(image)\"\n\t\t>\n\t\t\t<img\n\t\t\t\tsrc=\"{{ image.thumbUrl }}\"\n\t\t\t\titemprop=\"thumbnail\"\n\t\t\t\talt=\"{{ image.description }}\"\n\t\t\t/>\n\t\t</a>\n\t\t<figcaption itemprop=\"caption description\">\n\t\t\t{{ image.description }}\n\t\t</figcaption>\n\t</figure>\n</div>\n\n<!-- Root element of PhotoSwipe. Must have class pswp. -->\n<div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<!-- Background of PhotoSwipe.\n           It's a separate element, as animating opacity is faster than rgba(). -->\n\t<div class=\"pswp__bg\"></div>\n\t<!-- Slides wrapper with overflow:hidden. -->\n\t<div class=\"pswp__scroll-wrap\">\n\t\t<!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->\n\t\t<!-- don't modify these 3 pswp__item elements, data is added later on. -->\n\t\t<div class=\"pswp__container\">\n\t\t\t<div class=\"pswp__item\"></div>\n\t\t\t<div class=\"pswp__item\"></div>\n\t\t\t<div class=\"pswp__item\"></div>\n\t\t</div>\n\t\t<!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n\t\t<div class=\"pswp__ui pswp__ui--hidden\">\n\t\t\t<div class=\"pswp__top-bar\">\n\t\t\t\t<!--  Controls are self-explanatory. Order can be changed. -->\n\t\t\t\t<div class=\"pswp__counter\"></div>\n\t\t\t\t<button\n\t\t\t\t\tclass=\"pswp__button pswp__button--close\"\n\t\t\t\t\ttitle=\"Close (Esc)\"\n\t\t\t\t></button>\n\t\t\t\t<button\n\t\t\t\t\tclass=\"pswp__button pswp__button--share\"\n\t\t\t\t\ttitle=\"Share\"\n\t\t\t\t></button>\n\t\t\t\t<button\n\t\t\t\t\tclass=\"pswp__button pswp__button--fs\"\n\t\t\t\t\ttitle=\"Toggle fullscreen\"\n\t\t\t\t></button>\n\t\t\t\t<button\n\t\t\t\t\tclass=\"pswp__button pswp__button--zoom\"\n\t\t\t\t\ttitle=\"Zoom in/out\"\n\t\t\t\t></button>\n\t\t\t\t<!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->\n\t\t\t\t<!-- element will get class pswp__preloader--active when preloader is running -->\n\t\t\t\t<div class=\"pswp__preloader\">\n\t\t\t\t\t<div class=\"pswp__preloader__icn\">\n\t\t\t\t\t\t<div class=\"pswp__preloader__cut\">\n\t\t\t\t\t\t\t<div class=\"pswp__preloader__donut\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div\n\t\t\t\tclass=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\"\n\t\t\t>\n\t\t\t\t<div class=\"pswp__share-tooltip\"></div>\n\t\t\t</div>\n\t\t\t<button\n\t\t\t\tclass=\"pswp__button pswp__button--arrow--left\"\n\t\t\t\ttitle=\"Previous (arrow left)\"\n\t\t\t></button>\n\t\t\t<button\n\t\t\t\tclass=\"pswp__button pswp__button--arrow--right\"\n\t\t\t\ttitle=\"Next (arrow right)\"\n\t\t\t></button>\n\t\t\t<div class=\"pswp__caption\">\n\t\t\t\t<div class=\"pswp__caption__center\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: ["/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */.pswp{display:none;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;touch-action:none;z-index:1500;-webkit-text-size-adjust:100%;-webkit-backface-visibility:hidden;outline:0}.pswp *{box-sizing:border-box}.pswp img{max-width:none}.pswp--animate_opacity{opacity:.001;will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--open{display:block}.pswp--zoom-allowed .pswp__img{cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in}.pswp--zoomed-in .pswp__img{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.pswp--dragging .pswp__img{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.pswp__bg{position:absolute;left:0;top:0;width:100%;height:100%;background:#000;opacity:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;will-change:opacity}.pswp__scroll-wrap{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden}.pswp__container,.pswp__zoom-wrap{touch-action:none;position:absolute;left:0;right:0;top:0;bottom:0;-webkit-backface-visibility:hidden}.pswp__container,.pswp__img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.pswp__zoom-wrap{position:absolute;width:100%;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 333ms cubic-bezier(.4,0,.22,1);transition:transform 333ms cubic-bezier(.4,0,.22,1),-webkit-transform 333ms cubic-bezier(.4,0,.22,1)}.pswp__bg{will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--animated-in .pswp__bg,.pswp--animated-in .pswp__zoom-wrap{-webkit-transition:none;transition:none}.pswp__item{position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden}.pswp__img{position:absolute;width:auto;height:auto;top:0;left:0}.pswp__img--placeholder{-webkit-backface-visibility:hidden}.pswp__img--placeholder--blank{background:#222}.pswp--ie .pswp__img{width:100%!important;height:auto!important;left:0;top:0}.pswp__error-msg{position:absolute;left:0;top:50%;width:100%;text-align:center;font-size:14px;line-height:16px;margin-top:-8px;color:#ccc}.pswp__error-msg a{color:#ccc;text-decoration:underline}/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */.pswp__button{position:relative;cursor:pointer;overflow:visible;-webkit-appearance:none;display:block;border:0;padding:0;margin:0;float:right;opacity:.75;-webkit-transition:opacity .2s;transition:opacity .2s;box-shadow:none}.pswp__button:focus,.pswp__button:hover{opacity:1}.pswp__button:active{outline:0;opacity:.9}.pswp__button::-moz-focus-inner{padding:0;border:0}.pswp__ui--over-close .pswp__button--close{opacity:1}.pswp__button,.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAABYCAQAAACjBqE3AAAB6klEQVR4Ae3bsWpUQRTG8YkkanwCa7GzVotsI/gEgk9h4Vu4ySLYmMYgbJrc3lrwZbJwC0FMt4j7F6Y4oIZrsXtgxvx/1c0ufEX4cnbmLCmSJEmSJEmSJEmSJP3XCBPvbJU+8doWmDFwyZpLBmYlNJebz0KwzykwsuSYJSNwykEJreV2BaBMaLIQZ2xYcFgqDlmw4ayE/FwL0dDk4Qh4W37DAjgqIT+3HRbigjH+iikVdxgZStgyN0Su2sXIeTwTT+esdpcbIlfNAuZ/TxresG4zV8kYWSZNiKUTokMMSWeIwTNEn4fK2TW3gRNgVkJLuVksROA9G+bEvoATNlBCa7nZXEwdxEZxzpKRKFh+bsv8LmPFmhX1OwfIz81jIRJQ5eeqG9B+riRJkiRJkiRJkiRJkiRJkiRJUkvA/8RQoEpKlJWINFkJ62AlrEP/mNBibnv2yz/A3t7Uq3LcpoxP8COjC1T5vxoAD5VdoEqdDrd5QuW1swtUSaueh3zkiuBiqgtA2OlkeMcP/uDqugsJdbjHF65VdPMKwS0+WQc/MgKvrIOHysB9vgPwk8+85hmPbnQdvHZyDMAFD7L3EOpgMcVdvnHFS0/vlatrXvCVx0U9gt3fxvnA0/hB4nmRJEmSJEmSJEmSJGmHfgFLaDPoMu5xWwAAAABJRU5ErkJggg==) 0 0/264px 88px no-repeat;width:44px;height:44px}@media (-webkit-min-device-pixel-ratio:1.1),(-webkit-min-device-pixel-ratio:1.09375),(min-resolution:105dpi),(min-resolution:1.1dppx){.pswp--svg .pswp__button,.pswp--svg .pswp__button--arrow--left:before,.pswp--svg .pswp__button--arrow--right:before{background-image:url(\"data:image/svg+xml,%3Csvg width='264' height='88' viewBox='0 0 264 88' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Edefault-skin 2%3C/title%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg%3E%3Cpath d='M67.002 59.5v3.768c-6.307.84-9.184 5.75-10.002 9.732 2.22-2.83 5.564-5.098 10.002-5.098V71.5L73 65.585 67.002 59.5z' id='Shape' fill='%23fff'/%3E%3Cg fill='%23fff'%3E%3Cpath d='M13 29v-5h2v3h3v2h-5zM13 15h5v2h-3v3h-2v-5zM31 15v5h-2v-3h-3v-2h5zM31 29h-5v-2h3v-3h2v5z' id='Shape'/%3E%3C/g%3E%3Cg fill='%23fff'%3E%3Cpath d='M62 24v5h-2v-3h-3v-2h5zM62 20h-5v-2h3v-3h2v5zM70 20v-5h2v3h3v2h-5zM70 24h5v2h-3v3h-2v-5z'/%3E%3C/g%3E%3Cpath d='M20.586 66l-5.656-5.656 1.414-1.414L22 64.586l5.656-5.656 1.414 1.414L23.414 66l5.656 5.656-1.414 1.414L22 67.414l-5.656 5.656-1.414-1.414L20.586 66z' fill='%23fff'/%3E%3Cpath d='M111.785 65.03L110 63.5l3-3.5h-10v-2h10l-3-3.5 1.785-1.468L117 59l-5.215 6.03z' fill='%23fff'/%3E%3Cpath d='M152.215 65.03L154 63.5l-3-3.5h10v-2h-10l3-3.5-1.785-1.468L147 59l5.215 6.03z' fill='%23fff'/%3E%3Cg%3E%3Cpath id='Rectangle-11' fill='%23fff' d='M160.957 28.543l-3.25-3.25-1.413 1.414 3.25 3.25z'/%3E%3Cpath d='M152.5 27c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5-5.5 2.462-5.5 5.5 2.462 5.5 5.5 5.5z' id='Oval-1' stroke='%23fff' stroke-width='1.5'/%3E%3Cpath fill='%23fff' d='M150 21h5v1h-5z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M116.957 28.543l-1.414 1.414-3.25-3.25 1.414-1.414 3.25 3.25z' fill='%23fff'/%3E%3Cpath d='M108.5 27c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5-5.5 2.462-5.5 5.5 2.462 5.5 5.5 5.5z' stroke='%23fff' stroke-width='1.5'/%3E%3Cpath fill='%23fff' d='M106 21h5v1h-5z'/%3E%3Cpath fill='%23fff' d='M109.043 19.008l-.085 5-1-.017.085-5z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.pswp--svg .pswp__button--arrow--left,.pswp--svg .pswp__button--arrow--right{background:0 0}}.pswp__button--close{background-position:0 -44px}.pswp__button--share{background-position:-44px -44px}.pswp__button--fs{display:none}.pswp--supports-fs .pswp__button--fs{display:block}.pswp--fs .pswp__button--fs{background-position:-44px 0}.pswp__button--zoom{display:none;background-position:-88px 0}.pswp--zoom-allowed .pswp__button--zoom{display:block}.pswp--zoomed-in .pswp__button--zoom{background-position:-132px 0}.pswp--touch .pswp__button--arrow--left,.pswp--touch .pswp__button--arrow--right{visibility:hidden}.pswp__button--arrow--left,.pswp__button--arrow--right{background:0 0;top:50%;margin-top:-50px;width:70px;height:100px;position:absolute}.pswp__button--arrow--left{left:0}.pswp__button--arrow--right{right:0}.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{content:\"\";top:35px;background-color:rgba(0,0,0,.3);height:30px;width:32px;position:absolute}.pswp__button--arrow--left:before{left:6px;background-position:-138px -44px}.pswp__button--arrow--right:before{right:6px;background-position:-94px -44px}.pswp__counter,.pswp__share-modal{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pswp__share-modal{display:block;background:rgba(0,0,0,.5);width:100%;height:100%;top:0;left:0;padding:10px;position:absolute;z-index:1600;opacity:0;-webkit-transition:opacity .25s ease-out;transition:opacity .25s ease-out;-webkit-backface-visibility:hidden;will-change:opacity}.pswp__share-modal--hidden{display:none}.pswp__share-tooltip{z-index:1620;position:absolute;background:#fff;top:56px;border-radius:2px;display:block;width:auto;right:44px;box-shadow:0 2px 5px rgba(0,0,0,.25);-webkit-transform:translateY(6px);transform:translateY(6px);-webkit-transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s;-webkit-backface-visibility:hidden;will-change:transform}.pswp__share-tooltip a{display:block;padding:8px 12px;color:#000;text-decoration:none;font-size:14px;line-height:18px}.pswp__share-tooltip a:hover{text-decoration:none;color:#000}.pswp__share-tooltip a:first-child{border-radius:2px 2px 0 0}.pswp__share-tooltip a:last-child{border-radius:0 0 2px 2px}.pswp__share-modal--fade-in{opacity:1}.pswp__share-modal--fade-in .pswp__share-tooltip{-webkit-transform:translateY(0);transform:translateY(0)}.pswp--touch .pswp__share-tooltip a{padding:16px 12px}a.pswp__share--facebook:before{content:\"\";display:block;width:0;height:0;position:absolute;top:-12px;right:15px;border:6px solid transparent;border-bottom-color:#fff;-webkit-pointer-events:none;-moz-pointer-events:none;pointer-events:none}a.pswp__share--facebook:hover{background:#3e5c9a;color:#fff}a.pswp__share--facebook:hover:before{border-bottom-color:#3e5c9a}a.pswp__share--twitter:hover{background:#55acee;color:#fff}a.pswp__share--pinterest:hover{background:#ccc;color:#ce272d}a.pswp__share--download:hover{background:#ddd}.pswp__counter{position:absolute;left:0;top:0;height:44px;font-size:13px;line-height:44px;color:#fff;opacity:.75;padding:0 10px}.pswp__caption{position:absolute;left:0;bottom:0;width:100%;min-height:44px}.pswp__caption small{font-size:11px;color:#bbb}.pswp__caption__center{text-align:left;max-width:420px;margin:0 auto;font-size:13px;padding:10px;line-height:20px;color:#ccc}.pswp__caption--empty{display:none}.pswp__caption--fake{visibility:hidden}.pswp__preloader{width:44px;height:44px;position:absolute;top:0;left:50%;margin-left:-22px;opacity:0;-webkit-transition:opacity .25s ease-out;transition:opacity .25s ease-out;will-change:opacity;direction:ltr}.pswp__preloader__icn{width:20px;height:20px;margin:12px}.pswp__preloader--active{opacity:1}.pswp__preloader--active .pswp__preloader__icn{background:url(data:image/gif;base64,R0lGODlhFAAUAPMIAIeHhz8/P1dXVycnJ8/Pz7e3t5+fn29vb////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAIACwAAAAAFAAUAEAEUxDJSatFxtwaggWAdIyHJAhXoRYSQUhDPGx0TbmujahbXGWZWqdDAYEsp5NupLPkdDwE7oXwWVasimzWrAE1tKFHErQRK8eL8mMUlRBJVI307uoiACH5BAUHAAgALAEAAQASABIAAAROEMkpS6E4W5upMdUmEQT2feFIltMJYivbvhnZ3R0A4NMwIDodz+cL7nDEn5CH8DGZh8MtEMBEoxkqlXKVIgQCibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpjaE4W5spANUmFQX2feFIltMJYivbvhnZ3d1x4BNBIDodz+cL7nDEn5CH8DGZAsFtMMBEoxkqlXKVIgIBibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpAaA4W5vpOdUmGQb2feFIltMJYivbvhnZ3Z0g4FNRIDodz+cL7nDEn5CH8DGZgcCNQMBEoxkqlXKVIgYDibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpz6E4W5upENUmAQD2feFIltMJYivbvhnZ3V0Q4JNhIDodz+cL7nDEn5CH8DGZg8GtUMBEoxkqlXKVIggEibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkphaA4W5tpCNUmHQf2feFIltMJYivbvhnZ3d0w4BMAIDodz+cL7nDEn5CH8DGZBMLNYMBEoxkqlXKVIgoFibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpQ6A4W5vpGNUmCQL2feFIltMJYivbvhnZ3R1B4NNxIDodz+cL7nDEn5CH8DGZhcINAMBEoxkqlXKVIgwGibbK9YLBYvLtHH5K0J0IACH5BAUHAAcALAEAAQASABIAAANCeLo6wzA6FxkhbaoQ4L3ZxnXLh0EjWZ4RV71VUcCLIByyTNt2PsO8m452sBGJBsNxkUwuD03lAQBASqnUJ7aq5UYSADs=) no-repeat}.pswp--css_animation .pswp__preloader--active{opacity:1}.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn{-webkit-animation:.5s linear infinite clockwise;animation:.5s linear infinite clockwise}.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut{-webkit-animation:1s cubic-bezier(.4,0,.22,1) infinite donut-rotate;animation:1s cubic-bezier(.4,0,.22,1) infinite donut-rotate}.pswp--css_animation .pswp__preloader__icn{background:0 0;opacity:.75;width:14px;height:14px;position:absolute;left:15px;top:15px;margin:0}.pswp--css_animation .pswp__preloader__cut{position:relative;width:7px;height:14px;overflow:hidden}.pswp--css_animation .pswp__preloader__donut{box-sizing:border-box;width:14px;height:14px;border:2px solid #fff;border-radius:50%;border-left-color:transparent;border-bottom-color:transparent;position:absolute;top:0;left:0;background:0 0;margin:0}@media screen and (max-width:1024px){.pswp__preloader{position:relative;left:auto;top:auto;margin:0;float:right}}@-webkit-keyframes clockwise{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes clockwise{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes donut-rotate{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}}@keyframes donut-rotate{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}}.pswp__ui{-webkit-font-smoothing:auto;visibility:visible;opacity:1;z-index:1550}.pswp__top-bar{position:absolute;left:0;top:0;height:44px;width:100%}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right,.pswp__caption,.pswp__top-bar{-webkit-backface-visibility:hidden;will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right{visibility:visible}.pswp__caption,.pswp__top-bar{background-color:rgba(0,0,0,.5)}.pswp__ui--fit .pswp__caption,.pswp__ui--fit .pswp__top-bar{background-color:rgba(0,0,0,.3)}.pswp__ui--idle .pswp__button--arrow--left,.pswp__ui--idle .pswp__button--arrow--right,.pswp__ui--idle .pswp__top-bar{opacity:0}.pswp__ui--hidden .pswp__button--arrow--left,.pswp__ui--hidden .pswp__button--arrow--right,.pswp__ui--hidden .pswp__caption,.pswp__ui--hidden .pswp__top-bar{opacity:.001}.pswp__ui--one-slide .pswp__button--arrow--left,.pswp__ui--one-slide .pswp__button--arrow--right,.pswp__ui--one-slide .pswp__counter{display:none}.pswp__element--disabled{display:none!important}.pswp--minimal--dark .pswp__top-bar{background:0 0}"]
            }] }
];
/** @nocollapse */
NgxLightboxComponent.ctorParameters = () => [
    { type: NgxLightboxService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LIGHTBOX_CONFIG,] }] }
];
NgxLightboxComponent.propDecorators = {
    galleryKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['galleryKey',] }],
    imagesLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    beforeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    afterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    imageLoadComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    gettingData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mouseUsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    initialZoomIn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    initialZoomInEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    initialZoomOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    initialZoomOutEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    parseVerticalMargin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    unbindEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    destroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    updateScrollOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    preventDragEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    shareLinkClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Image {
    constructor() { }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import 'photoswipe/dist/photoswipe.css';
// import 'photoswipe/dist/default-skin/default-skin.css';
/** @type {?} */
let providers = [NgxLightboxService];
class NgxLigthBoxModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxLigthBoxModule,
            providers,
        };
    }
}
NgxLigthBoxModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                declarations: [NgxLightboxComponent],
                providers: [NgxLightboxService],
                exports: [NgxLightboxComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-light-box.js.map


/***/ }),

/***/ "../../dist/ngx-light-box/ngx-light-box.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** /Users/akashs/ng-LightBox/NgxLightBox/dist/ngx-light-box/ngx-light-box.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: NgxLigthBoxModuleNgFactory, RenderType_NgxLightboxComponent, View_NgxLightboxComponent_0, View_NgxLightboxComponent_Host_0, NgxLightboxComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLigthBoxModuleNgFactory", function() { return NgxLigthBoxModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NgxLightboxComponent", function() { return RenderType_NgxLightboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NgxLightboxComponent_0", function() { return View_NgxLightboxComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NgxLightboxComponent_Host_0", function() { return View_NgxLightboxComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLightboxComponentNgFactory", function() { return NgxLightboxComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_light_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-light-box */ "../../dist/ngx-light-box/fesm2015/ngx-light-box.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var NgxLigthBoxModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](ngx_light_box__WEBPACK_IMPORTED_MODULE_1__["NgxLigthBoxModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, ngx_light_box__WEBPACK_IMPORTED_MODULE_1__["NgxLightboxService"], ngx_light_box__WEBPACK_IMPORTED_MODULE_1__["NgxLightboxService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_light_box__WEBPACK_IMPORTED_MODULE_1__["NgxLigthBoxModule"], ngx_light_box__WEBPACK_IMPORTED_MODULE_1__["NgxLigthBoxModule"], [])]); });

var styles_NgxLightboxComponent = [".pswp{display:none;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;touch-action:none;z-index:1500;-webkit-text-size-adjust:100%;-webkit-backface-visibility:hidden;outline:0}.pswp *{box-sizing:border-box}.pswp img{max-width:none}.pswp--animate_opacity{opacity:.001;will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--open{display:block}.pswp--zoom-allowed .pswp__img{cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in}.pswp--zoomed-in .pswp__img{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.pswp--dragging .pswp__img{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.pswp__bg{position:absolute;left:0;top:0;width:100%;height:100%;background:#000;opacity:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;will-change:opacity}.pswp__scroll-wrap{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden}.pswp__container,.pswp__zoom-wrap{touch-action:none;position:absolute;left:0;right:0;top:0;bottom:0;-webkit-backface-visibility:hidden}.pswp__container,.pswp__img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.pswp__zoom-wrap{position:absolute;width:100%;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 333ms cubic-bezier(.4,0,.22,1);transition:transform 333ms cubic-bezier(.4,0,.22,1),-webkit-transform 333ms cubic-bezier(.4,0,.22,1)}.pswp__bg{will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--animated-in .pswp__bg,.pswp--animated-in .pswp__zoom-wrap{-webkit-transition:none;transition:none}.pswp__item{position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden}.pswp__img{position:absolute;width:auto;height:auto;top:0;left:0}.pswp__img--placeholder{-webkit-backface-visibility:hidden}.pswp__img--placeholder--blank{background:#222}.pswp--ie .pswp__img{width:100%!important;height:auto!important;left:0;top:0}.pswp__error-msg{position:absolute;left:0;top:50%;width:100%;text-align:center;font-size:14px;line-height:16px;margin-top:-8px;color:#ccc}.pswp__error-msg a{color:#ccc;text-decoration:underline}.pswp__button{position:relative;cursor:pointer;overflow:visible;-webkit-appearance:none;display:block;border:0;padding:0;margin:0;float:right;opacity:.75;-webkit-transition:opacity .2s;transition:opacity .2s;box-shadow:none}.pswp__button:focus,.pswp__button:hover{opacity:1}.pswp__button:active{outline:0;opacity:.9}.pswp__button::-moz-focus-inner{padding:0;border:0}.pswp__ui--over-close .pswp__button--close{opacity:1}.pswp__button,.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAABYCAQAAACjBqE3AAAB6klEQVR4Ae3bsWpUQRTG8YkkanwCa7GzVotsI/gEgk9h4Vu4ySLYmMYgbJrc3lrwZbJwC0FMt4j7F6Y4oIZrsXtgxvx/1c0ufEX4cnbmLCmSJEmSJEmSJEmSJP3XCBPvbJU+8doWmDFwyZpLBmYlNJebz0KwzykwsuSYJSNwykEJreV2BaBMaLIQZ2xYcFgqDlmw4ayE/FwL0dDk4Qh4W37DAjgqIT+3HRbigjH+iikVdxgZStgyN0Su2sXIeTwTT+esdpcbIlfNAuZ/TxresG4zV8kYWSZNiKUTokMMSWeIwTNEn4fK2TW3gRNgVkJLuVksROA9G+bEvoATNlBCa7nZXEwdxEZxzpKRKFh+bsv8LmPFmhX1OwfIz81jIRJQ5eeqG9B+riRJkiRJkiRJkiRJkiRJkiRJUkvA/8RQoEpKlJWINFkJ62AlrEP/mNBibnv2yz/A3t7Uq3LcpoxP8COjC1T5vxoAD5VdoEqdDrd5QuW1swtUSaueh3zkiuBiqgtA2OlkeMcP/uDqugsJdbjHF65VdPMKwS0+WQc/MgKvrIOHysB9vgPwk8+85hmPbnQdvHZyDMAFD7L3EOpgMcVdvnHFS0/vlatrXvCVx0U9gt3fxvnA0/hB4nmRJEmSJEmSJEmSJGmHfgFLaDPoMu5xWwAAAABJRU5ErkJggg==) 0 0/264px 88px no-repeat;width:44px;height:44px}@media (-webkit-min-device-pixel-ratio:1.1),(-webkit-min-device-pixel-ratio:1.09375),(min-resolution:105dpi),(min-resolution:1.1dppx){.pswp--svg .pswp__button,.pswp--svg .pswp__button--arrow--left:before,.pswp--svg .pswp__button--arrow--right:before{background-image:url(\"data:image/svg+xml,%3Csvg width='264' height='88' viewBox='0 0 264 88' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Edefault-skin 2%3C/title%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg%3E%3Cpath d='M67.002 59.5v3.768c-6.307.84-9.184 5.75-10.002 9.732 2.22-2.83 5.564-5.098 10.002-5.098V71.5L73 65.585 67.002 59.5z' id='Shape' fill='%23fff'/%3E%3Cg fill='%23fff'%3E%3Cpath d='M13 29v-5h2v3h3v2h-5zM13 15h5v2h-3v3h-2v-5zM31 15v5h-2v-3h-3v-2h5zM31 29h-5v-2h3v-3h2v5z' id='Shape'/%3E%3C/g%3E%3Cg fill='%23fff'%3E%3Cpath d='M62 24v5h-2v-3h-3v-2h5zM62 20h-5v-2h3v-3h2v5zM70 20v-5h2v3h3v2h-5zM70 24h5v2h-3v3h-2v-5z'/%3E%3C/g%3E%3Cpath d='M20.586 66l-5.656-5.656 1.414-1.414L22 64.586l5.656-5.656 1.414 1.414L23.414 66l5.656 5.656-1.414 1.414L22 67.414l-5.656 5.656-1.414-1.414L20.586 66z' fill='%23fff'/%3E%3Cpath d='M111.785 65.03L110 63.5l3-3.5h-10v-2h10l-3-3.5 1.785-1.468L117 59l-5.215 6.03z' fill='%23fff'/%3E%3Cpath d='M152.215 65.03L154 63.5l-3-3.5h10v-2h-10l3-3.5-1.785-1.468L147 59l5.215 6.03z' fill='%23fff'/%3E%3Cg%3E%3Cpath id='Rectangle-11' fill='%23fff' d='M160.957 28.543l-3.25-3.25-1.413 1.414 3.25 3.25z'/%3E%3Cpath d='M152.5 27c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5-5.5 2.462-5.5 5.5 2.462 5.5 5.5 5.5z' id='Oval-1' stroke='%23fff' stroke-width='1.5'/%3E%3Cpath fill='%23fff' d='M150 21h5v1h-5z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M116.957 28.543l-1.414 1.414-3.25-3.25 1.414-1.414 3.25 3.25z' fill='%23fff'/%3E%3Cpath d='M108.5 27c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5-5.5 2.462-5.5 5.5 2.462 5.5 5.5 5.5z' stroke='%23fff' stroke-width='1.5'/%3E%3Cpath fill='%23fff' d='M106 21h5v1h-5z'/%3E%3Cpath fill='%23fff' d='M109.043 19.008l-.085 5-1-.017.085-5z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.pswp--svg .pswp__button--arrow--left,.pswp--svg .pswp__button--arrow--right{background:0 0}}.pswp__button--close{background-position:0 -44px}.pswp__button--share{background-position:-44px -44px}.pswp__button--fs{display:none}.pswp--supports-fs .pswp__button--fs{display:block}.pswp--fs .pswp__button--fs{background-position:-44px 0}.pswp__button--zoom{display:none;background-position:-88px 0}.pswp--zoom-allowed .pswp__button--zoom{display:block}.pswp--zoomed-in .pswp__button--zoom{background-position:-132px 0}.pswp--touch .pswp__button--arrow--left,.pswp--touch .pswp__button--arrow--right{visibility:hidden}.pswp__button--arrow--left,.pswp__button--arrow--right{background:0 0;top:50%;margin-top:-50px;width:70px;height:100px;position:absolute}.pswp__button--arrow--left{left:0}.pswp__button--arrow--right{right:0}.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{content:\"\";top:35px;background-color:rgba(0,0,0,.3);height:30px;width:32px;position:absolute}.pswp__button--arrow--left:before{left:6px;background-position:-138px -44px}.pswp__button--arrow--right:before{right:6px;background-position:-94px -44px}.pswp__counter,.pswp__share-modal{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pswp__share-modal{display:block;background:rgba(0,0,0,.5);width:100%;height:100%;top:0;left:0;padding:10px;position:absolute;z-index:1600;opacity:0;-webkit-transition:opacity .25s ease-out;transition:opacity .25s ease-out;-webkit-backface-visibility:hidden;will-change:opacity}.pswp__share-modal--hidden{display:none}.pswp__share-tooltip{z-index:1620;position:absolute;background:#fff;top:56px;border-radius:2px;display:block;width:auto;right:44px;box-shadow:0 2px 5px rgba(0,0,0,.25);-webkit-transform:translateY(6px);transform:translateY(6px);-webkit-transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s;-webkit-backface-visibility:hidden;will-change:transform}.pswp__share-tooltip a{display:block;padding:8px 12px;color:#000;text-decoration:none;font-size:14px;line-height:18px}.pswp__share-tooltip a:hover{text-decoration:none;color:#000}.pswp__share-tooltip a:first-child{border-radius:2px 2px 0 0}.pswp__share-tooltip a:last-child{border-radius:0 0 2px 2px}.pswp__share-modal--fade-in{opacity:1}.pswp__share-modal--fade-in .pswp__share-tooltip{-webkit-transform:translateY(0);transform:translateY(0)}.pswp--touch .pswp__share-tooltip a{padding:16px 12px}a.pswp__share--facebook:before{content:\"\";display:block;width:0;height:0;position:absolute;top:-12px;right:15px;border:6px solid transparent;border-bottom-color:#fff;-webkit-pointer-events:none;-moz-pointer-events:none;pointer-events:none}a.pswp__share--facebook:hover{background:#3e5c9a;color:#fff}a.pswp__share--facebook:hover:before{border-bottom-color:#3e5c9a}a.pswp__share--twitter:hover{background:#55acee;color:#fff}a.pswp__share--pinterest:hover{background:#ccc;color:#ce272d}a.pswp__share--download:hover{background:#ddd}.pswp__counter{position:absolute;left:0;top:0;height:44px;font-size:13px;line-height:44px;color:#fff;opacity:.75;padding:0 10px}.pswp__caption{position:absolute;left:0;bottom:0;width:100%;min-height:44px}.pswp__caption small{font-size:11px;color:#bbb}.pswp__caption__center{text-align:left;max-width:420px;margin:0 auto;font-size:13px;padding:10px;line-height:20px;color:#ccc}.pswp__caption--empty{display:none}.pswp__caption--fake{visibility:hidden}.pswp__preloader{width:44px;height:44px;position:absolute;top:0;left:50%;margin-left:-22px;opacity:0;-webkit-transition:opacity .25s ease-out;transition:opacity .25s ease-out;will-change:opacity;direction:ltr}.pswp__preloader__icn{width:20px;height:20px;margin:12px}.pswp__preloader--active{opacity:1}.pswp__preloader--active .pswp__preloader__icn{background:url(data:image/gif;base64,R0lGODlhFAAUAPMIAIeHhz8/P1dXVycnJ8/Pz7e3t5+fn29vb////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAIACwAAAAAFAAUAEAEUxDJSatFxtwaggWAdIyHJAhXoRYSQUhDPGx0TbmujahbXGWZWqdDAYEsp5NupLPkdDwE7oXwWVasimzWrAE1tKFHErQRK8eL8mMUlRBJVI307uoiACH5BAUHAAgALAEAAQASABIAAAROEMkpS6E4W5upMdUmEQT2feFIltMJYivbvhnZ3R0A4NMwIDodz+cL7nDEn5CH8DGZh8MtEMBEoxkqlXKVIgQCibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpjaE4W5spANUmFQX2feFIltMJYivbvhnZ3d1x4BNBIDodz+cL7nDEn5CH8DGZAsFtMMBEoxkqlXKVIgIBibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpAaA4W5vpOdUmGQb2feFIltMJYivbvhnZ3Z0g4FNRIDodz+cL7nDEn5CH8DGZgcCNQMBEoxkqlXKVIgYDibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpz6E4W5upENUmAQD2feFIltMJYivbvhnZ3V0Q4JNhIDodz+cL7nDEn5CH8DGZg8GtUMBEoxkqlXKVIggEibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkphaA4W5tpCNUmHQf2feFIltMJYivbvhnZ3d0w4BMAIDodz+cL7nDEn5CH8DGZBMLNYMBEoxkqlXKVIgoFibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpQ6A4W5vpGNUmCQL2feFIltMJYivbvhnZ3R1B4NNxIDodz+cL7nDEn5CH8DGZhcINAMBEoxkqlXKVIgwGibbK9YLBYvLtHH5K0J0IACH5BAUHAAcALAEAAQASABIAAANCeLo6wzA6FxkhbaoQ4L3ZxnXLh0EjWZ4RV71VUcCLIByyTNt2PsO8m452sBGJBsNxkUwuD03lAQBASqnUJ7aq5UYSADs=) no-repeat}.pswp--css_animation .pswp__preloader--active{opacity:1}.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn{-webkit-animation:.5s linear infinite clockwise;animation:.5s linear infinite clockwise}.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut{-webkit-animation:1s cubic-bezier(.4,0,.22,1) infinite donut-rotate;animation:1s cubic-bezier(.4,0,.22,1) infinite donut-rotate}.pswp--css_animation .pswp__preloader__icn{background:0 0;opacity:.75;width:14px;height:14px;position:absolute;left:15px;top:15px;margin:0}.pswp--css_animation .pswp__preloader__cut{position:relative;width:7px;height:14px;overflow:hidden}.pswp--css_animation .pswp__preloader__donut{box-sizing:border-box;width:14px;height:14px;border:2px solid #fff;border-radius:50%;border-left-color:transparent;border-bottom-color:transparent;position:absolute;top:0;left:0;background:0 0;margin:0}@media screen and (max-width:1024px){.pswp__preloader{position:relative;left:auto;top:auto;margin:0;float:right}}@-webkit-keyframes clockwise{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes clockwise{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes donut-rotate{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}}@keyframes donut-rotate{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}}.pswp__ui{-webkit-font-smoothing:auto;visibility:visible;opacity:1;z-index:1550}.pswp__top-bar{position:absolute;left:0;top:0;height:44px;width:100%}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right,.pswp__caption,.pswp__top-bar{-webkit-backface-visibility:hidden;will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right{visibility:visible}.pswp__caption,.pswp__top-bar{background-color:rgba(0,0,0,.5)}.pswp__ui--fit .pswp__caption,.pswp__ui--fit .pswp__top-bar{background-color:rgba(0,0,0,.3)}.pswp__ui--idle .pswp__button--arrow--left,.pswp__ui--idle .pswp__button--arrow--right,.pswp__ui--idle .pswp__top-bar{opacity:0}.pswp__ui--hidden .pswp__button--arrow--left,.pswp__ui--hidden .pswp__button--arrow--right,.pswp__ui--hidden .pswp__caption,.pswp__ui--hidden .pswp__top-bar{opacity:.001}.pswp__ui--one-slide .pswp__button--arrow--left,.pswp__ui--one-slide .pswp__button--arrow--right,.pswp__ui--one-slide .pswp__counter{display:none}.pswp__element--disabled{display:none!important}.pswp--minimal--dark .pswp__top-bar{background:0 0}"];
var RenderType_NgxLightboxComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_NgxLightboxComponent, data: {} });

function View_NgxLightboxComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "figure", [["itemprop", "associatedMedia"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageObject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "a", [["itemprop", "contentUrl"]], [[8, "href", 4], [1, "data-size", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openImage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["itemprop", "thumbnail"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "figcaption", [["itemprop", "caption description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.largeUrl, ""); var currVal_1 = ((_v.context.$implicit.width + "x") + _v.context.$implicit.height); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.thumbUrl, ""); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.description, ""); _ck(_v, 2, 0, currVal_2, currVal_3); var currVal_4 = _v.context.$implicit.description; _ck(_v, 4, 0, currVal_4); }); }
function View_NgxLightboxComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "ngx_photoswipe"], ["itemscope", ""], ["itemtype", "http://schema.org/ImageGallery"], ["ngxlightbox", ""]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NgxLightboxComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 23, "div", [["aria-hidden", "true"], ["class", "pswp"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "div", [["class", "pswp__bg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 21, "div", [["class", "pswp__scroll-wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 3, "div", [["class", "pswp__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "div", [["class", "pswp__item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "div", [["class", "pswp__item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, "div", [["class", "pswp__item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 16, "div", [["class", "pswp__ui pswp__ui--hidden"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 9, "div", [["class", "pswp__top-bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "div", [["class", "pswp__counter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 0, "button", [["class", "pswp__button pswp__button--close"], ["title", "Close (Esc)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 0, "button", [["class", "pswp__button pswp__button--share"], ["title", "Share"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 0, "button", [["class", "pswp__button pswp__button--fs"], ["title", "Toggle fullscreen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "button", [["class", "pswp__button pswp__button--zoom"], ["title", "Zoom in/out"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 3, "div", [["class", "pswp__preloader"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 2, "div", [["class", "pswp__preloader__icn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "div", [["class", "pswp__preloader__cut"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 0, "div", [["class", "pswp__preloader__donut"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "div", [["class", "pswp__share-modal pswp__share-modal--hidden pswp__single-tap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 0, "div", [["class", "pswp__share-tooltip"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 0, "button", [["class", "pswp__button pswp__button--arrow--left"], ["title", "Previous (arrow left)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 0, "button", [["class", "pswp__button pswp__button--arrow--right"], ["title", "Next (arrow right)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "div", [["class", "pswp__caption"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 0, "div", [["class", "pswp__caption__center"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.getImages(); _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.key; _ck(_v, 0, 0, currVal_0); }); }
function View_NgxLightboxComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ngx-lightbox", [], null, null, null, View_NgxLightboxComponent_0, RenderType_NgxLightboxComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 704512, null, 0, ngx_light_box__WEBPACK_IMPORTED_MODULE_1__["NgxLightboxComponent"], [ngx_light_box__WEBPACK_IMPORTED_MODULE_1__["NgxLightboxService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], [2, ngx_light_box__WEBPACK_IMPORTED_MODULE_1__["LIGHTBOX_CONFIG"]]], null, null)], null, null); }
var NgxLightboxComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ngx-lightbox", ngx_light_box__WEBPACK_IMPORTED_MODULE_1__["NgxLightboxComponent"], View_NgxLightboxComponent_Host_0, { galleryKey: "galleryKey" }, { imagesLoaded: "imagesLoaded", beforeChange: "beforeChange", afterChange: "afterChange", imageLoadComplete: "imageLoadComplete", resize: "resize", gettingData: "gettingData", mouseUsed: "mouseUsed", initialZoomIn: "initialZoomIn", initialZoomInEnd: "initialZoomInEnd", initialZoomOut: "initialZoomOut", initialZoomOutEnd: "initialZoomOutEnd", parseVerticalMargin: "parseVerticalMargin", close: "close", unbindEvents: "unbindEvents", destroy: "destroy", updateScrollOffset: "updateScrollOffset", preventDragEvent: "preventDragEvent", shareLinkClick: "shareLinkClick" }, []);



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dist_ngx_light_box_ngx_light_box_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../dist/ngx-light-box/ngx-light-box.ngfactory */ "../../dist/ngx-light-box/ngx-light-box.ngfactory.js");
/* harmony import */ var ngx_light_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-light-box */ "../../dist/ngx-light-box/fesm2015/ngx-light-box.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "d-inline ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.src; _ck(_v, 1, 0, currVal_0); }); }
function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { photoSwipe: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ngx-lightbox", [["class", "item"], ["galleryKey", "galleryKey"]], null, null, null, _dist_ngx_light_box_ngx_light_box_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NgxLightboxComponent_0"], _dist_ngx_light_box_ngx_light_box_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NgxLightboxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 704512, null, 0, ngx_light_box__WEBPACK_IMPORTED_MODULE_3__["NgxLightboxComponent"], [ngx_light_box__WEBPACK_IMPORTED_MODULE_3__["NgxLightboxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [2, ngx_light_box__WEBPACK_IMPORTED_MODULE_3__["LIGHTBOX_CONFIG"]]], { galleryKey: [0, "galleryKey"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 19, "div", [["class", "row mx-0 demo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "col-12 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "nav", [["class", "navbar navbar-expand-md navbar-dark fixed-top bg-dark"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "a", [["class", "navbar-brand"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["NgxLightDemo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "w-100 text-right"], ["id", "navbarsExampleDefault"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "pr-5"], ["style", "color: white;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Angular "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 11, "div", [["class", "jumbotron w-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 5, "div", [["class", "col-12 text-center mt-2 p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "h3", [["style", "font-weight: 400; font-style: italic;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" to open gallery click on image or button "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "div", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "div", [["class", "col-12 mt-5 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(0) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Launch Gallery "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "button", [["class", "btn btn-success ml-2"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.autoSlide(0) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Auto slide Gallery "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "galleryKey"; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.images; _ck(_v, 17, 0, currVal_1); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], [ngx_light_box__WEBPACK_IMPORTED_MODULE_3__["NgxLightboxService"]], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".demo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #00acf4;\n}\n.demo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 220px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2FzaHMvbmctTGlnaHRCb3gvTmd4TGlnaHRCb3gvcHJvamVjdHMvTmd4TGlnaHRCb3hEZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvTmd4TGlnaHRCb3hEZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsY0FBQTtBQ0FGO0FER0M7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUNERiIsImZpbGUiOiJwcm9qZWN0cy9OZ3hMaWdodEJveERlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtbyB7XG5cdGgxIHtcblx0XHRjb2xvcjogcmdiKDAsIDE3MiwgMjQ0KTtcblx0fVxuXG5cdGltZyB7XG5cdFx0bWF4LXdpZHRoOiAyMjBweDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cbn1cbiIsIi5kZW1vIGgxIHtcbiAgY29sb3I6ICMwMGFjZjQ7XG59XG4uZGVtbyBpbWcge1xuICBtYXgtd2lkdGg6IDIyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var ngx_light_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-light-box */ "../../dist/ngx-light-box/fesm2015/ngx-light-box.js");

class AppComponent {
    constructor(_ls) {
        this._ls = _ls;
        this.title = 'NgxLightBoxDemo';
        this.images = [
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
    }
    open(imageIndex = 0) {
        this._ls.createGallery('galleryKey');
        const self = this;
        this.images.forEach((value) => {
            const img = new ngx_light_box__WEBPACK_IMPORTED_MODULE_0__["Image"]();
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
            const img = new ngx_light_box__WEBPACK_IMPORTED_MODULE_0__["Image"]();
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


/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ngx_light_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-light-box */ "../../dist/ngx-light-box/fesm2015/ngx-light-box.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_app_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_bb"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, ngx_light_box__WEBPACK_IMPORTED_MODULE_6__["NgxLightboxService"], ngx_light_box__WEBPACK_IMPORTED_MODULE_6__["NgxLightboxService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_light_box__WEBPACK_IMPORTED_MODULE_6__["NgxLigthBoxModule"], ngx_light_box__WEBPACK_IMPORTED_MODULE_6__["NgxLigthBoxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_light_box__WEBPACK_IMPORTED_MODULE_6__["LIGHTBOX_CONFIG"], _app_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"], [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var ngx_light_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-light-box */ "../../dist/ngx-light-box/fesm2015/ngx-light-box.js");

const DEFAULT_CONFIG = {
    loop: false,
    escKey: false,
    closeOnScroll: false,
    // ui-config
    arrowEl: true,
};
const ɵ0 = DEFAULT_CONFIG;
class AppModule {
}



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]()
    .bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akashs/ng-LightBox/NgxLightBox/projects/NgxLightBoxDemo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map