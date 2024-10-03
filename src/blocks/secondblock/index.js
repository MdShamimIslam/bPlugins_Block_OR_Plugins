
import './styles.editor.scss';

import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';

// register second  block
registerBlockType("my-blocks/secondblock",{
    title: __("Second Block", "my-blocks"),
    description:__("Its second block description", "my-blocks"),
    category:"media",
    icon:"admin-network",
    keywords:[__('photo','my-blocks'),__('image','my-blocks')],
    edit:({className}) => {
        return <p className={className}> Edit Second </p>;
    },
    save:() => {
        return <p> Save Second </p> ;
    }
})