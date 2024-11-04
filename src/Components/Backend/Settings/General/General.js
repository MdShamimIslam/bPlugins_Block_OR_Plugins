
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, Button, ToggleControl } from '@wordpress/components';
import { MediaUpload } from "@wordpress/block-editor";
import { BiPlusMedical } from '../../../../utils/icons';
import { addNewMusic, duplicateMusic, removeMusic, updateData, updateMusic } from '../../../../utils/functions';



const General = ({ attributes, setAttributes, setActiveIndex }) => {
	const { musics, options } = attributes;

	return <>
		<PanelBody className='bPlPanelBody' title={__(musics.length > 1 ? 'Musics' : 'Music', 'music-player')}>
			{musics.map((music, index) =>
				<PanelBody key={index} className='bPlPanelBody' title={__(`Music ${index + 1}`, "music-player")} initialOpen={0 !== index ? false : true} >
					<TextControl
						label={__('Title', 'music-player')}
						placeholder='Enter title...'
						value={music.title}
						onChange={(v) => updateMusic(setAttributes, setActiveIndex, musics, index, 'title', v)}
					/>

					<TextControl
						label={__('Name', 'music-player')}
						placeholder='Enter name...'
						value={music.name}
						onChange={(v) => updateMusic(setAttributes, setActiveIndex, musics, index, 'name', v)}
					/>

					<div className='thumbnail'>
						<TextControl
							label={__('Source', 'music-player')}
							placeholder='Enter or paste source url...'
							value={music.source}
							onChange={(v) => updateMusic(setAttributes, setActiveIndex, musics, index, 'source', v)}
						/>
						<MediaUpload
							onSelect={(v) => updateMusic(setAttributes, setActiveIndex, musics, index, 'source', v.url)}
							allowedTypes={['audio']}
							render={({ open }) => (
								<Button className='mediaBtn' onClick={open} icon={"upload f317"}></Button>
							)}
						/>
					</div>

					<div className='thumbnail'>
						<TextControl
							label={__('Thumbnail', 'music-player')}
							placeholder={__("Enter or upload thumbnail...", "music-player")}
							value={music.thumbnail.url}
							onChange={(v) => updateMusic(setAttributes, setActiveIndex, musics, index, 'thumbnail', v, 'url')}
						/>
						<MediaUpload
							onSelect={(v) => updateMusic(setAttributes, setActiveIndex, musics, index, 'thumbnail', v.url, 'url')}
							render={({ open }) => (
								<Button className='mediaBtn' onClick={open} icon={"upload f317"}></Button>
							)}
						/>
					</div>
					{
						options.isOverlayIcon && <>
							<TextControl
								label={__('Link', 'music-player')}
								placeholder='Enter or paste link...'
								value={music.link}
								onChange={(v) => updateMusic(setAttributes, setActiveIndex, musics, index, 'link', v)}
							/>
							{music.link && <ToggleControl
								checked={options.newTab}
								label={__('Open in New Tab', 'music-player')}
								onChange={(v) => setAttributes({ options: updateData(options, v, 'newTab') })}
							/>}

						</>
					}

					{musics.length > 1 ? <div className='removeAndDuplicateBtn mt10' >
						<Button
							className='removeBtn'
							icon={"trash f182"}
							onClick={() => removeMusic(musics, setAttributes, index)}>
							{__("Remove", "music-player")}
						</Button>
						<Button
						className='duplicateBtn'
						icon={"plus-alt f502"}
						onClick={() => {
							duplicateMusic(musics, setAttributes, index);
						}}
					>
						{__("Duplicate", "music-player")}
					</Button>
						
					</div> : <Button
						className='duplicateBtn mt10'
						icon={"plus-alt f502"}
						onClick={() => {
							duplicateMusic(musics, setAttributes, index);
						}}
					>
						{__("Duplicate", "music-player")}
					</Button>
					}
				</PanelBody>

			)}

			<Button className='addMusic mt10' onClick={() => addNewMusic(musics, setAttributes, setActiveIndex)}>
				<BiPlusMedical />
				{__("Add New Music", "music-player")}
			</Button>

		</PanelBody>

		<PanelBody className='bPlPanelBody' title={__('Music Options', 'music-player')} initialOpen={false}>
			<ToggleControl
				className='mt5'
				checked={options.isOverlayIcon}
				label={__('Show Overlay Icon', 'music-player')}
				onChange={(v) => setAttributes({ options: updateData(options, v, 'isOverlayIcon') })}
			/>
			<ToggleControl
				className='mt5'
				checked={options.isThumb}
				label={__('Show Range Thumb', 'music-player')}
				onChange={(v) => setAttributes({ options: updateData(options, v, 'isThumb') })}
			/>
			<ToggleControl
				className='mt5'
				checked={options.isAutoPlay}
				label={__('Auto Play Music', 'music-player')}
				onChange={(v) => setAttributes({ options: updateData(options, v, 'isAutoPlay') })}
			/>
		</PanelBody>

		
	</>


}

export default General
