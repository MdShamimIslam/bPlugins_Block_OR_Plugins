
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var element = wp.element.createElement;

// register my first block
registerBlockType("my-blocks/firstblock",{
    title: __("First Block", "my-blocks"),
    description:__("Its first block description", "my-blocks"),
    category:"media",
    icon:"testimonial",
    keywords:[__('photo','my-blocks'),__('image','my-blocks')],
    edit:()=>{
        return element('p', null, 'Editor');
    },
    save:()=>{
        return element('p', null, 'Save');
    }
})