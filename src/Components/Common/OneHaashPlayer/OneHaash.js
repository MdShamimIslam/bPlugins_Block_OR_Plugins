import OneHaashPlayer from './OneHaashPlayer';
import OneHaashStyle from './OneHaashStyle';

const OneHaash = ({ attributes, device, id }) => {
    return (
        <>
            <OneHaashStyle
                attributes={attributes}
                device={device}
                id={id}
            />
            <OneHaashPlayer
                attributes={attributes}
            />

        </>
    )
}

export default OneHaash;