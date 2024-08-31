<?php
/**
 * Plugin Name: Advanced Image
 * Description: A customizable image block with enhanced editing and display features.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks 
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'ADIB_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'ADIB_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'ADIB_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'ADIBPlugin' ) ){
	class ADIBPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
			// Add menubar in dashboard
			add_action( 'init', [ $this, 'AdvancedImageInit'] );
			// Add ShortCode
			add_shortcode( 'advanced-image', [ $this, 'shortcodeOfAdvancedImage' ] );
			// Add Custom Columns
			add_filter( 'manage_advanced_image_posts_columns', [ $this, 'advancedImageManageColumns'], 10 );
			// Add Custom manage Column
            add_action( 'manage_advanced_image_posts_custom_column', [ $this, 'advancedImageManageCustomColumns'], 10, 2 );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}
		// Add menubar in dashboard function
		function AdvancedImageInit(){
			register_post_type( 'advanced_image', [
				'label' => 'Advanced Image',
				'labels' => [
					'add_new' => 'Add New Image',
					'add_new_item' => 'Add New Image',
					'edit_item' => 'Edit Image',
					'not_found' => 'There is no image ! please add one.'
				],
				'show_in_rest' => true,
				'public' => true,
				'menu_icon' => "dashicons-format-image",
				'template' => [ ['b-blocks/advanced-image'] ],
				'template_lock' => 'all',
			] );
		}
		// Add ShortCode function
		function shortcodeOfAdvancedImage( $attributes ) {
			$postID = $attributes['id'];
			$post = get_post( $postID );
			$blocks = parse_blocks( $post->post_content );
		
			ob_start();
			echo render_block( $blocks[0] );
		
			return ob_get_clean();

		}
		// Add Custom Columns function
		function advancedImageManageColumns( $defaults ) {
			unset( $defaults['date'] );
			$defaults['shortcode'] = 'ShortCode';
			$defaults['date'] = 'Date';
			return $defaults;
		}
		// Add Custom manage Column function
		function advancedImageManageCustomColumns( $column_name, $post_ID ) {
			if ( $column_name == 'shortcode' ) {
				echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr( $post_ID ) . '">
					<input value="[advanced-image id=' . esc_attr( $post_ID ) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr( $post_ID ) . '\')">
					<span class="tooltip">' . esc_html__( 'Copy To Clipboard' ) . '</span>
				</div>';
			}
		}


	}
	new ADIBPlugin();
}
	


      




     // Step-2

	// // Add menubar in dashboard
	// add_action( 'init', 'AdvancedImageInit' );
	// // Add ShortCode
	// add_shortcode( 'advanced-image',  'shortcodeOfAdvancedImage'  );
	// // Add Custom Columns
	// add_filter( 'manage_advanced_image_posts_columns', 'advancedImageManageColumns', 10 );
	// // Add Custom manage Column
	// add_action( 'manage_advanced_image_posts_custom_column', 'advancedImageManageCustomColumns', 10, 2 );


		
	// // Add menubar in dashboard function
	// function AdvancedImageInit(){
	// 	register_block_type( __DIR__ . '/build' );

	// 	register_post_type( 'advanced_image', [
	// 		'label' => 'Advanced Image',
	// 		'labels' => [
	// 			'add_new' => 'Add New Image',
	// 			'add_new_item' => 'Add New Image',
	// 			'edit_item' => 'Edit Image',
	// 			'not_found' => 'There is no image please add one'
	// 		],
	// 		'show_in_rest' => true,
	// 		'public' => true,
	// 		'menu_icon' => "dashicons-format-image",
	// 		'template' => [ ['b-blocks/advanced-image'] ],
	// 		'template_lock' => 'all',
	// 	] );
	// }
	// // Add ShortCode function
	// function shortcodeOfAdvancedImage( $attributes ) {
	// 	$postID = $attributes['id'];
	// 	$post = get_post( $postID );
	// 	$blocks = parse_blocks( $post->post_content );
	
	// 	ob_start();
	// 	echo render_block( $blocks[0] );
	
	// 	return ob_get_clean();

	// }
	// // Add Custom Columns function
	// function advancedImageManageColumns( $defaults ) {
	// 	unset( $defaults['date'] );
	// 	$defaults['shortcode'] = 'ShortCode';
	// 	$defaults['date'] = 'Date';
	// 	return $defaults;
	// }
	// // Add Custom manage Column function
	// function advancedImageManageCustomColumns( $column_name, $post_ID ) {
	// 	if ( $column_name == 'shortcode' ) {
	// 		echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr( $post_ID ) . '">
	// 			<input value="[advanced-image id=' . esc_attr( $post_ID ) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr( $post_ID ) . '\')">
	// 			<span class="tooltip">' . esc_html__( 'Copy To Clipboard' ) . '</span>
	// 		</div>';
	// 	}
	// }