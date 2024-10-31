=== Municipal Boundaries ===
Contributors: yiannisdesp4
Tags: cyprus, municipalities, map, boundaries, googlemap, ucm
Requires at least: 4.7
Tested up to: 5.4
Stable tag: 1.1.4
Requires PHP: 5.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Renders current Cyprus Municipal Boundaries on a Google Map. Dataset is based on an optimised set of KML data from OpenDataCy (Dept. of Land & Surveys & Dept. of Town Planning and Housing) and all related data are provided AS-IS.

== Description ==

*Municipal Boundaries* is a simple plugin that renders current Cyprus Municipal Boundaries (as of 05/2020) on a Google Map. The **dataset is provided AS-IS** and is based on an optimised set of KML data from [OpenDataCy](https://www.data.gov.cy). For more information about the data, please refer to their respective pages [Provincial Administrative Boundaries](https://www.data.gov.cy/node/1012?language=en) and [Map of the Borders of Local Authorities of the Republic of Cyprus](https://www.data.gov.cy/node/1537?language=en) at OpenDataCy.
 
Languages supported: Greek, English  
  
Plugin requires a Google Maps Api key. In case Google Maps Api is already loaded into your theme or from another plugin, do not provide the Api key in Plugin Settings.  
  
Once plugin is configured, you may place "[municipal-boundaries-map]" shortcode in your editor or file.

== Frequently Asked Questions ==

= How does it work? =

By placing the shortcode `[municipal-boundaries-map]` in your content editor or in your templates by using `<?= do_shortcode('[municipal-boundaries-map]') ?>`.

= How can I customize design? =

You can overwrite the CSS rules for .mmap-wrap, .map-container & .map-legend classes.

= Is the basic UI provided responsive? =

Yes.

== Screenshots ==

1. Basic demo UI.

== Changelog ==

= 1.1.3 =
* Data updated.

= 1.1.2 =
* Bugfixes.
* Improved KML Data.

= 1.1.0 =
* District boundaries are now rendered.
* Added KML Base URL option in settings in case of remote kml files loading.
* Improved KML Data.

= 1.0.0 =
* Initial release.