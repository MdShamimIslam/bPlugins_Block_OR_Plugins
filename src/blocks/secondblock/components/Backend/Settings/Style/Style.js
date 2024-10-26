import { __ } from '@wordpress/i18n';
import { PanelBody,ColorPicker } from '@wordpress/components';

const Style = ({ attributes, setAttributes }) => {
  const { color } = attributes;

  return (
    <>
      <PanelBody
        title={__('Purpose Style', 'my-blocks')}
        initialOpen={false}>
        <ColorPicker
          value={color}
          onChange={val => setAttributes({ color: val })}
        />

      </PanelBody>
    </>
  )
}

export default Style