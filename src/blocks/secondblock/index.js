import './styles.editor.scss';

import { registerBlockType, getBlockDefaultClassName } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './components/Backend/Edit';
import Save from './save';

// register second  block
registerBlockType("my-blocks/secondblock", {
    title: __("Second Block", "my-blocks"),
    description: __("Its second block description", "my-blocks"),
    category: "media",
    attributes: {
        "color": {
            "type": "string",
            "default": "red"
        }
    },
    icon: "admin-network",
    keywords: [__('photo', 'my-blocks'), __('image', 'my-blocks')],
    supports: {
        align: ['wide', 'full'],
    },
    edit: (props) => {
        return <Edit {...props} />;
    },
    save: () => {
        const className = getBlockDefaultClassName("my-blocks/secondblock");
        return <Save {...className} />;
    }
})