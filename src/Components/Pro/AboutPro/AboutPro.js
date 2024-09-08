import { __ } from '@wordpress/i18n';
import { Modal } from '@wordpress/components';

import './AboutPro.scss';

const AboutPro = ({ aboutProOpen, setAboutProOpen, link, children }) => aboutProOpen && <Modal className='bplAboutPro' title={__('Upgrade to PRO', 'bplugins')} onRequestClose={() => setAboutProOpen(false)}>
	<h3>{__('Explore new features in Pro', 'bplugins')}</h3>

	<ul className='features'>
		{children}
	</ul>

	<h4 className='text'>{__('To unlock those features! Upgrade to Pro')}</h4>

	<a className='upgradeNow' href={link} target='_blank' rel='noreferrer'>{__('Upgrade Now', 'advanced-post-block')}</a>
</Modal>;
export default AboutPro;