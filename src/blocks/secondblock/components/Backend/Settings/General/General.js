import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';

const General = () => {

    return (
        <PanelBody title={__('Purpose General', 'my-blocks')} initialOpen={false}>
            <p className='general' >General Settings...</p>
        </PanelBody>
    )
}

export default General