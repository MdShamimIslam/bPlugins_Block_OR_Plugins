<?php

/**
 * Plugin Name: Panoramic Image Viewer 
 * Description: The 3D Panoramic Panoramic Image Viewer block lets users embed a 360° interactive image, offering drag-to-view, zoom, and fullscreen etc options for an immersive experience.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
 */

// ABS PATH
if (!defined('ABSPATH')) {
	exit;
}

// Constant
define('BPLIV_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('BPLIV_DIR_URL', plugin_dir_url(__FILE__));
define('BPLIV_DIR_PATH', plugin_dir_path(__FILE__));


if (!class_exists('BPLIVPlugin')) {
	class BPLIVPlugin
	{
		function __construct(){
			add_action('init', [$this, 'onInit']);
			add_action('enqueue_block_assets', [$this, 'bpliv_enqueueCssAndJs']);
		}

		function onInit(){
			register_block_type(__DIR__ . '/build');
		}
			
		function bpliv_enqueueCssAndJs() {
			wp_enqueue_style(
				'bpliv-pannellum-css',
				BPLIV_DIR_URL . './public/css/pannellum.css',
				array(),
				BPLIV_VERSION
			);
			wp_enqueue_script(
				'bpliv-pannellum-js',
				BPLIV_DIR_URL . './public/js/pannellum.js',
				array(),
				BPLIV_VERSION,
				true

			);
			wp_enqueue_script(
				'three-js',
				BPLIV_DIR_URL . './public/js/three.min.js',
				array(),
				null,
				true
			);
			wp_enqueue_script(
				'panolens-js',
				BPLIV_DIR_URL . './public/js/panolens.min.js',
				array('three-js'),
				null,
				true
			);
		}
		
	}
	new BPLIVPlugin();
}



