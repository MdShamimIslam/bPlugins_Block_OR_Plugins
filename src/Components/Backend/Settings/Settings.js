import React from 'react'
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { generalStyleTabs } from '../../../utils/options';
import { tabController } from '../../../../../Components/utils/functions';
import General from './General/General'
import Styles from './Style/Styles'

const Settings = ({ attributes, setAttributes, activeIndex, setActiveIndex , device}) => {
	return <InspectorControls>
				<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>
					{
						tab => <>
							{'general' === tab.name && <>
								<General
									{...{ attributes, setAttributes }}
									device={device}
									activeIndex={activeIndex}
									setActiveIndex={setActiveIndex} />

							</>}
							{'style' === tab.name && <>
								<Styles
									{...{ attributes, setAttributes,device }}
									activeIndex={activeIndex}
									setActiveIndex={setActiveIndex} />
							</>}
						</>
					}
				</TabPanel>

			</InspectorControls>
}
export default Settings