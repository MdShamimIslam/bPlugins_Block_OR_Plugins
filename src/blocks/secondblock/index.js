
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var element = wp.element.createElement;

// register my first block
registerBlockType("my-blocks/secondblock",{
    title: __("Second Block", "my-blocks"),
    description:__("Its second block description", "my-blocks"),
    category:"media",
    icon:"admin-network",
    keywords:[__('photo','my-blocks'),__('image','my-blocks')],
    edit:()=>{
        return <p>Editor</p>;
    },
    save:()=>{
        return <p>Save</p> ;
    }
})