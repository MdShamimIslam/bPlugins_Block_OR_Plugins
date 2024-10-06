import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../../Components/utils/functions';
import { generalStyleTabs } from '../../utils/options';
import General from './General/General';
import Style from './Style/Style';

const Settings = ({ attributes, setAttributes }) => {

    return (
        <>
            <InspectorControls>
                <TabPanel
                // wp-block-my-blocks-secondblock
                    className='bPlTabPanel ' activeClass='activeTab'
                    tabs={generalStyleTabs}
                    onSelect={tabController}>
                    {
                        tab => <>
                            {'general' === tab.name &&
                                <General attributes={attributes} setAttributes={setAttributes} />}

                            {'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} />}
                        </>
                    }
                </TabPanel>
            </InspectorControls>
        </>
    )
}

export default Settings