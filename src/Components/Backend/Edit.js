import { useRef, useState } from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import Style from '../Common/Style';
import Settings from './Settings/Settings';
import SwiperSlider from './SwiperSlider/SwiperSlider';
import MusicPlayerBack from './MusicPlayerBack/MusicPlayerBack';
import { withSelect } from '@wordpress/data';

const Edit = props => {
	const { attributes, setAttributes, clientId, device } = props;
	const { musics } = attributes;
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);
	const swiperRef = useRef(null);


	const playTrack = (index) => {
		const audio = audioRef.current;
		setActiveIndex(index);
		audio.src = musics[index].source;
		if (isPlaying) {
			audio.play();
		}
	};

	return <>
		<Settings
			{...{ attributes, setAttributes, device }}
			activeIndex={activeIndex}
			setActiveIndex={setActiveIndex}
		/>

		<div {...useBlockProps()}>
			<Style attributes={attributes} device={device} id={`block-${clientId}`} />

			<div className="bBlocksMusicPlayer">
				<SwiperSlider
					ref={swiperRef}
					playTrack={playTrack}
					attributes={attributes}
				/>

				<MusicPlayerBack
					attributes={attributes}
					audioRef={audioRef}
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					swiperRef={swiperRef}
				/>

			</div>
		</div>
	</>;
}

export default withSelect((select) => {
	return {
		device: select('core/edit-post').__experimentalGetPreviewDeviceType()?.toLowerCase()
	}
})(Edit);