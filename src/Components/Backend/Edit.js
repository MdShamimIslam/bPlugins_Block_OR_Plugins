import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useEffect, useRef } from 'react';

import { nextIcon, playIcon, prevIcon } from '../../utils/icons';
import MP3Player from '../Common/MP3Player';
import Style from '../Common/Style';
import Settings from './Settings/Settings';

const Edit = props => {
	const { attributes, setAttributes, clientId } = props;
	const { audioProperties } = attributes;
	const id = `bpMp3Player-${clientId}`;

	const blockRef = useRef(null);

	useEffect(() => {
		0 !== audioProperties?.length && MP3Player(blockRef.current, audioProperties);
	}, [audioProperties]);



	return <div {...useBlockProps()}>
		<Settings attributes={attributes} setAttributes={setAttributes} />

		{0 !== audioProperties?.length ? <div id={id} ref={blockRef}>
			<Style attributes={attributes} id={id} />

			<div className='bpMp3Player'>
				<div className='coverBox'>
					<img id='cover' />
				</div>

				<div className='contentBox'>
					<audio id='disc'></audio>

					<div className='info'>
						<h2 id='title'></h2>
						<h3 id='artist'></h3>

						<div id='progressContainer'>
							<div id='progress'></div>
						</div>

						<div className='timeBar'>
							<span id='timer'>0:00</span>
							<span id='duration'></span>
						</div>
					</div>

					<div className='controls'>
						<span className='prevBtn'>
							{prevIcon}
						</span>

						<span className='playPauseBtn'>
							{playIcon}
						</span>

						<span className='nextBtn'>
							{nextIcon}
						</span>
					</div>
				</div>
			</div>
		</div> : <h3 className='bpMp3PlayerError'>{__('Please add audio file first!', 'mp3player-block')}</h3>}
	</div>;
};
export default Edit;