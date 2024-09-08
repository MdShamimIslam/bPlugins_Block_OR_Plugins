<?php

/*
* Plugin Name: Practice Shortcode
* Description: Handle the basics with this plugin
*/


// <--------create shortcode and show profile by HTML code start-------->

add_shortcode('profile', 'bpl_profile_shortcode');

function bpl_profile_shortcode($attributes){
    $item = shortcode_atts(array(
        'name' => 'Md. Saddam Islam',
        'title' => 'Senior Software Developer',
        'url' => 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
    ), $attributes);

    ob_start();
    // create handle/hook css and style
    wp_enqueue_style('bpl_style');
    wp_enqueue_script('bpl_script');
?>
    <div class="card">
        <img src="<?php echo $item['url'] ?>" alt="profile" style="width:100%">
        <div class="container">
            <h4>
                <b>
                    <?php echo $item['name'] ?>
                </b>
            </h4>
            <p><?php echo $item['title'] ?></p>
        </div>
    </div>

<?php
    return ob_get_clean();
}

// <--------create shortcode and show profile by HTML code end-------->


// <--------create custom admin menu in dashboard settings page start-------->

add_action( 'admin_menu', 'bpl_custom_settings_menu' );

function bpl_custom_settings_menu() {
    // If you want something like a settings menu, you apply menu instead of options
    add_options_page(
        'My Custom Settings', 
        'Saddam Settings',   
        'manage_options',
        'my-custom-settings',
        'my_custom_settings_page'
    );
}

function my_custom_settings_page() {
    ?>
        <div class="wrap">
            <h1>Custom Settings Page of Saddam</h1>
            <p>Saddam Lorem ipsum dolor sit amet</p>
        </div>
    <?php
}

// <--------create custom admin menu in dashboard settings page end-------->


// <--------When activation the plugin then redirect in dashboard settings page start-------->

register_activation_hook( __FILE__, 'bpl_active_plugin' );

add_action( 'admin_init', 'bpl_activation_redirect' );

function bpl_active_plugin() {
	add_option( 'bpl_activation_redirect', true );
}

function bpl_activation_redirect() {
	if ( get_option( 'bpl_activation_redirect', false ) ) {
		delete_option( 'bpl_activation_redirect' );
		wp_safe_redirect( admin_url( 'options-general.php?page=my-custom-settings' ) );
		exit;
        // if (is_admin() && current_user_can('manage_options')) {
        //     wp_redirect(admin_url('options-general.php?page=my-custom-settings'));
        //     exit;
        // }
	}
}

// <--------When activation the plugin then redirect in dashboard settings page end-------->



// <-------- added CSS and JS file with profile shortcode start-------->
add_action('wp_enqueue_scripts', 'bpl_enqueue_scripts');

function bpl_enqueue_scripts(){
    wp_register_style('bpl_style', plugins_url( 'public/css/style.css', __FILE__ ));
    wp_register_script('bpl_script', plugins_url( 'public/js/script.js', __FILE__ ), '1.0.0', true );
}

// <-------- added CSS and JS file with profile shortcode end-------->