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
 * @fs_premium_only /freemius
 * @fs_free_only /bplugins_sdk
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; };

if ( function_exists( 'bpmp_fs' ) ) {
	register_activation_hook( __FILE__, function () {
		if ( is_plugin_active( 'audio-player-block/plugin.php' ) ){
			deactivate_plugins( 'audio-player-block/plugin.php' );
		}
		if ( is_plugin_active( 'audio-player-block-pro/plugin.php' ) ){
			deactivate_plugins( 'audio-player-block-pro/plugin.php' );
		}
	} );
} else {
	define( 'BPMP_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.1.0' );
	define( 'BPMP_DIR_URL', plugin_dir_url( __FILE__ ) );
	define( 'BPMP_DIR_PATH', plugin_dir_path( __FILE__ ) );
	define('BPMP_HAS_FREE', 'audio-player-block/plugin.php' === plugin_basename(__FILE__));
	define('BPMP_HAS_PRO', 'audio-player-block-pro/plugin.php' === plugin_basename(__FILE__));


	if ( ! function_exists( 'bpmp_fs' ) ) {
		function bpmp_fs() {
			global $bpmp_fs;
	
			if ( ! isset( $bpmp_fs ) ) {
				$fsStartPath = dirname(__FILE__) . '/freemius/start.php';
				$bSDKInitPath = dirname(__FILE__) . '/bplugins_sdk/init.php';

				if (BPMP_HAS_PRO && file_exists($fsStartPath)) {
					require_once $fsStartPath;
				} else if (BPMP_HAS_FREE && file_exists($bSDKInitPath)) {
					require_once $bSDKInitPath;
				}

				$bpmpConfig = array(
					'id'                  => '17222',
					'slug'                => 'audio-player-block',
					'premium_slug'        => 'audio-player-block-pro',
					'type'                => 'plugin',
					'public_key'          => 'pk_44dc77a45966f6bb4960f3efe87d5',
					'is_premium'          => true,
					'premium_suffix'      => 'Pro',
					'has_premium_version' => true,
					'has_addons'          => false,
					'has_paid_plans'      => true,
					'trial'               => array(
						'days'               => 7,
						'is_require_payment' => true,
					),
					'menu'                => array(
						'slug'           => 'edit.php?post_type=audio_player_block&page=bpmp_demo_page',
						"first-path"     => 'edit.php?post_type=audio_player_block&page=bpmp_demo_page',
						'support'        => false,
					),
				);

				$bpmp_fs = (BPMP_HAS_PRO && file_exists($fsStartPath)) ? fs_dynamic_init($bpmpConfig) : fs_lite_dynamic_init($bpmpConfig);
			}
	
			return $bpmp_fs;
		}

		bpmp_fs();
		do_action( 'bpmp_fs_loaded' );
	}

	function bpmpIsPremium(){
		return bpmp_fs()->can_use_premium_code() ?? false;
	}

	// ... Your plugin's main file logic ...
	if( !class_exists( 'BPMPPlugin' ) ){
		class BPMPPlugin{
			function __construct(){
				add_action( 'init', [$this, 'onInit'] );
				add_action('enqueue_block_editor_assets', [$this, 'bpmp_enqueueCssAndJsOfColorSchema']);
				add_action('init', [$this, 'bpmp_register_audio_player_block_post_type']);
				add_shortcode('audio_player', [$this, 'bpmp_audio_player_block_shortcode']);
				add_filter('manage_audio_player_block_posts_columns', [$this, 'bpmp_audioPlayerManageColumns'], 10);
				add_action('manage_audio_player_block_posts_custom_column', [$this, 'bpmp_audioPlayerManageCustomColumns'], 10, 2);
				add_action('admin_enqueue_scripts', [$this, 'bpmp_admin_enqueue_script']);
				add_action( 'admin_menu', [ $this, 'bpmp_add_demo_submenu' ] );

				add_action( 'wp_ajax_bpmpPremiumChecker', [$this, 'bpmpPremiumChecker'] ); 
				add_action( 'wp_ajax_nopriv_bpmpPremiumChecker', [$this, 'bpmpPremiumChecker'] );
				add_action( 'admin_init', [$this, 'registerSettings'] );
			    add_action( 'rest_api_init', [$this, 'registerSettings']);
			}
	
			function bpmpPremiumChecker(){
				$nonce = sanitize_text_field($_POST['_wpnonce'] ?? null);

				if( !wp_verify_nonce( $nonce, 'wp_ajax' )){
					wp_send_json_error( 'Invalid Request' );
				}
	
				wp_send_json_success( [
					'isPipe' => bpmpIsPremium()
				] );
			}

			function registerSettings(){
				register_setting('bpmpUtils', 'bpmpUtils', [
					'show_in_rest' => [
						'name' => 'bpmpUtils',
						'schema' => ['type' => 'string']
					],
					'type' => 'string',
					'default' => wp_json_encode(['nonce' => wp_create_nonce('wp_ajax')]),
					'sanitize_callback' => 'sanitize_text_field'
				]);
			}

			function onInit() {
				register_block_type( __DIR__ . '/build' );
			}
	
			function bpmp_enqueueCssAndJsOfColorSchema() {
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
	
			function bpmp_register_audio_player_block_post_type(){
				register_post_type('audio_player_block', [
					'label' => 'Audio Player',
					'labels' => [
						'add_new' => 'Add New', 
						'add_new_item' => 'Add New Player',
						'edit_item' => 'Edit Player',
						'not_found' => 'There was no player please add one'
					],
					'show_in_rest' => true,
					'public' => true,
					'publicly_queryable' => false,
					'menu_icon' => 'dashicons-format-audio',
					'template' => [['bpmp/mp3-player']],
					'template_lock' => 'all',
				]);
			}

			function bpmp_add_demo_submenu() {
				add_submenu_page(
					'edit.php?post_type=audio_player_block',
					'Demo Page',                       
					'Player Demo',                            
					'manage_options',                 
					'bpmp_demo_page',                  
					[ $this, 'bpmp_render_demo_page' ] 
				);
			}

			function bpmp_render_demo_page() {
			?>
			<div id="bplAdminHelpPage"></div>
			<?php
			}
	
			function bpmp_audio_player_block_shortcode($attributes){
				$postID = $attributes['id'];
				$post = get_post($postID);
				$blocks = parse_blocks($post->post_content);
				
				ob_start();
				echo render_block($blocks[0]);
				return ob_get_clean();
			}
	
			function bpmp_audioPlayerManageColumns($defaults){
				unset($defaults['date']);
				$defaults['shortcode'] = 'ShortCode';
				$defaults['date'] = 'Date';
				return $defaults;
			}
	
			function bpmp_audioPlayerManageCustomColumns($column_name, $post_ID){
				if ($column_name == 'shortcode') {
					echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($post_ID) . '">
							<input value="[audio_player id=' . esc_attr($post_ID) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_ID) . '\')" readonly>
							<span class="tooltip">Copy To Clipboard</span>
						  </div>';
				}
			}
	
			function bpmp_admin_enqueue_script() {
				global $typenow;
				if ( 'audio_player_block' === $typenow ) {
					wp_enqueue_script(
						'admin-post-js',
						BPMP_DIR_URL . 'build/admin-post.js',
						['jquery'],
						BPMP_VERSION,
						true 
					);
					wp_enqueue_script(
						'adminHelpJs',
						BPMP_DIR_URL . 'build/admin-help.js',
						[],
						BPMP_VERSION,
						true 
					);
					wp_enqueue_style(
						'admin-post-css',
						BPMP_DIR_URL . 'build/admin-post.css',
						[],
						BPMP_VERSION
					);
					wp_enqueue_style(
						'adminHelpCSS',
						BPMP_DIR_URL . 'build/admin-help.css',
						[],
						BPMP_VERSION
					);
				}
			}
		}
		new BPMPPlugin;
	}
}


