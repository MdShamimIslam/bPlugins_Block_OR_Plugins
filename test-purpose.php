<?php

/**
 * Plugin Name: Test Purpose 
 * Description: Short description of the plugin
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

if (function_exists('bpltp_fs')) {
	register_activation_hook(__FILE__, function () {
		if (is_plugin_active('test-purpose/test-purpose.php')) {
			deactivate_plugins('test-purpose/test-purpose.php');
		}
		if (is_plugin_active('test-purpose-pro/test-purpose.php')) {
			deactivate_plugins('test-purpose-pro/test-purpose.php');
		}
	});
} else {
	// Constant
	define('BPLTP_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
	define('BPLTP_DIR_URL', plugin_dir_url(__FILE__));
	define('BPLTP_DIR_PATH', plugin_dir_path(__FILE__));

	if (! function_exists('bpltp_fs')) {
		// Create a helper function for easy SDK access.
		function bpltp_fs()
		{
			global $bpltp_fs;

			if (! isset($bpltp_fs)) {
				// Include Freemius SDK.
				require_once dirname(__FILE__) . '/freemius/start.php';

				$bpltp_fs = fs_dynamic_init(array(
					'id'                  => '16607',
					'slug'                => 'test-purpose',
					'premium_slug'        => 'test-purpose-pro',
					'type'                => 'plugin',
					'public_key'          => 'pk_f108bb111a7295d0d4307ce26585d',
					'is_premium'          => true,
					'premium_suffix'      => 'Pro',
					// If your plugin is a serviceware, set this option to false.
					'has_premium_version' => true,
					'has_addons'          => false,
					'has_paid_plans'      => true,
					'menu'                => array(
						'slug'           => 'edit.php?post_type=test_purpose',
						'support'        => false,
					),
				));
			}

			return $bpltp_fs;
		}

		// Init Freemius.
		bpltp_fs();
		// Signal that SDK was initiated.
		do_action('bpltp_fs_loaded');
	}


	if (function_exists('bpltp_fs')) {
		bpltp_fs()->add_filter('freemius_pricing_js_path', function () {
			return BPLTP_DIR_PATH . 'includes/freemius-pricing/freemius-pricing.js';
		});
	}

	function bpltpIsPremium(){
		return bpltp_fs()->can_use_premium_code() ?? false;
	}

	if (!class_exists('BPLTPPlugin')) {
		class BPLTPPlugin
		{
			function __construct()
			{
				add_action('init', [$this, 'onInit']);
				add_action('init', [$this, 'bpltp_testPurpose']);
				add_filter('manage_test_purpose_posts_columns', [$this, 'bpltp_testPurposeManageColumns'], 10);
				add_action('manage_test_purpose_posts_custom_column', [$this, 'bpltp_testPurposeManageCustomColumns'], 10, 2);
				add_action('admin_enqueue_scripts', [$this, 'bpltp_enqueueAdminScripts']);
				add_action( 'wp_ajax_bpltpPremiumChecker', [$this, 'bpltpPremiumChecker'] ); // Premium Checker
				add_action( 'wp_ajax_nopriv_bpltpPremiumChecker', [$this, 'bpltpPremiumChecker'] ); // Premium Checker
				add_action( 'admin_init', [$this, 'bpltpRegisterSettings'] ); // For backend nonce
				add_action( 'rest_api_init', [$this, 'bpltpRegisterSettings'] ); // For backend nonce
			}

			function onInit()
			{
				register_block_type(__DIR__ . '/build');
			}

			function bpltpPremiumChecker(){
				$nonce = sanitize_text_field( $_POST['_wpnonce'] ?? null );
	
				if( !wp_verify_nonce( $nonce, 'wp_ajax' )){
					wp_send_json_error( 'Invalid Request' );
				}
	
				wp_send_json_success( [
					'isPipe' => bpltpIsPremium()
				] );
			}
			
			function bpltpRegisterSettings(){
				register_setting( 'bpltpUtils', 'bpltpUtils', [
					'show_in_rest'		=> [
						'name'			=> 'bpltpUtils',
						'schema'		=> [ 'type' => 'string' ]
					],
					'type'				=> 'string',
					'default'			=> wp_json_encode( [ 'nonce' => wp_create_nonce( 'wp_ajax' ) ] ),
					'sanitize_callback'	=> 'sanitize_text_field'
				] );
			}

			function bpltp_testPurpose(){
				register_post_type('test_purpose', [
					'label' => 'Test Purpose',
					'labels' => [
						'add_new' => 'Add New Purpose',
						'add_new_item' => 'Add New Purpose',
						'edit_item' => 'Edit Purpose',
						'not_found' => 'There is no Purpose ! please add one.'
					],
					'show_in_rest' => true,
					'public' => true,
					'menu_icon' => "dashicons-controls-repeat",
					'template' => [['b-blocks/test-purpose']],
					'template_lock' => 'all'
				]);
			}

			function bpltp_testPurposeManageColumns($defaults)
			{
				unset($defaults['date']);
				$defaults['shortcode'] = 'ShortCode';
				$defaults['date'] = 'Date';
				return $defaults;
			}

			function bpltp_testPurposeManageCustomColumns($column_name, $post_ID)
			{
				if ($column_name == 'shortcode') {
					echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($post_ID) . '">
							<input value="[advanced-image id=' . esc_attr($post_ID) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_ID) . '\')">
							<span class="tooltip">' . esc_html__('Copy To Clipboard') . '</span>
						  </div>';
				}
			}

			function bpltp_enqueueAdminScripts()
			{
				global $post_type;
				if ($post_type !== "test_purpose") {
					return;
				}

				wp_enqueue_style('checking-admin-style', plugins_url('./admin/post.scss', __FILE__), array(), 'all');
				wp_enqueue_script('checking-admin-script', plugins_url('./admin/post.js', __FILE__), '', '', true);
			}
		}
		new BPLTPPlugin();
	}
}
