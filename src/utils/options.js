import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'mp3player-block') },
	{ name: 'style', title: __('Style', 'mp3player-block') }
];

export const songSlOptions = [
	{ label: 'Default', value: 'default' },
	{ label: 'Slider', value: 'slider' },
	{ label: 'OneHaash', value: 'oneHaash' },
	{ label: 'Card', value: 'card' },
	{ label: 'Wooden', value: 'wooden' },
]

export const musicAlignOptions = [
	{ label: 'Left', value: 'start' },
	{ label: 'Center', value: 'center' },
	{ label: 'Right', value: 'end' },
]

// export const musics = [
//     {
//       title: "The One Haas Experience",
//       src: "https://api.podcache.net/episodes/698d602a-a059-45dc-b42c-a2bdfde19922/stream.mp3",
//     },
//     {
//       title: "Another Episode",
//       src: "http://www.pakium.pk/wp-content/uploads/2015/08/Man-Aamadeh-Am-S08E03-PakiUM.Com_.mp3",
//     },
//     {
//       title: "Yet Another Episode",
//       src: "https://dl.dropboxusercontent.com/s/s0xk91uo1gr9ybg/The%20Prince%20of%20Egypt%20-%2001%20-%20Deliver%20US.mp3",
//     },
//   ];