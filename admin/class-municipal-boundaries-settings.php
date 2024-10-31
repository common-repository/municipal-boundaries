<?php

class Municipal_Boundaries_Admin_Settings
{

    /**
     * The ID of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $plugin_name    The ID of this plugin.
     */
    private $plugin_name;

    public function __construct($plugin_name)
    {
        $this->plugin_name = $plugin_name;
        add_action('admin_menu', [$this, 'addOptionsMenuUnderSettings']);
        add_action('admin_init', [$this, 'registerSettings']);
    }


    public function addOptionsMenuUnderSettings()
    {
        add_options_page(
            'Municipal Boundaries on Google Map',
            'Municipal Boundaries',
            'manage_options',
            $this->plugin_name . '_options',
            [$this, 'renderSettingsPage']
        );
    }

    public function renderSettingsPage()
    {
        ?>
        <h2>Municipal Boundaries Plugin Settings</h2>
        <form action="options.php" method="post">
            <?php
                settings_fields($this->plugin_name . '-opt');
                do_settings_sections($this->plugin_name . '-opt');
                submit_button();
            ?>
        </form>
        <?php
    }

    public function registerSettings()
    {
        register_setting(
            $this->plugin_name . '-opt',
            $this->plugin_name . '-settings'
        );

        add_settings_section(
            $this->plugin_name . '-opt-section',
            'API Settings',
            function () {
                echo '<p>API related options</p>';
            },
            $this->plugin_name . '-opt'
        );

        add_settings_field(
            'gmap_api_key',
            'Google Maps API Key',
            [$this, 'renderApiKeyInput'],
            $this->plugin_name . '-opt',
            $this->plugin_name . '-opt-section'
        );

        add_settings_field(
            'remote_kml_base',
            'Optionally set a remote KML base URL',
            [$this, 'renderRemoteKMLBase'],
            $this->plugin_name . '-opt',
            $this->plugin_name . '-opt-section'
        );

        
    }

    public function validateOptions($inputs)
    {
        $newinput['gmap_api_key'] = trim($inputs['gmap_api_key']);
        if (!preg_match('/^[a-z0-9]{32}$/i', $newinput['gmap_api_key'])) {
            $newinput['gmap_api_key'] = '';
        }
        return $newinput;
    }

    public function renderApiKeyInput()
    {
        $options = get_option($this->plugin_name . '-settings');
        echo "<input name='". $this->plugin_name ."-settings[gmap_api_key]' type='text' value='" . esc_attr($options['gmap_api_key'] ?? '') . "' />";
    }

    public function renderRemoteKMLBase()
    {
        $options = get_option($this->plugin_name . '-settings');
        echo "<input name='". $this->plugin_name ."-settings[remote_kml_base]' type='text' value='" . esc_attr($options['remote_kml_base'] ?? '') . "' />";
    }

    
}
