import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';

const Style = () => {

  return (
    <>
      <PanelBody
        // className='bPlPanelBody'
        title={__('Purpose Style', 'my-blocks')}
        initialOpen={false}>
        Style Settings...
      </PanelBody>
    </>
  )
}

export default Style