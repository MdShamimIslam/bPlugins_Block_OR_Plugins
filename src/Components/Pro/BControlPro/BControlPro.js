import { __ } from '@wordpress/i18n';

import './BControlPro.scss';

const BControlPro = ({ label, className, onChange, isPremium = false, Component, setOpen = () => { }, ...restProps }) => {
	const labelMiddleWare = (label) => isPremium ? label : <>
		<span className="bplOpacity75">{label}</span> <span className='labelPro' >{__("Pro", "bplugins")}</span>
	</>

	return <Component
		className={`${className} ${isPremium ? '' : 'bplProIdentifier'}`}
		label={labelMiddleWare(label)}
		onChange={(val) => isPremium ? onChange(val) : setOpen(true)}
		isPremium={isPremium}
		{...restProps}
	/>
}
export default BControlPro;