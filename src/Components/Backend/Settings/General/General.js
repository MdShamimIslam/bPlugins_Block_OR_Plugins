import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl,ToggleControl } from '@wordpress/components';
import { purposeTypeOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';
import {BControlPro} from '../../../../../../Components/Pro'

const General = ({ attributes, setAttributes, isPremium, setOpen }) => {
  const { purposeType,isShowButton } = attributes;

  return (
    <PanelBody className='bPlPanelBody' title={__('Purpose', 'b-blocks')} initialOpen={false}>
      <SelectControl
      
        label={__('Purpose', 'b-blocks')}
        labelPosition='left'
        value={purposeType}
        options={purposeTypeOptions}
        onChange={(v) => setAttributes({ purposeType: updateData(purposeType, v) })}
      />

      <BControlPro
        label="Show Button"
        checked={ isShowButton }
        onChange={(v) => setAttributes({ isShowButton: updateData(isShowButton, v) })}
        Component={ToggleControl}
        isPremium={isPremium}
        setOpen={setOpen}
      />
      
    </PanelBody>
  )
}

export default General