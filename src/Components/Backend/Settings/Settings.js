import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { generalStyleTabs } from '../../../utils/options';
import { tabController } from '../../../../../Components/utils/functions';
import General from './General/General'
import Style from './Style/Style'
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { updateData } from '../../../utils/functions';

const Settings = ({ attributes, setAttributes, activeIndex, setActiveIndex, device }) => {
	const { style } = attributes;
	const { align } = style;
	
	return <InspectorControls>
		<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>
			{
				tab => <>
					{'general' === tab.name && <>
						<General
							{...{ attributes, setAttributes }}
							activeIndex={activeIndex}
							setActiveIndex={setActiveIndex} />

					</>}
					{'style' === tab.name && <>
						<Style
							{...{ attributes, setAttributes, device }}
							activeIndex={activeIndex}
							setActiveIndex={setActiveIndex} />
					</>}
				</>
			}
		</TabPanel>

		<BlockControls>
			<AlignmentToolbar
				value={align[device]}
				onChange={(v) => setAttributes({ style: updateData(style, v, 'align', device) })}
				describedBy={__('Player Alignment')}
				alignmentControls={[
					{ title: __('Player in left', 'music-player'), align: 'start', icon: 'align-left' },
					{ title: __('Player in center', 'music-player'), align: 'center', icon: 'align-center' },
					{ title: __('Player in right', 'music-player'), align: 'end', icon: 'align-right' }
				]} />
		</BlockControls>

	</InspectorControls>
}
export default Settings