import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import MusicPlayerFront from './Components/Frontend/MusicPlayerFront/MusicPlayerFront';



document.addEventListener('DOMContentLoaded', () => {
	const musicPlayerEls = document.querySelectorAll('.wp-block-mpws-music-player');
	musicPlayerEls.forEach(musicPlayerEl => {
		const attributes = JSON.parse(musicPlayerEl.dataset.attributes);

		createRoot(musicPlayerEl).render(<>

			<Style attributes={attributes} id={musicPlayerEl.id} />
			
			<MusicPlayerFront attributes={attributes} />

		</>);

		musicPlayerEl?.removeAttribute('data-attributes');
	});
});