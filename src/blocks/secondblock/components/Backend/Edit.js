import React from 'react';
import Settings from './Settings/Settings';
import Style from '../Common/Style';


const Edit = (props) => {
    const { className, attributes, setAttributes, clientId } = props;

    return (
        <>
            {/* settings */}
            <Settings {...{ attributes, setAttributes }} />

            <div className={className}>
                {/* styles */}
                <Style attributes={attributes} id={`block-${clientId}`} />

                {/* conetnt */}
                <div className="bBlocksSecondBlock">
                    <p>Editor Contents here!!</p>
                </div>

            </div>

        </>
    )
}

export default Edit;
