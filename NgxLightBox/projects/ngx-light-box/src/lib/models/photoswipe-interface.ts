import { InjectionToken } from '@angular/core';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

export const LIGHTBOX_CONFIG = new InjectionToken<LightBoxConfig>(
	'LIGHTBOX_CONFIG',
);

export type LightBoxEvent =
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
export const LightBoxEvents: LightBoxEvent[] = [
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

export interface LightBoxConfig extends PhotoSwipeUI_Default.Options {}
