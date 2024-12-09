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
    name: "Embed The Code To Frontend",
    description:
      "By adding this awesome feature you can embed the code to frontend easily with a beautiful way.",
  },
  {
    name: "Hide/Show Heading",
    description:
      "You can toggle the heading like if you don't want to display the heading you can hide this easily.",
  },
  {
    name: "Hide/Show Copy Button and Type",
    description:
      "Because of this feature, you can show or hide the copy button on your own easily. And you can change copy button type also like you can keep icon or text.",
  },
  {
    name: "Position of Copy Button and Styles",
    description:
      "Without heading you can change the position of the copy button like topRight or bottomRight. and you can give style to the copy button whatever you like",
  },
  {
    name: "Hide/Show Line Numbers",
    description:
      "By adding this feature you can hide or show the line numbers.",
  },
  {
    name: "Wrap Enable/Disable",
    description: "You can enable or disable wrap functionality.",
  },
  {
    name: "Edit Editor Height and Width",
    description:
      "Edit your editor height and width and align this like left or right or center.",
  },
  {
    name: "Fold Gutter",
    description: "Enable or disable fold gutter.",
  },
  {
    name: "Disable/Enable Highlight Active Line",
    description: "Enable or disable highlight active line.",
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
