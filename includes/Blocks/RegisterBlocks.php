<?php
/**
 * Blocks registration class.
 *
 * @package Music_Slider
 */

namespace Music_Slider\Blocks;

/**
 * Class RegisterBlocks
 */
class RegisterBlocks {
	/**
	 * Class constructor.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'blocks' ) );
	}

	/**
	 * Register blocks and scripts.
	 */
	public function blocks() {
		$blocks = array(
			'demo-block',
			'music-slider'
		);

		foreach ( $blocks as $block ) {
			register_block_type( BPLMS_DIR . "/build/blocks/{$block}" );
		}

		add_action( 'admin_enqueue_scripts', array( $this, 'block_scripts' ) );
	}

	/**
	 * Register block scripts and styles.
	 */
	public function block_scripts() {
		/**
		 * Note that in the block json the block name is "music-slider/demo-block" though you also need to add a suffix
		 * of editor-script to make it work at block editor.
		 */
		$handle = 'music-slider-demo-block-editor-script';

		$data = get_transient( 'music-slider-demo-block-data' );

		if ( ! $data ) {
			$response = wp_remote_get( 'https://jsonplaceholder.typicode.com/users' );
			$data     = wp_remote_retrieve_body( $response );
			$data     = json_decode( $data );

			set_transient( 'music-slider-demo-block-data', $data, 7 * DAY_IN_SECONDS );
		}

		wp_localize_script( $handle, 'music_sliderDemoBlockData', $data );
	}
}
