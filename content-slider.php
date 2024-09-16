<?php
/**
 * Plugin Name: Content Slider
 * Description: Create dynamic, fully responsive sliders for your WordPress site with ease. Add images, text, and posts directly in the Block Editor, featuring smooth animations and versatile customization options to match your site’s design.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: content-slider
 */

if (!defined('ABSPATH')) {
	exit;
}

define('BPLCS_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('BPLCS_DIR_URL', plugin_dir_url(__FILE__));
define('BPLCS_DIR_PATH', plugin_dir_path(__FILE__));

if (!class_exists('BPLCSPlugin')) {
	class BPLCSPlugin
	{
		function __construct(){
			add_action('init', [$this, 'onInit']);
			add_action('enqueue_block_assets', [$this, 'bplcs_enqueue_scripts']);
			add_action('init', [$this, 'bplcs_register_content_slider_post_type']);
			add_shortcode('content_slider_shortcode', [$this, 'bplcs_content_slider_shortcode']);
			add_filter('manage_content_slider_posts_columns', [$this, 'contentSliderManageColumns'], 10);
			add_action('manage_content_slider_posts_custom_column', [$this, 'contentSliderManageCustomColumns'], 10, 2);
			add_action('admin_enqueue_scripts', [$this, 'bplcs_admin_enqueue_script']);
			add_action('admin_enqueue_scripts', [$this, 'bplcs_admin_preview_script']);

		}

		function onInit(){
			register_block_type(__DIR__ . '/build');
		}

		function bplcs_enqueue_scripts(){
			wp_register_style('slider-style', plugins_url('./src/assets/css/jquery.bxslider.min.css', __FILE__), [], BPLCS_VERSION);
			wp_register_script('slider-script', plugins_url('./src/assets/js/jquery.bxslider.min.js', __FILE__), ['jquery'], BPLCS_VERSION, true);
            
			wp_enqueue_script('jquery');

			wp_enqueue_style(
				'bxslider-css',
				'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.17/jquery.bxslider.min.css',
				array(), 
				'4.2.17' 
			);
			wp_enqueue_script(
				'bxslider-js',
				'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.17/jquery.bxslider.min.js',
				array('jquery'),
				'4.2.17',
				true
			);

		}

		function bplcs_register_content_slider_post_type(){
			register_post_type('content_slider', [
				'label' => 'Content Slider',
				'labels' => [
					'add_new' => 'Add New', 
					'add_new_item' => 'Add New Slider',
					'edit_item' => 'Edit Slider',
					'not_found' => 'There was no slider please add one'
				],
				'show_in_rest' => true,
				'public' => true,
				'menu_icon' => 'dashicons-slides',
				'template' => [['bplcs/content-slider']],
				'template_lock' => 'all',
			]);
		}

		function bplcs_content_slider_shortcode($attributes){
			$postID = $attributes['id'];
			$post = get_post($postID);
			$blocks = parse_blocks($post->post_content);
			ob_start();
			echo render_block($blocks[0]);
			return ob_get_clean();
		}

		function contentSliderManageColumns($defaults){
			unset($defaults['date']);
			$defaults['shortcode'] = 'ShortCode';
			$defaults['slides'] = 'Slides';
			$defaults['date'] = 'Date';
			return $defaults;
		}

		function contentSliderManageCustomColumns($column_name, $post_ID){
			if ($column_name == 'shortcode') {
				echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($post_ID) . '">
						<input value="[content_slider_shortcode id=' . esc_attr($post_ID) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_ID) . '\')" readonly>
						<span class="tooltip">Copy To Clipboard</span>
                      </div>';
			}

			if ($column_name == 'slides') {
				$post_content = get_post($post_ID)->post_content;
				$blocks = parse_blocks($post_content);
				$num_of_slides = 0;
				foreach ($blocks as $block) {
					if ($block['blockName'] === 'bplcs/content-slider') {
						$slides = isset($block['attrs']['slides']) ? $block['attrs']['slides'] : [];
						$num_of_slides = is_array($slides) ? count($slides) : 0;
						break;
					}
				}
				echo '<strong>Total Slide : </strong>', $num_of_slides;
			}
		}

		function bplcs_admin_enqueue_script(){
			wp_register_style('checking-admin-style', plugins_url('./src/admin/css/admin.css', __FILE__), array(), 'all');
			wp_enqueue_style('checking-admin-style');

			wp_register_script('checking-admin-script', plugins_url('./src/admin/js/admin.js', __FILE__), '', '', true);
			wp_enqueue_script('checking-admin-script');

		}

		function bplcs_admin_preview_script($hook){
			if ($hook !== 'settings_page_content-slider') {
				return;
			}

			wp_enqueue_script('jquery');

			wp_enqueue_style(
				'bxslider-css',
				'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.17/jquery.bxslider.min.css',
				array(),
				'4.2.17'
			);

			wp_enqueue_script(
				'bxslider-js',
				'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.17/jquery.bxslider.min.js',
				array('jquery'),
				'4.2.17',
				true 
			);

		}
	}
	new BPLCSPlugin();
}

add_action('admin_menu', 'bplcs_settings_page');

function bplcs_settings_page(){
	add_options_page(
		'My Custom Page',
		'Content Slider',
		'manage_options',
		'content-slider',
		'my_custom_page_html'
	);
}

function my_custom_page_html(){
	$shortcode = '[content_slider_shortcode id=10573]'; 
	?>
	<div class="wrap">
		<div>
			<h1><?php esc_html_e('Welcome to the Ultimate Experience with Our Content Slider Plugin', 'content-slider'); ?></h1>
			<h2><?php esc_html_e('See the Slider in Motion', 'content-slider'); ?></h2>

			<div id="slider-preview" class="bxslider">
				<div>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxYEW29wSXN4okglES8ZteOhEWq3ukJXNWA&s"
						alt="Slide 1" 
					/>
				</div>
				<div>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-DWBzGP5Vce-kyrTKSWpyQU1G-4-2P_Bsw&s"
						alt="Slide 2"
					 />
				</div>
				<div>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAP_pV-51aCzkLcnzvKnIJWPjWaWFZVun8Q&s"
						alt="Slide 3" 
					/>
				</div>
			</div>

			<script type="text/javascript">
				jQuery(document).ready(function ($) {
					$('#slider-preview').bxSlider({
						auto: true,
						controls: true,
						pager: true,
						slideWidth: 800,
					});
				});
			</script>

		</div>
	</div>

	<div class="details">
		<div>
		<p>
			<strong>Description :</strong>
			Create stunning, responsive content sliders in WordPress using a custom block. Seamlessly display images, text, or posts with sleek transitions 
			and tailor every style to fit your brand, all within the intuitive Block Editor.
		</p>

		<p>
			<strong>Follow :</strong>
			Please visit the Content Slider dashboard page, where you can add and
			 customize our block to your liking. From here, you'll also find the shortcode for 
			 use in your theme. Simply copy the shortcode, paste it on any page, and your fully 
			customizable content slider will be showcased instantly.
		</p>
		<h3>Thank you for using our plugin!</h3>
		</div>
	</div>

	<style>
		.details{
			width:62%;
			margin: 0 auto;
			text-align:justify;
		}
		.details p{
			font-size: 17px;
			font-family: sans-serif;
		}
		.details h3{
			text-align: center;
			margin-top: 50px;
			color:purple;
			font-size: 20px;
			font-family: sans-serif;
		}

		.wrap {
			text-align: center;
			display: flex;
			justify-content: center;
		}

		.wrap h1 {
			font-size: 28px;
			margin-bottom: 20px;
			font-weight: 600;
			font-family: serif;
		}

		.shortcode-wrapper {
			display: flex;
			align-items: center;
		}

		#copyShortcodeButton {
			background-color: #0073aa;
			color: #fff;
			padding: 5px 10px;
			border-radius: 3px;
			border: none;
			cursor: pointer;
			margin-top: 10px;
			position: relative;
		}

		#copyShortcodeButton.tooltip:after {
			content: attr(title);
			position: absolute;
			top: -30px;
			left: 50%;
			transform: translateX(-50%);
			background-color: #333;
			color: #fff;
			padding: 5px 10px;
			border-radius: 5px;
			white-space: nowrap;
			font-size: 12px;
		}

		#slider-preview {
			width: 100%;
			margin: 0 auto;
		}

		.bxslider img {
			width: 100%;
			height: auto;
		}
	</style>
	<?php
}


register_activation_hook(__FILE__, 'my_plugin_activate');

function my_plugin_activate(){
	set_transient('my_plugin_redirect', true, 30); 
}

add_action('admin_init', 'my_plugin_redirect_after_activation');

function my_plugin_redirect_after_activation(){
	if (get_transient('my_plugin_redirect')) {
		delete_transient('my_plugin_redirect');

		if (is_admin() && current_user_can('manage_options')) {
			wp_redirect(admin_url('options-general.php?page=content-slider'));
			exit;
		}
	}
}