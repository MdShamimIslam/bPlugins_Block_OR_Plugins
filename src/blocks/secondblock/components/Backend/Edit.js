import React from 'react';
import Settings from './Settings/Settings';
import Style from '../Common/Style';
import { withSelect } from "@wordpress/data";


const Edit = (props) => {
    const { className, attributes, setAttributes, clientId,device } = props;

    return (
        <>
            {/* settings */}
            <Settings device={device} {...{ attributes, setAttributes }} />

            <div className={className}>
                {/* styles */}
                <Style attributes={attributes} id={`block-${clientId}`} device={device} />

                {/* content */}
                <div className="bBlocksSecondBlock">
                    <p>Editor Contents here!!</p>
                </div>

            </div>

        </>
    )
}

export default withSelect((select) => {
    return {
        device: select('core/edit-post').__experimentalGetPreviewDeviceType()?.toLowerCase()
    }
})(Edit);
