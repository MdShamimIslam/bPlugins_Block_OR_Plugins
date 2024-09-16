import { __ } from '@wordpress/i18n';
import { verticalLineIcon, horizontalLineIcon } from './icons';

export const layouts = [
	{ label: __('Vertical', 'content-slider'), value: 'vertical', icon: verticalLineIcon },
	{ label: __('Horizontal', 'content-slider'), value: 'horizontal', icon: horizontalLineIcon }
];

export const generalStyleTabs = [
	{ name: 'general', title: __('Slides', 'content-slider') },
	{ name: 'style', title: __('Settings', 'content-slider') }
];
