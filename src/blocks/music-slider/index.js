import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import './index.scss';
import { blockIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: blockIcon,
	edit: Edit
});