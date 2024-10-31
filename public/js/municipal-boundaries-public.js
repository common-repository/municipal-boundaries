"use strict"
var __municipal_boundaries_map = (function(){
    var map,
    infowindow,
    marker,
    dBaseUrl = __mb_map_conf.kmlBase,
    kmlDataSources = {
        districts: dBaseUrl + 'districts.kml?t=v1.2',
        lefkosia_district: dBaseUrl + 'lefkosia-district.kml?t=v1.2',
        larnaka_district: dBaseUrl + 'larnaka-district.kml?t=v1.2',
        ammochostos_district: dBaseUrl + 'ammochostos-district.kml?t=v1.2',
        lemesos_district: dBaseUrl + 'lemesos-district.kml?t=v1.2',
        keryneia_district: dBaseUrl + 'keryneia-district.kml?t=v1.2',
        paphos_district: dBaseUrl + 'paphos-district.kml?t=v1.2',
    },
    layers = {},
    districts_coords = {
        lefkosia_district: { lat: 35.0698226, lng: 33.2483525 },
        larnaka_district: { lat: 34.9117301, lng: 33.6029347 },
        ammochostos_district: { lat: 35.051554, lng: 33.8418132 },
        lemesos_district: { lat: 34.6903828, lng: 33.0286117 },
        keryneia_district: { lat: 35.319376, lng: 33.323493 },
        paphos_district: { lat: 34.7651055, lng: 32.4173176 }
    },
    legendHTML = '',
    zoomSet = false,
    showDistrict = function(lat, lng){
        var center = new google.maps.LatLng(lat, lng);
        map.panTo(center);
        if (!zoomSet){
            map.setZoom(11);
            zoomSet = true;
        }
    },
    render = function(){
        map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(35.0983305,33.3349372),
            zoom: 10,
            mapTypeId: 'roadmap'
        });
        for (var k in kmlDataSources) {
            // render layer
            layers[k] = new google.maps.KmlLayer(kmlDataSources[k], {
                suppressInfoWindows: true,
                preserveViewport: true,
                map: map
            });

            layers[k].addListener('click', function (e) {
                if (infowindow) infowindow.close();
                var content = '<h4 style="margin:0;margin-bottom:10px;">' + __municipal_boundaries_i18n.translate(e.featureData.name) + '</h4>';
                if (e.featureData.hasOwnProperty('description') && (e.featureData.description).length > 0) {
                    content += '<div style="font-family:\'open sans\',\'HelveticaNeue\',\'Helvetica Neue\',\'Helvetica-Neue\',Helvetica,Arial,sans-serif">' + __municipal_boundaries_i18n.translate(e.featureData.description) + '</div>';
                }
                infowindow = new google.maps.InfoWindow({
                    content: content
                });
                if (marker) marker.setMap(null);
                marker = new google.maps.Marker({
                    position: e.latLng,
                    map: map
                });
                infowindow.open(map, marker);
                map.panTo(marker.getPosition());
            });

            if ( k === 'districts' ) continue;

            // generate legend html
            legendHTML += `
            <div class="item">
                <a href="#" class="maplink d-${k}" data-lat="${districts_coords[k].lat}" data-lng="${districts_coords[k].lng}">
                    ${__municipal_boundaries_i18n.translate(k)}
                </a>
            </div>
            `;
            
        }
        legendHTML += '<div style="text-align:right;font-size:11px;margin-right:10px;clear:both;"><br><a href="https://www.data.gov.cy/node/1537?language=en" target="_blank" title="Χάρτης Ορίων Τοπικών Αρχών της Κυπριακής Δημοκρατίας"><i>Boundary dataset based on OpenDataCy</i></a></div>';
        // render generated legend markup
        document.getElementById('legend').innerHTML = legendHTML;
        // bind generated links with click event
        setTimeout(function(){
            document.querySelectorAll('.mmap-wrap a.maplink').forEach(function (node) {
                node.addEventListener('click', function (e) {
                    e.preventDefault();
                    showDistrict(this.dataset.lat, this.dataset.lng);
                    document.querySelectorAll('.mmap-wrap .item').forEach(function (node) {
                        node.classList.remove('active');
                    });
                    this.parentNode.classList.add('active');
                });
            });
        }, 500);
    };
    return {init: render};
})(__mb_map_conf);

function initMunicipalBoundariesMap(){
    __municipal_boundaries_map.init();
}