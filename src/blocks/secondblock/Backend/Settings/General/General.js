import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';

const General = () => {

    return (
        <PanelBody
            // className='bPlPanelBody'
            title={__('Purpose General', 'my-blocks')} initialOpen={false}>

            <p>General Settings...</p>

        </PanelBody>
    )
}

export default General