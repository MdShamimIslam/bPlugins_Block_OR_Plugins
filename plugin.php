<?php
/**
 * Plugin Name: Audio Player Block
 * Description: Listen Music on the Web.
 * Version: 1.1.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: mp3player-block
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

define( 'BPMP_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.1.0' );
define( 'BPMP_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'BPMP_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'BPMPPlugin' ) ){
	class BPMPPlugin{
		function __construct(){
			add_action( 'init', [$this, 'onInit'] );
			add_action('enqueue_block_editor_assets', [$this, 'bplapl_enqueueCssAndJsOfColorSchema']);
		}

		function onInit() {
			register_block_type( __DIR__ . '/build' );
		}

		function bplapl_enqueueCssAndJsOfColorSchema() {
			wp_enqueue_style(
				'bplapl-color-schema-css',
				BPMP_DIR_URL . './public/css/picker.css',
				array(),
				'1.1.0'
			);
			
			wp_enqueue_script(
				'bplapl-color-schema-js',
				BPMP_DIR_URL . './public/js/picker.js',
				array('wp-element', 'wp-blocks'),
				'1.1.0',
				true 
			);

			wp_add_inline_script(
				'bplapl-color-schema-js',
				'window.Pickr = Pickr;',
				'after'
			);
		}
	}
	new BPMPPlugin;
}