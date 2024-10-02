<?php

/**
 * Plugin Name: My Blocks
 * Description: This is My Theme Blocks
 * Author: Md. Shamim Islam
 */


if (! defined('ABSPATH')) {
    exit;
}

// dynamic register block function
function my_blocks_register_block_type($block, $options = array()){
    register_block_type(
        'my-blocks/' . $block,
        array_merge(
            array(
                'editor_script' => 'my-blocks-editor-script',
            ),
            $options
        )
    );
}

// register & enqueue block
function my_blocks_register()
{
    // enqueue block editor js
    wp_register_script(
        'my-blocks-editor-script',
        plugins_url('dist/editor.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element')
    );

    // register block
    my_blocks_register_block_type('firstblock');
    my_blocks_register_block_type('secondblock');

};
add_action('init', 'my_blocks_register');
