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
                'editor_style' => 'my-blocks-editor-style',
                'script' => 'my-blocks-script',
                'style' => 'my-blocks-style'
            ),
            $options
        )
    ); 
}

// register & enqueue block
function my_blocks_register()
{
    // register block editor.js
    wp_register_script(
        'my-blocks-editor-script',
        plugins_url('dist/editor.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element')
    );
    // register block script.js
    wp_register_script(
        'my-blocks-script',
        plugins_url('dist/script.js', __FILE__),
        array('')
    );
    // register block editor.css
    wp_register_style(
        'my-blocks-editor-style',
        plugins_url('dist/editor.css', __FILE__),
        array('wp-edit-blocks')
    );
    // register block style.css
    wp_register_style(
        'my-blocks-style',
        plugins_url('dist/style.css', __FILE__)
    );

    // register block
    my_blocks_register_block_type('firstblock');
    my_blocks_register_block_type('secondblock');

};
add_action('init', 'my_blocks_register');
