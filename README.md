# Cyprus Municipal Boundaries rendered on Google Maps
### Tested up to: Wordpress 5.4
**License: GPLv2 or later**  
**License URI: http://www.gnu.org/licenses/gpl-2.0.html**

This plugin renders current Cyprus Municipal Boundaries on Google Map based on an optimised set of KML data from [OpenDataCy](https://www.data.gov.cy).

#### Installation

- Upload `municipal-boundaries.zip` to the `/wp-content/plugins/` directory and extract all the files
- Activate the plugin through the 'Plugins' menu in WordPress
- In the related options page (under 'Settings' menu), insert the Google Maps API key from your Google Cloud Console (leave it blank in case script is already loaded)  
- Place `<?php do_shortcode('[municipal-boundaries-map]'); ?>` in your templates or `[municipal-boundaries-map]` in your editor

*Changelog*

**v1.0**