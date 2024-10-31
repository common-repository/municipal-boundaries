<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://profiles.wordpress.org/yiannisdesp4/
 * @since      1.0.0
 *
 * @package    Municipal_Boundaries
 * @subpackage Municipal_Boundaries/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Municipal_Boundaries
 * @subpackage Municipal_Boundaries/public
 * @author     Yiannis D
 */
class Municipal_Boundaries_Public
{

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($plugin_name, $version)
	{

		$this->plugin_name = $plugin_name;
		$this->version = $version;
		add_shortcode('municipal-boundaries-map', [$this, 'register_municipal_boundaries_map_shortcode']);
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles()
	{

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Municipal_Boundaries_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Municipal_Boundaries_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts()
	{

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Municipal_Boundaries_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Municipal_Boundaries_Loader will then create the relationships
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		
		
	}

	public function register_municipal_boundaries_map_shortcode()
	{
		static $already_run = false;
		if ($already_run !== true) {
			$options = get_option($this->plugin_name . '-settings');
			wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/municipal-boundaries-public.css',[], $this->version, 'all');
			wp_enqueue_script($this->plugin_name . '-i18n', plugin_dir_url(__FILE__) . 'js/i18n.js', [], $this->version, false);
			wp_localize_script($this->plugin_name . '-i18n', '__mb_i18n_conf', [
				'imgBase' => plugin_dir_url(__FILE__) . 'img/',
			]);
			wp_enqueue_script($this->plugin_name . '-map', plugin_dir_url(__FILE__) . 'js/municipal-boundaries-public.js', [$this->plugin_name . '-i18n'], $this->version, false);
			if ( array_key_exists('remote_kml_base', $options) && strlen(trim($options['remote_kml_base'])) > 4 && wp_http_validate_url($options['remote_kml_base']) ) {
				$kmlBase = rtrim(trim($options['remote_kml_base']), '/') . '/';
			} else {
				$kmlBase = plugin_dir_url(__FILE__) . 'kml/';
			}
			wp_localize_script($this->plugin_name . '-map', '__mb_map_conf', [
				'kmlBase' => $kmlBase,
			]);
			// get key:
			$key = array_key_exists('gmap_api_key', $options) ? $options['gmap_api_key'] : '';
			if ( strlen( $key ) > 0 ) {
				wp_enqueue_script('mbpg_map_js', 'https://maps.googleapis.com/maps/api/js?callback=initMunicipalBoundariesMap&key=' . $key, '', false);
			} else {
				wp_add_inline_script($this->plugin_name . '-map', 'setTimeout(initMunicipalBoundariesMap, 2500);');
			}
		}
		$already_run = true;
		ob_start();
		?>
		<div class="mmap-wrap">
			<div id="legend" class="legend-container"></div>
			<div id="map" class="map-container"></div>
		</div>
		<?php return ob_get_clean();
	}
}
