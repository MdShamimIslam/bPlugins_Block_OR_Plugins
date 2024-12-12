import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "mp3player-block") },
  { name: "style", title: __("Style", "mp3player-block") },
];

export const songSlOptions = [
  { label: "Default", value: "default" },
  { label: "Slider", value: "slider" },
  { label: "Lite", value: "lite" },
  { label: "Wooden", value: "wooden" },
  { label: "Card", value: "card" },
  { label: "OneHaash", value: "oneHaash" },
];

export const musicAlignOptions = [
  { label: "Left", value: "start" },
  { label: "Center", value: "center" },
  { label: "Right", value: "end" },
];

export const proFeatures = [
  {
    name: "Customize 5 Different Themes",
    description:"Add 5 new themes with different looks and settings.",
  },
  {
    name: "Include some incredible options",
    description: "Add feature of each themes like autoplay, social link, range thumb and a lot of things.",
  },
  {
    name: "Show/Hide options",
    description: "Can show/hide all the options indivisually.",
  },
  {
    name: "Added some animation",
    description: "On card theme we have added some awesome animation and you can also customize these animation on your own.",
  },
  {
    name: "Set position of player controller",
    description:
      "Set position of controller dynamically like (left, center, right).",
  },
  {
    name: "Edit all the stuff on themes",
    description: "You can edit and customize all the stuff that include on all themes dynamically.",
  },
  {
    name: "Style themes dynimacally",
    description: "Style themes like shadow, background, padding, icon size, border etc.",
  },
  {
    name: "Width & Height",
    description: "You can customize width and height of audio player.",
  },
  {
    name: "Shortcode Functionality",
    description: "Add this block anywhere with shortcode.",
  },
];

export const helpfulLinks = [
  {
    title: "Need any Assistance?",
    description:
      "Our Expert Support Team is always ready to help you out promptly.",
    iconClass: "fa fa-life-ring",
    link: "https://bplugins.com/support",
    linkText: "Contact Support",
  },
  {
    title: "Looking for Documentation?",
    description:
      "We have detailed documentation on every aspects of the plugin.",
    iconClass: "fa fa-file-text",
    link: "https://ctb.bplugins.com/docs",
    linkText: "Documentation",
  },
  {
    title: "Liked This Plugin?",
    description:
      "Glad to know that, you can support us by leaving a 5 &#11088; rating.",
    iconClass: "fa fa-thumbs-up",
    link: "https://wordpress.org/support/plugin/countdown-time/reviews#new-post",
    linkText: "Rate the Plugin",
  },
];
