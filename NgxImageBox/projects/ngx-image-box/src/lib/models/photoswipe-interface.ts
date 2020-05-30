import { InjectionToken } from '@angular/core';
import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

export const IMAGEBOX_CONFIG = new InjectionToken<
	NgxImageBox.NgxImageBoxConfig
>('IMAGEBOX_CONFIG');

export type NgxImageBoxEvent =
	| 'beforeChange'
	| 'afterChange'
	| 'imageLoadComplete'
	| 'resize'
	| 'gettingData'
	| 'mouseUsed'
	| 'initialZoomIn'
	| 'initialZoomInEnd'
	| 'initialZoomOut'
	| 'initialZoomOutEnd'
	| 'parseVerticalMargin'
	| 'close'
	| 'unbindEvents'
	| 'destroy'
	| 'updateScrollOffset'
	| 'preventDragEvent'
	| 'shareLinkClick';
export const NgxImageBoxEvents: NgxImageBoxEvent[] = [
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

export declare namespace NgxImageBox {
	export interface NgxImageBoxConfig extends PhotoSwipeUI_Default.Options {}
	export interface NgxImageBoxItem extends PhotoSwipe.Item {}
}
