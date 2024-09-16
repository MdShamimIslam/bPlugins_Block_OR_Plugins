const iconColor = "#4527a4";

export const blockIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill={iconColor}
  >
    <path
      fill={iconColor}
      fillRule="evenodd"
      d="M9.938 4.016a.146.146 0 00-.054.057L3.027 15.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L10.12 4.073a.146.146 0 00-.054-.057.13.13 0 00-.063-.016.13.13 0 00-.064.016zm1.043-.45a1.13 1.13 0 00-1.96 0L2.166 15.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L10.982 3.566z"
    ></path>
    <rect fill={iconColor} width="2" height="2" x="9.002" y="13" rx="1"></rect>
    <path
      fill={iconColor}
      d="M9.1 7.995a.905.905 0 111.8 0l-.35 3.507a.553.553 0 01-1.1 0L9.1 7.995z"
    ></path>
  </svg>
);

export const verticalLineIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 14.707 14.707"
  >
    <rect x="6.275" y="0" width="2.158" height="14.707" />
  </svg>
);

export const horizontalLineIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 357 357"
  >
    <path d="M357,204H0v-51h357V204z" />
  </svg>
);
export const updateIcon = (
	<svg
	stroke="currentColor"
	fill="none"
	strokeWidth={2}
	viewBox="0 0 24 24"
	strokeLinecap="round"
	strokeLinejoin="round"
	height="2em"
	width="2em"
  >
	<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
	<polyline points="15 3 21 3 21 9" />
	<line x1={10} y1={14} x2={21} y2={3} />
  </svg>

);
export const deleteIcon = (<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-5 h-5 text-gray-500"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
  />
</svg>

);
