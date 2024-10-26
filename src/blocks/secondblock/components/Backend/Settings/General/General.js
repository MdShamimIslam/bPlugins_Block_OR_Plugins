import { __ } from '@wordpress/i18n';
import { PanelBody,PanelRow,__experimentalUnitControl as UnitControl } from '@wordpress/components';
import  Label  from '../../../../../../../../Components/Label/Label';
import { Device } from '../../../extraCom/Device/Device';
import { updateData } from '../../../../utils/functions';


const General = ({attributes,setAttributes,device}) => {
    const {width} = attributes;

    return (
        <PanelBody title={__('Purpose General', 'my-blocks')} initialOpen={false}>
            <PanelRow className='mt20'>
                <Label>{__('Width', 'my-blocks')}</Label>
                <Device />
            </PanelRow>
            <UnitControl
                value={width[device]}
                onChange={(v) => setAttributes({ width: updateData(width, v, device) })}
            />
        </PanelBody>
    )
}

export default General