import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../../../Components/utils/functions';
import General from './General/General';
import Style from './Style/Style';
import { generalStyleTabs } from '../../../utils/options';

const Settings = ({ attributes, setAttributes, device }) => {

    return (
        <>
            <InspectorControls>
                <TabPanel
                    className='bPlTabPanel' activeClass='activeTab'
                    tabs={generalStyleTabs}
                    onSelect={tabController}>
                    {
                        tab => <>
                            {'general' === tab.name &&
                                <General attributes={attributes} setAttributes={setAttributes}
                                device={device}
                                 />}

                            {'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} />}
                        </>
                    }
                </TabPanel>
            </InspectorControls>
        </>
    )
}

export default Settings