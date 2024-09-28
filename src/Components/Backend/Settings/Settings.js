import {useState} from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../Components/utils/functions';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import usePremiumInEditor from '../../../hooks/usePremiumInEditor';
import {AboutPro} from '../../../../../Components/Pro'

const Settings = ({ attributes, setAttributes }) => {
	const { alignment } = attributes;
	const {isPremium} = usePremiumInEditor();

	const [open,setOpen] = useState(false)

	return <>
		<InspectorControls>
			<div className='bBlocksInspectorInfo'>
				Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>B Blocks</a>
			</div>

			<TabPanel className='bPlTabPanel wp-block-b-blocks-test-purpose' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>
				{
					tab => <>
						{'general' === tab.name && 
						<General attributes={attributes} setAttributes={setAttributes} isPremium={isPremium} setOpen={setOpen} />}

						{'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes}  />}
					</>
				}
			</TabPanel>
		</InspectorControls>


		<BlockControls>

			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Block Name Alignment')} alignmentControls={[
				{ title: __('Block Name in left', 'textdomain'), align: 'left', icon: 'align-left' },
				{ title: __('Block Name in center', 'textdomain'), align: 'center', icon: 'align-center' },
				{ title: __('Block Name in right', 'textdomain'), align: 'right', icon: 'align-right' }
			]} />

		</BlockControls>
		<AboutPro aboutProOpen={open} setAboutProOpen={setOpen} link='https://checkout.freemius.com/mode/dialog/plugin/16607/plan/27701/'>
			<li>Add Get started custom Button</li>
		</AboutPro>
	</>;
};
export default Settings;