import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';
import { purposeTypeOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';

const General = ({ attributes, setAttributes }) => {
  const { purposeType } = attributes;

  return (
    <PanelBody className='bPlPanelBody' title={__('Purpose', 'b-blocks')} initialOpen={false}>
      <SelectControl
      
        label={__('Purpose', 'b-blocks')}
        labelPosition='left'
        value={purposeType}
        options={purposeTypeOptions}
        onChange={(v) => setAttributes({ purposeType: updateData(purposeType, v) })}
      />
      <small className="selectHelp">If you want change your purpose?Then you select purpose here.</small>
    </PanelBody>
  )
}

export default General