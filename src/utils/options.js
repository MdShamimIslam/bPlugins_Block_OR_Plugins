import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'mp3player-block') },
	{ name: 'style', title: __('Style', 'mp3player-block') }
];

export const songSlOptions = [
	{ label: 'Default', value: 'default' },
	{ label: 'Wooden', value: 'wooden' },
	{ label: 'Card', value: 'card' },
	{ label: 'OneHaash', value: 'oneHaash' },
	{ label: 'Lite', value: 'lite' },
	{ label: 'Slider', value: 'slider' },
]

export const musicAlignOptions = [
	{ label: 'Left', value: 'start' },
	{ label: 'Center', value: 'center' },
	{ label: 'Right', value: 'end' },
]

export const songs = [
    {
      title: "Title 1",
      songURL:
        "http://www.pakium.pk/wp-content/uploads/2015/08/Man-Aamadeh-Am-S08E03-PakiUM.Com_.mp3",
    },
    {
      title: "Title 2",
      songURL:
        "https://dl.dropboxusercontent.com/s/s0xk91uo1gr9ybg/The%20Prince%20of%20Egypt%20-%2001%20-%20Deliver%20US.mp3",
    },
    {
      title: "Title 3",
      songURL:
        "https://api.podcache.net/episodes/698d602a-a059-45dc-b42c-a2bdfde19922/stream.mp3",
    },
  ];