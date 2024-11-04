<?php
/**
 * Plugin Name: Music Player with Slider
 * Description: Add a dynamic music player to your WordPress site with an interactive slider. Customize audio playback and enhance user experience with seamless control and integration.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: music-player 
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'MPWS_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'MPWS_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'MPWS_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'MPWSPlugin' ) ){
	class MPWSPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}
	}
	new MPWSPlugin();
}