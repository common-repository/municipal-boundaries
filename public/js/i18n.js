/**
 * simple i18n module - self containing translations
 * yiannisdesp, May 2020
 */
var __municipal_boundaries_i18n = (function(){

    var imgsbase = __mb_i18n_conf.imgBase;

    var t = {

        // Districts
        lefkosia_district: {
            en: 'Lefkosia District',
            el: 'Επαρχία Λευκωσίας'
        },
        larnaka_district: {
            en: 'Larnaka District',
            el: 'Επαρχία Λάρνακας'
        },
        ammochostos_district: {
            en: 'Ammochostos District',
            el: 'Επαρχία Αμμοχώστου'
        },
        lemesos_district: {
            en: 'Lemesos District',
            el: 'Επαρχία Λεμεσού'
        },
        keryneia_district: {
            en: 'Keryneia District',
            el: 'Επαρχία Κερύνειας'
        },
        paphos_district: {
            en: 'Paphos District',
            el: 'Επαρχία Πάφου'
        },

        // Ammochostos municipalities
        akanthou_title: {
            en: 'Akanthou',
            el: 'Ακανθού'
        },
        akanthou_desc: {
            en: `<p><img src="${imgsbase}akanthou.png" style="width:100px;margin:0 auto;display:block;"><br><b>Municipality under turkish occupation since 1974<br>
            </b>P.O.Box: 42291<br>
            6532 Larnaca<br>
            Cyprus<br>
            <b>Mayor:</b> Eleni Hadjimichael<br>
            <b>Tel.:</b> +357 24623566 , +357 24635578<br>
            <b>Fax:</b> +357 24815008<br>
            <b>Email:</b> <a href="mailto:akathou@cytanet.com.cy" target="_blank" rel="noopener noreferrer">akathou@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.akanthou.org.cy" target="_blank" rel="noopener noreferrer">http://www.akanthou.org.cy</a></p>`,
            el: `<p><img src="${imgsbase}akanthou.png" style="width:100px;margin:0 auto;display:block;"><br><b>Δήμος υπό τουρκική κατοχή από το 1974<br>
            </b>Τ.Θ.: 42291<br>
            6532 Λάρνακα<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Ελένη Χατζήμιχαηλ<br>
            <b>Τηλ.:</b> +357 24623566 , +357 24635578<br>
            <b>Φαξ</b><b>:</b> +357 24815008<br>
            <b>Email:</b> <a href="mailto:akathou@cytanet.com.cy" target="_blank" rel="noopener noreferrer">akathou@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.akanthou.org.cy" target="_blank" rel="noopener noreferrer">http://www.akanthou.org.cy</a></p>`
        },
        lefkoniko_title: {
            en: `Lefkoniko`,
            el: `Λευκόνοικο`
        },
        lefkoniko_desc: {
            en: `<p><img src="${imgsbase}lefkoniko.png" style="width:100px;margin:0 auto;display:block;"><br><b>Municipality under turkish occupation since 1974<br>
            </b>P.O.Box: 14069<br>
            2153 Aglantzia<br>
            Cyprus<br>
            <b>Mayor</b>: Zena Lysandrou-Panayides<br>
            <b>Tel.</b>: +357 22462951<br>
            <b>Fax:</b> +357 22462952<br>
            <b>Email:</b> <a href="mailto:lefkoniko@cytanet.com.cy" target="_blank" rel="noopener noreferrer">lefkoniko@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.dimoslefkonikou.org/" target="_blank" rel="noopener noreferrer">http://www.dimoslefkonikou.org/</a></p>`,
            el: `<img src="${imgsbase}lefkoniko.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Δήμος υπό τουρκική κατοχή από το 1974<br>
            </b>Τ.Θ.: 14069<br>
            2153 Αγλαντζιά<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Ζήνα Λυσάνδρου-Παναγίδη<br>
            <b>Τηλ</b><b>.:</b> +357 22462951<br>
            <b>Φαξ</b><b>:</b> +357 22462952<br>
            <b>Email:</b> <a href="mailto:lefkoniko@cytanet.com.cy" target="_blank" rel="noopener noreferrer">lefkoniko@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.dimoslefkonikou.org/" target="_blank" rel="noopener noreferrer">http://www.dimoslefkonikou.org/</a></p>`
        },
        lysi_title: {
            en: `Lysi`,
            el: `Λύση`
        },
        lysi_desc: {
            en: `<img src="${imgsbase}lysi.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Municipality under turkish occupation since 1974<br>
            </b>P.O.Box: 40297<br>
            6302 Larnaca<br>
            Cyprus<br>
            <b>Mayor:</b> Andreas Kaouris<br>
            <b>Tel.:</b> +357 24661444<br>
            <b>Fax:</b> +357 24633330<br>
            <b>Email:</b> <a href="mailto:demoslysis@cytanet.com.cy">demoslysis@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.demoslysis.com/" target="_blank" rel="noopener noreferrer">http://www.demoslysis.com/</a></p>`,
            el: `<img src="${imgsbase}lysi.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Δήμος υπό τουρκική κατοχή από το 1974<br>
            </b>Τ.Θ.: 40297<br>
            6302 Λάρνακα<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Ανδρέας Καουρής<br>
            <b>Τηλ</b><b>.:</b> +357 24661444<br>
            <b>Φαξ</b><b>:</b> +357 24633330<br>
            <b>Email:</b> <a href="mailto:demoslysis@cytanet.com.cy">demoslysis@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.demoslysis.com/" target="_blank" rel="noopener noreferrer">http://www.demoslysis.com/</a></p>`
        },
        ammochostos_title: {
            en: `Ammochostos`,
            el: `Αμμόχωστος`
        },
        ammochostos_desc: {
            en: `<p><img src="${imgsbase}ammochostos.png" style="width:100px;margin:0 auto;display:block;"><br><b>Municipality under turkish occupation since 1974<br>
            </b>P.O.Box: 51682<br>
            3507 Lemesos<br>
            Cyprus<br>
            <b>Mayor:</b> Simos Ioannou<br>
            <b>Tel.:</b> +357 25384073<br>
            <b>Fax:</b> +357 25386969<br>
            <b>Email:</b> <a href="mailto:ammochostos.famagusta.municipality@cytanet.com.cy" target="_blank" rel="noopener noreferrer">ammochostos.famagusta.municipality@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.ammochostos.org.cy" target="_blank" rel="noopener noreferrer">http://www.ammochostos.org.cy</a>, <a href="http://www.famagusta.org.cy/" target="_blank" rel="noopener noreferrer">http://www.famagusta.org.cy/</a></p>`,
            el: `<img src="${imgsbase}ammochostos.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Δήμος υπό τουρκική κατοχή από το 1974<br></b>Τ.Θ.: 51682<br>
            3507 Λεμεσός<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Σίμος Ιωάννου<br>
            <b>Τηλ</b><b>.:</b> +357 25384073<br>
            <b>Φαξ</b><b>:</b> +357 25386969<br>
            <b>Email:</b> <a href="mailto:ammochostos.famagusta.municipality@cytanet.com.cy" target="_blank" rel="noopener noreferrer">ammochostos.famagusta.municipality@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.ammochostos.org.cy" target="_blank" rel="noopener noreferrer">http://www.ammochostos.org.cy</a>, <a href="http://www.famagusta.org.cy/" target="_blank" rel="noopener noreferrer">http://www.famagusta.org.cy/</a></p>`
        },
        deryneia_title: {
            en: `Deryneia`,
            el: `Δερύνεια`
        },
        deryneia_desc: {
            en: `<img src="${imgsbase}deryneia.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 36001<br>
            5385 Deryneia<br>
            Cyprus<br>
            <b>Mayor:</b> Andros Karayiannis<br>
            <b>Tel.:</b> +357 23811000<br>
            <b>Fax:</b> +357 23825550<br>
            <b>Email:</b> <a href="mailto:deryneia.municipality@cytanet.com.cy" target="_blank" rel="noopener noreferrer">deryneia.municipality@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.deryneia.org.cy/" target="_blank" rel="noopener noreferrer">http://www.deryneia.org.cy/</a></p>`,
            el: `<img src="${imgsbase}deryneia.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 36001<br>
            5385 Δερύνεια<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Άντρος Καραγιάννης<br>
            Τ<b>ηλ</b><b>.:</b> +357 23811000<br>
            <b>Φαξ</b><b>:</b> +357 23825550<br>
            <b>Email:</b> <a href="mailto:deryneia.municipality@cytanet.com.cy" target="_blank" rel="noopener noreferrer">deryneia.municipality@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.deryneia.org.cy/" target="_blank" rel="noopener noreferrer">http://www.deryneia.org.cy/</a></p>`
        },
        paralimni_title: {
            en: `Paralimni`,
            el: `Παραλίμνι`
        },
        paralimni_desc: {
            en: `<img src="${imgsbase}paralimni.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 33033<br>
            5310 Παραλίμνι<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Θεόδωρος Πυρίλλης<br>
            <b>Τηλ</b><b>.:</b> +357 23819300<br>
            <b>Φαξ</b><b>:</b> +357 23825023<br>
            <b>Email:</b> <a href="mailto:info@paralimni.org.cy" target="_blank" rel="noopener noreferrer">info@paralimni.org.cy</a><br>
            <b>Website</b>: <a href="http://www.paralimni.org.cy" target="_blank" rel="noopener noreferrer">www.paralimni.org.cy</a></p>`,
            el: `<img src="${imgsbase}paralimni.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 33033<br>
            5310 Paralimni<br>
            Cyprus<br>
            <b>Mayor:</b> Theodoros Pyrillis<br>
            <b>Tel.:</b> +357 23819300<br>
            <b>Email:</b> <a href="mailto:info@paralimni.org.cy" target="_blank" rel="noopener noreferrer">info@paralimni.org.cy</a><br>
            <b>Website</b>: <a href="http://www.paralimni.org.cy" target="_blank" rel="noopener noreferrer">www.paralimni.org.cy</a></p>`
        },
        sotira_title: {
            en: `Sotira`,
            el: `Σωτήρα`
        },
        sotira_desc: {
            en: `<img src="${imgsbase}sotira.png" style="width:100px;margin:0 auto;display:block;"><br><p>22, Makariou III Avenue<br>
            5390 Sotira<br>
            Cyprus<br>
            <b>Mayor:</b> Georgios Takkas<br>
            <b>Tel.:</b> +357 23821568<br>
            <b>Fax:</b> +357 23825450<br>
            <b>Email:</b> <a href="mailto:municipality@sotira.org.cy" target="_blank" rel="noopener noreferrer">municipality@sotira.org.cy</a><br>
            <b>Website:</b> <a href="http://www.sotira.org.cy" target="_blank" rel="noopener noreferrer">www.sotira.org.cy</a></p>`,
            el: `<img src="${imgsbase}sotira.png" style="width:100px;margin:0 auto;display:block;"><br><p>Μακαρίου Γ’ 22<br>
            5390 Σωτήρα<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Γεώργιος Τάκκας<br>
            <b>Τηλ</b><b>.:</b> +357 23821568<br>
            <b>Φαξ</b><b>:</b> +357 23825450<br>
            <b>Email:</b> <a href="mailto:municipality@sotira.org.cy" target="_blank" rel="noopener noreferrer">municipality@sotira.org.cy</a><br>
            <b>Website:</b> <a href="http://www.sotira.org.cy" target="_blank" rel="noopener noreferrer">www.sotira.org.cy</a></p>`
        },
        agia_napa_title: {
            en: `Agia Napa`,
            el: `Αγία Νάπα`
        },
        agia_napa_desc: {
            en: `<img src="${imgsbase}agia_napa.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 30026<br>
            5340 Agia Napa<br>
            Cyprus<br>
            <b>Mayor:</b> Christos (Pieri) Zannettou<br>
            <b>Tel.:</b> +357 23 816300<br>
            <b>Fax:</b> +357 23 722607<br>
            <b>Email:</b> <a href="mailto:grammatia@agianapa.org.cy" target="_blank" rel="noopener noreferrer">grammatia@agianapa.org.cy</a><br>
            <b>Website:</b> <a href="http://www.agianapa.org.cy" target="_blank" rel="noopener noreferrer">www.agianapa.org.cy</a></p>`,
            el: `<img src="${imgsbase}agia_napa.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 30026<br>
            5340 Αγία Νάπα<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Χρίστος (Πιερή) Ζαννέττου<br>
            <b>Τηλ.:</b> +357 23 816300<br>
            <b>Φαξ</b><b>:</b> +357 23 722607<br>
            <b>Email:</b> <a href="mailto:grammatia@agianapa.org.cy" target="_blank" rel="noopener noreferrer">grammatia@agianapa.org.cy</a><br>
            <b>Website:</b> <a href="http://www.agianapa.org.cy" target="_blank" rel="noopener noreferrer">www.agianapa.org.cy</a></p>`
        },

        // Nicosia Municipalities
        kythrea_title: {
            en: `Kythrea`,
            el: `Κυθρέα`
        },
        kythrea_desc: {
            en: `<img src="${imgsbase}kythrea.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Municipality under turkish occupation since 1974<br>
            </b>Ammochostou 37<br>
            1016 Nicosia<br>
            Cyprus<br>
            <b>Mayor:</b> Dr. Petros M. Kareklas<br>
            <b>Tel.:</b> +357 22438956<br>
            <b>Fax:</b> +357 22438955<br>
            <b>Email</b>: <a href="mailto:dimoskythreas@cytanet.com.cy" target="_blank" rel="noopener noreferrer">dimoskythreas@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.kythrea.com" target="_blank" rel="noopener noreferrer">www.kythrea.com</a></p>`,
            el: `<img src="${imgsbase}kythrea.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Δήμος υπό τουρκική κατοχή από το 1974<br>
            </b>Αμμοχώστου 37<br>
            1016 Λευκωσία<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Δρ. Πέτρος Μ. Καρεκλάς<br>
            <b>Τηλ.:</b> +357 22438956<br>
            <b>Φαξ:</b> +357 22438955<br>
            <b>Email</b>: <a href="mailto:dimoskythreas@cytanet.com.cy" target="_blank" rel="noopener noreferrer">dimoskythreas@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.kythrea.com" target="_blank" rel="noopener noreferrer">www.kythrea.com</a></p>`
        },
        lefkosia_title: {
            en: `Lefkosia`,
            el: `Λευκωσία`
        },
        lefkosia_desc: {
            en: `<img src="${imgsbase}lefkosia.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 21015<br>
            1500 Lefkosia<br>
            Cyprus<br>
            <b>Mayor:</b> Konstantinos Giorkadjis<br>
            <b>Tel.:</b> +357 22797000<br>
            <b>Fax:</b> +357 22663363<br>
            <b>Email:</b> <a href="mailto:Municipality@nicosiamunicipality.org.cy" target="_blank" rel="noopener noreferrer">Municipality@nicosiamunicipality.org.cy</a><br>
            <b>Website:</b> <a href="http://www.nicosia.org.cy" target="_blank" rel="noopener noreferrer">www.nicosia.org.cy</a></p>`,
            el: `<img src="${imgsbase}lefkosia.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 21015<br>
            1500 Λευκωσία<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Κωνσταντίνος Γιωρκάτζης<br>
            <b>Τηλ.:</b> +357 22797000<br>
            <b>Φαξ:</b> +357 22663363<br>
            <b>Email:</b> <a href="mailto:Municipality@nicosiamunicipality.org.cy" target="_blank" rel="noopener noreferrer">Municipality@nicosiamunicipality.org.cy</a><br>
            <b>Website:</b> <a href="http://www.nicosia.org.cy" target="_blank" rel="noopener noreferrer">www.nicosia.org.cy</a></p>`
        },
        agios_dometios_title: {
            en: `Agios Dometios`,
            el: `Άγιος Δομέτιος`
        },
        agios_dometios_desc: {
            en: `<img src="${imgsbase}agios_dometios.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 27531<br>
            2430 Agios Dometios<br>
            Cyprus<br>
            <b>Mayor:</b> Kostas Petrou<br>
            <b>Tel.:</b> +357 22392000<br>
            <b>Fax</b>: +357 22778956<br>
            <b>Email:</b> <a href="mailto:info@dad.org.cy">info@dad.org.cy</a><br>
            <b>Website:</b> <a href="http://www.dad.org.cy/" target="_blank" rel="noopener noreferrer">http://www.dad.org.cy/</a></p>`,
            el: `<img src="${imgsbase}agios_dometios.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 27531<br>
            2430 Άγιος Δομέτιος<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Κώστας Πέτρου<br>
            <b>Τηλ.:</b> +357 22392000<br>
            <b>Φαξ:</b> +357 22778956<br>
            <b>Email:</b> <a href="mailto:info@dad.org.cy">info@dad.org.cy</a><br>
            <b>Website:</b> <a href="http://www.dad.org.cy/" target="_blank" rel="noopener noreferrer">http://www.dad.org.cy/</a></p>`
        },
        egkomi_title: {
            en: `Egkomi`,
            el: `Έγκωμη`
        },
        egkomi_desc: {
            en: `<img src="${imgsbase}egkomi.png" style="width:100px;margin:0 auto;display:block;"><br><p>3 Erexthiou St.<br>
            P.O.Box: 27504<br>
            2430 Egkomi<br>
            Cyprus<br>
            <b>Mayor:</b> Zacharias Kyriacou<br>
            <b>Tel.:</b> +357 22453800<br>
            <b>Fax:</b> +357 22352521<br>
            <b>Email:</b> <a href="mailto:info@engomi.org" target="_blank" rel="noopener noreferrer">info@engomi.org</a><br>
            <b>Website:</b> <a href="http://www.engomi.org/" target="_blank" rel="noopener noreferrer">http://www.engomi.org/</a></p>`,
            el: `<img src="${imgsbase}egkomi.png" style="width:100px;margin:0 auto;display:block;"><br><p>Ερεχθείου 3<br>
            Τ.Θ.: 27504<br>
            2430 Έγκωμη<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Ζαχαρίας Κυριάκου<br>
            <b>Τηλ.:</b> +357 22453800<br>
            <b>Φαξ:</b> +357 22352521<br>
            <b>Email:</b> <a href="mailto:info@engomi.org" target="_blank" rel="noopener noreferrer">info@engomi.org</a><br>
            <b>Website:</b> <a href="http://www.engomi.org/" target="_blank" rel="noopener noreferrer">http://www.engomi.org/</a></p>`
        },
        lakatamia_title: {
            en: `Lakatameia`,
            el: `Λακατάμεια`
        },
        lakatamia_desc: {
            en: `<img src="${imgsbase}lakatamia.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 12012<br>
            2340 Lakatameia<br>
            Cyprus<br>
            <b>Mayor:</b> Dr Photoula Hadjipapa<br>
            <b>Tel.:</b> +357 22364000<br>
            <b>Fax:</b> +357 22380688<br>
            <b>Email:</b> <a href="mailto:municipality@lakatamia.org.cy" target="_blank" rel="noopener noreferrer">municipality@lakatamia.org.cy</a><br>
            <b>Website:</b> <a href="http://www.lakatamia.org.cy" target="_blank" rel="noopener noreferrer">www.lakatamia.org.cy</a></p>`,
            el: `<img src="${imgsbase}lakatamia.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 12012<br>
            2340 Λακατάμεια<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Δρ Φωτούλα Χατζήπαπα<br>
            <b>Τηλ.:</b> +357 22364000<br>
            <b>Φαξ:</b> +357 22380688<br>
            <b>Email:</b> <a href="mailto:municipality@lakatamia.org.cy" target="_blank" rel="noopener noreferrer">municipality@lakatamia.org.cy</a><br>
            <b>Website:</b> <a href="http://www.lakatamia.org.cy" target="_blank" rel="noopener noreferrer">www.lakatamia.org.cy</a></p>`
        },
        strovolos_title: {
            en: `Strovolos`,
            el: `Στρόβολος`
        },
        strovolos_desc: {
            en: `<img src="${imgsbase}strovolos.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 28403<br>
            2094 Strovolos<br>
            Cyprus<br>
            <b>Mayor:</b> Andreas Papacharalambous<br>
            <b>Tel.</b>: +357 22470470<br>
            <b>Fax:</b> +357 22470400<br>
            <b>Email:</b> <a href="mailto:municipality@strovolos.org.cy" target="_blank" rel="noopener noreferrer">municipality@strovolos.org.cy</a><br>
            <b>Website:</b> <a href="http://www.strovolos.org.cy" target="_blank" rel="noopener noreferrer">www.strovolos.org.cy</a></p>`,
            el: `<img src="${imgsbase}strovolos.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 28403<br>
            2094 Στρόβολος<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Ανδρέας Παπαχαραλάμπους<br>
            <b>Τηλ.:</b> +357 22470470<br>
            <b>Φαξ:</b> +357 22470400<br>
            <b>Email:</b> <a href="mailto:municipality@strovolos.org.cy" target="_blank" rel="noopener noreferrer">municipality@strovolos.org.cy</a><br>
            <b>Website:</b> <a href="http://www.strovolos.org.cy" target="_blank" rel="noopener noreferrer">www.strovolos.org.cy</a></p>`
        },
        aglantzia_title: {
            en: `Aglantzia`,
            el: `Αγλαντζιά`
        },
        aglantzia_desc: {
            en: `<img src="${imgsbase}aglantzia.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 20259<br>
            2150 Aglantzia<br>
            Cyprus<br>
            <b>Mayor:</b> Andreas Konstantinou<br>
            <b>Tel.:</b> +357 22462233<br>
            <b>Fax:</b> +357 22455799<br>
            <b>Email:</b> <a href="mailto:info@aglantzia.org.cy">info@aglantzia.org.cy</a><br>
            <b>Website:</b> <a href="http://www.aglantzia.org.cy" target="_blank" rel="noopener noreferrer">www.aglantzia.org.cy</a></p>`,
            el: `<img src="${imgsbase}aglantzia.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 20259<br>
            2150 Αγλαντζιά<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Ανδρέας Κωνσταντίνου<br>
            <b>Τηλ.:</b> +357 22462233<br>
            <b>Φαξ:</b> +357 22455799<br>
            <b>Email:</b> <a href="mailto:info@aglantzia.org.cy">info@aglantzia.org.cy</a><br>
            <b>Website:</b> <a href="http://www.aglantzia.org.cy" target="_blank" rel="noopener noreferrer">www.aglantzia.org.cy</a></p>`
        },
        tseri_title: {
            en: `Tseri`,
            el: `Τσέρι`
        },
        tseri_desc: {
            en: `<img src="${imgsbase}tseri.png" style="width:100px;margin:0 auto;display:block;"><br><p>Γρ. Αυξεντίου 38-40, 1ος όροφος<br>
            2480 Τσέρι, Λευκωσία<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Σταύρος Μιχαήλ<br>
            <b>Τηλ.:</b> +357 22381744<br>
            <b>Φαξ:</b> +357 22381729<br>
            <b>Email:</b> <a href="mailto:info@tseri.org.cy" target="_blank" rel="noopener noreferrer">info@tseri.org.cy</a><br>
            <b>Website:</b> <a href="http://www.tseri.org.cy" target="_blank" rel="noopener noreferrer">www.tseri.org.cy</a></p>`,
            el: `<img src="${imgsbase}tseri.png" style="width:100px;margin:0 auto;display:block;"><br><p>38-40, Gr. Afxentiou, 1st floor<br>
            2480 Tseri, Nicosia<br>
            Cyprus<br>
            <b>Mayor:</b> Stavros Michail<br>
            <b>Tel.:</b> +357 22381744<br>
            <b>Fax:</b> +357 22381729<br>
            <b>Email:</b> <a href="mailto:info@tseri.org.cy" target="_blank" rel="noopener noreferrer">info@tseri.org.cy</a><br>
            <b>Website:</b> <a href="http://www.tseri.org.cy" target="_blank" rel="noopener noreferrer">www.tseri.org.cy</a></p>`
        },
        latsia_title: {
            en: `Latsia`,
            el: `Λατσιά`
        },
        latsia_desc: {
            en: `<img src="${imgsbase}latsia.png" style="width:100px;margin:0 auto;display:block;"><br><p>57 Yiannou Kranidiotis Ave, 2235<br>
            P.O.Box: 12540<br>
            2250 Latsia<br>
            Cyprus<br>
            <b>Mayor:</b> Christos Pittaras<br>
            <b>Tel.:</b> +357 22878688<br>
            <b>Fax:</b> +357 22487213<br>
            <b>Email:</b> <a href="mailto:latsia@latsia.org.cy" target="_blank" rel="noopener noreferrer">latsia@latsia.org.cy</a><br>
            <b>Website:</b> <a href="http://www.latsia.org.cy" target="_blank" rel="noopener noreferrer">www.latsia.org.cy</a></p>`,
            el: `<img src="${imgsbase}latsia.png" style="width:100px;margin:0 auto;display:block;"><br><p>Λεωφόρος Γιάννου Κρανιδιώτη 57<br>
            Τ.Θ.: 12540<br>
            2250 Λατσιά<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Χρίστος Πιτταράς<br>
            <b>Τηλ.:</b> +357 22878688<br>
            <b>Φαξ:</b> +357 22487213<br>
            <b>Email:</b> <a href="mailto:latsia@latsia.org.cy" target="_blank" rel="noopener noreferrer">latsia@latsia.org.cy</a><br>
            <b>Website:</b> <a href="http://www.latsia.org.cy" target="_blank" rel="noopener noreferrer">www.latsia.org.cy</a></p>`
        },
        geri_title: {
            en: `Geri`,
            el: `Γέρι`
        },
        geri_desc: {
            en: `<img src="${imgsbase}geri.png" style="width:100px;margin:0 auto;display:block;"><br><p>21, Geriou Avenue<br>
            2200 Geri, Nicosia<br>
            Cyprus<br>
            <b>Mayor:</b> Neophytos Papalazarou<br>
            <b>Tel.:</b> +357 22481755<br>
            <b>Fax:</b> +357 22480157<br>
            <b>Email:</b> <a href="mailto:info@yeri.org.cy">info@yeri.org.cy</a><br>
            <b>Website:</b> <a href="http://www.yeri.org.cy" target="_blank" rel="noopener noreferrer">www.yeri.org.cy</a></p>`,
            el: `<img src="${imgsbase}geri.png" style="width:100px;margin:0 auto;display:block;"><br><p>Λεωφόρος Γερίου 21<br>
            2200 Γέρι, Λευκωσία<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Νεόφυτος Παπαλαζάρου<br>
            <b>Τηλ.:</b> +357 22481755<br>
            <b>Φαξ:</b> +357 22480157<br>
            <b>Email:</b> <a href="mailto:info@yeri.org.cy">info@yeri.org.cy</a><br>
            <b>Website:</b> <a href="http://www.yeri.org.cy" target="_blank" rel="noopener noreferrer">www.yeri.org.cy</a></p>`
        },
        dali_title: {
            en: `Dali`,
            el: `Δάλι`
        },
        dali_desc: {
            en: `<img src="${imgsbase}dali.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 11025<br>
            2540 Dali<br>
            Cyprus<br>
            <b>Mayor:</b> Leontios Kallenos<br>
            <b>Tel.:</b> +357 22 444888<br>
            <b>Fax:</b> +357 22 444889<br>
            <b>Email:</b> <a href="mailto:main@dali.org.cy">main@dali.org.cy</a><br>
            <b>Website:</b> <a href="http://www.dali.org.cy/" target="_blank" rel="noopener noreferrer">http://www.dali.org.cy/</a></p>`,
            el: `<img src="${imgsbase}dali.png" style="width:100px;margin:0 auto;display:block;"><br><p>Γρ. Διγενή 20Α<br>
            Τ.Θ.: 11025<br>
            2540 Δάλι<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Λεόντιος Καλλένος<br>
            <b>Τηλ.:</b> +357 22 444888<br>
            <b>Φαξ:</b> +357 22 444889<br>
            <b>Email:</b> <a href="mailto:main@dali.org.cy">main@dali.org.cy</a><br>
            <b>Website:</b> <a href="http://www.dali.org.cy/" target="_blank" rel="noopener noreferrer">http://www.dali.org.cy/</a></p>`
        },
        morfou_title: {
            en: `Morfou`,
            el: `Μόρφου`
        },
        morfou_desc: {
            en: `<img src="${imgsbase}morfou.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Municipality under turkish occupation since 1974<br>
            </b>16 Zynonos Sozou<br>
            1075 Lefkosia<br>
            Cyprus<br>
            <b>Mayor:</b> Victor Hadjavraam<br>
            <b>Tel.:</b> +357 22447333, +357 22447334<br>
            <b>Fax:</b> +357 22762015<br>
            <b>Email:</b> <a href="mailto:dimosmorphou@cytanet.com.cy" target="_blank" rel="noopener noreferrer">dimosmorphou@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.morphou.org.cy" target="_blank" rel="noopener noreferrer">http://www.morphou.org.cy</a></p>`,
            el: `<img src="${imgsbase}morfou.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Δήμος υπό τουρκική κατοχή από το 1974<br>
            </b>Ζ. Σώζου 16<br>
            1075 Λευκωσία<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Βίκτωρ Χατζηαβραάμ<br>
            <b>Τηλ.:</b> +357 22447333, +357 22447334<br>
            <b>Φαξ:</b> +357 22762015<br>
            <b>Email:</b> <a href="mailto:dimosmorphou@cytanet.com.cy" target="_blank" rel="noopener noreferrer">dimosmorphou@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.morphou.org.cy" target="_blank" rel="noopener noreferrer">http://www.morphou.org.cy</a></p>`
        },

        // Keryneia Municipalities
        lapithos_title: {
            en: `Lapithos`,
            el: `Λάπηθος`
        },
        lapithos_desc: {
            en: `<img src="${imgsbase}lapithos.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Municipality under turkish occupation since 1974<br>
            </b>Prodromou 36<br>
            2063 Strovolos<br>
            Cyprus<br>
            <b>Mayor:</b> Neoptolemos Kotsapas<br>
            <b>Tel.:</b> +357 22427733<br>
            <b>Fax:</b> +357 22427731<br>
            <b>Email:</b> <a href="mailto:demos@lapithos.org.cy" target="_blank" rel="noopener noreferrer">demos@lapithos.org.cy</a><br>
            <b>Website:</b> <a href="http://www.lapithos.org.cy">www.lapithos.org.cy</a></p>`,
            el: `<img src="${imgsbase}lapithos.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Δήμος υπό τουρκική κατοχή από το 1974<br>
            </b>Προδρόμου 36<br>
            2063 Στρόβολος<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Νεοπτόλεμος Κότσαπας<br>
            <b>Τηλ.:</b> +357 22427733<br>
            <b>Φαξ:</b> +357 22427731<br>
            <b>Email:</b> <a href="mailto:demos@lapithos.org.cy">demos@lapithos.org.cy</a><br>
            <b>Website:</b> <a href="http://www.lapithos.org.cy" target="_blank" rel="noopener noreferrer">www.lapithos.org.cy</a></p>`
        },
        karavas_title: {
            en: `Karavas`,
            el: `Καραβάς`
        },
        karavas_desc: {
            en: `<img src="${imgsbase}karavas.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Municipality under turkish occupation since 1974<br>
            </b>2 Militou St.<br>
            2028 Strovolos, Nicosia<br>
            Cyprus<br>
            <b>Mayor:</b> Nicos Hadjistephanou<br>
            <b>Tel.:</b> +357 22516937<br>
            <b>Fax:</b> +357 22516941<br>
            <b>Email:</b> <a href="mailto:Karavas.municipality@cytanet.com.cy" target="_blank" rel="noopener noreferrer">Karavas.municipality@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.karavas.org.cy" target="_blank" rel="noopener noreferrer">http://www.karavas.org.cy</a></p>`,
            el: `<img src="${imgsbase}karavas.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Δήμος υπό τουρκική κατοχή από το 1974<br>
            </b>Μιλήτου 2<br>
            2028 Στρόβολος<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Νίκος Χατζηστεφάνου<br>
            <b>Τηλ.:</b> +357 22516937<br>
            <b>Φαξ:</b> +357 22516941<br>
            <b>Email:</b> <a href="mailto:Karavas.municipality@cytanet.com.cy">Karavas.municipality@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.karavas.org.cy" target="_blank" rel="noopener noreferrer">http://www.karavas.org.cy</a></p>`
        },
        keryneia_title: {
            en: `Keryneia`,
            el: `Κερύνεια`
        },
        keryneia_desc: {
            en: `<img src="${imgsbase}keryneia.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Municipality under turkish occupation since 1974<br>
            </b>8 Markou Drakou Avenue<br>
            1102 Lefkosia<br>
            Cyprus<br>
            <b>Mayor</b>: Charitini (Rita) Elisseou-Komodiki<br>
            <b>Tel.:</b> +357 22818040<br>
            <b>Fax:</b> +357 22818228<br>
            <b>Email:</b> <a href="mailto:kyreniamunicipality@cytanet.com.cy" target="_blank" rel="noopener noreferrer">kyreniamunicipality@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.kyreniamunicipality.com/" target="_blank" rel="noopener noreferrer">http://www.kyreniamunicipality.com/</a></p>`,
            el: `<img src="${imgsbase}keryneia.png" style="width:100px;margin:0 auto;display:block;"><br><p><b>Δήμος υπό τουρκική κατοχή από το 1974<br>
            </b>Λεωφ. Μάρκου Δράκου 8<br>
            1102 Λευκωσία<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Χαριτίνη (Ρίτα) Ελισσαίου-Κωμοδίκη<br>
            <b>Τηλ.:</b> +357 22818040<br>
            <b>Φαξ:</b> +357 22818228<br>
            <b>Email:</b> kyreniamunicipality@cytanet.com.cy<br>
            <b>Website:</b> <a href="http://kyreniamunicipality.com" target="_blank" rel="noopener noreferrer">http://kyreniamunicipality.com</a></p>`
        },

        // Larnaka Municipalities
        athienou_title: {
            en: `Athienou`,
            el: `Αθηένου`
        },
        athienou_desc: {
            en: `<img src="${imgsbase}athienou.png" style="width:100px;margin:0 auto;display:block;"><br><p>2 Archiepiskopou Makariou III Avenue<br>
            7600 Athienou<br>
            Cyprus<br>
            <b>Mayor:</b> Kyriacos Kareklas<br>
            <b>Tel.:</b> +357 24811370<br>
            <b>Fax:</b> +357 24522333<br>
            <b>Email</b>: <a href="mailto:mail@athienou.org.cy" target="_blank" rel="noopener noreferrer">mail@athienou.org.cy</a><br>
            <b>Website:</b> <a href="http://www.athienou.org.cy" target="_blank" rel="noopener noreferrer">www.athienou.org.cy</a></p>`,
            el: `<img src="${imgsbase}athienou.png" style="width:100px;margin:0 auto;display:block;"><br><p>Λεωφόρος Αρχιεπισκόπου Μακαρίου ΙΙΙ, 2<br>
            7600 Αθηένου<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Κυριάκος Καρεκλάς<br>
            <b>Τηλ.:</b> +357 24811370<br>
            <b>Φαξ</b><b>:</b> +357 24522333<br>
            <b>Email</b>: <a href="mailto:mail@athienou.org.cy" target="_blank" rel="noopener noreferrer">mail@athienou.org.cy</a><br>
            <b>Website:</b> <a href="http://www.athienou.org.cy" target="_blank" rel="noopener noreferrer">www.athienou.org.cy</a></p>`
        },
        aradippou_title: {
            en: `Aradippou`,
            el: `Αραδίππου`
        },
        aradippou_desc: {
            en: `<img src="${imgsbase}aradippou.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 45024<br>
            7110 Aradippou<br>
            Cyprus<br>
            <b>Mayor:</b> Evangelos Evangelides<br>
            <b>Tel.:</b> +357 24 811081<br>
            <b>Fax:</b> +357 24 811080<br>
            <b>Email:</b> <a href="mailto:municipality@aradippou.org.cy" target="_blank" rel="noopener noreferrer">municipality@aradippou.org.cy</a><br>
            <b>Website:</b> <a href="http://www.aradippou.org.cy" target="_blank" rel="noopener noreferrer">www.aradippou.org.cy</a></p>`,
            el: `<img src="${imgsbase}aradippou.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 45024<br>
            7110 Αραδίππου<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Ευάγγελος Ευαγγελίδης<br>
            <b>Τηλ</b><b>.:</b> +357 24 811081<br>
            <b>Φαξ</b><b>:</b> +357 24 811080<br>
            <b>Email:</b> <a href="mailto:municipality@aradippou.org.cy" target="_blank" rel="noopener noreferrer">municipality@aradippou.org.cy</a><br>
            <b>Website:</b> <a href="http://www.aradippou.org.cy" target="_blank" rel="noopener noreferrer">www.aradippou.org.cy</a></p>`
        },
        livadia_title: {
            en: `Livadia`,
            el: `Λιβάδια`
        },
        livadia_desc: {
            en: `<img src="${imgsbase}livadia.png" style="width:100px;margin:0 auto;display:block;"><br><p>1 Dikaiosinis Str.<br>
            7060 Livadia<br>
            Cyprus<br>
            <b>Mayor:</b> Marios Armenis<br>
            T<b>el</b>.: +357 24633388<br>
            <b>Fax:</b> +357 24635414<br>
            <b>Email:</b> <a href="mailto:demoslivadion@cytanet.com.cy" target="_blank" rel="noopener noreferrer">demoslivadion@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.livadia.org.cy/" target="_blank" rel="noopener noreferrer">http://www.livadia.org.cy/</a></p>`,
            el: `<img src="${imgsbase}livadia.png" style="width:100px;margin:0 auto;display:block;"><br><p>Δικαιοσύνης 1<br>
            7060 Λιβάδια<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Μάριος Αρμένης<br>
            <b>Τηλ</b><b>.:</b> +357 24633388<br>
            <b>Φαξ</b><b>: +</b>357 24635414<br>
            <b>Email:</b> <a href="mailto:demoslivadion@cytanet.com.cy" target="_blank" rel="noopener noreferrer">demoslivadion@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.livadia.org.cy/" target="_blank" rel="noopener noreferrer">http://www.livadia.org.cy/</a></p>`
        },
        larnaka_title: {
            en: `Larnaka`,
            el: `Λάρνακα`
        },
        larnaka_desc: {
            en: `<img src="${imgsbase}larnaka.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 40045<br>
            6300 Larnaka<br>
            Cyprus<br>
            <b>Mayor:</b> Andreas Vyras<br>
            <b>Tel.:</b> +357 24653333<br>
            <b>Fax:</b> +357 24653384<br>
            <b>Email:</b> <a href="mailto:municipality@larnaka.com">municipality@larnaka.com</a><br>
            <b>Website:</b> <a href="http://www.larnaka.com" target="_blank" rel="noopener noreferrer">www.larnaka.com</a></p>`,
            el: `<img src="${imgsbase}larnaka.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 40045<br>
            6300 Λάρνακα<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Ανδρέας Βύρας<br>
            <b>Τηλ</b><b>.:</b> +357 24653333<br>
            <b>Φαξ</b><b>:</b> +357 24653384<br>
            <b>Email:</b> <a href="mailto:municipality@larnaka.com">municipality@larnaka.com</a><br>
            <b>Website:</b> <a href="http://www.larnaka.com" target="_blank" rel="noopener noreferrer">www.larnaka.com</a></p>`
        },
        dromolaxia_meneou_title: {
            en: `Dromolaxia – Meneou`,
            el: `Δρομολαξιά – Μενεού`
        },
        dromolaxia_meneou_desc: {
            en: `<img src="${imgsbase}dromolaksia_meneou.png" style="width:100px;margin:0 auto;display:block;"><br><p>Eleftherias 10<br>
            7020 Dromolaxia, Larnaca<br>
            Cyprus<br>
            <b>Mayor:</b> Kypros Andronikou<br>
            <b>Tel.:</b> +357 24422414<br>
            <b>Fax:</b> +357 24424721<br>
            <b>Email:</b> <a href="mailto:demos.drommen@cytanet.com.cy">demos.drommen@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.dromolaxia.com.cy/" target="_blank" rel="noopener noreferrer">http://www.dromolaxia.com.cy/</a></p>`,
            el: `<img src="${imgsbase}dromolaksia_meneou.png" style="width:100px;margin:0 auto;display:block;"><br><p>Οδός Ελευθερίας 10<br>
            7020 Δρομολαξιά, Λάρνακα<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Κύπρος Ανδρονίκου<br>
            <b>Τηλ.:</b> +357 24422414<br>
            <b>Φαξ</b><b>:</b> +357 24424721<br>
            <b>Email:</b> <a href="mailto:demos.drommen@cytanet.com.cy">demos.drommen@cytanet.com.cy</a><br>
            <b>Website:</b> <a href="http://www.dromolaxia.com.cy/" target="_blank" rel="noopener noreferrer">http://www.dromolaxia.com.cy/</a></p>`
        },
        pano_lefkara_title: {
            en: `Pano Lefkara`,
            el: `Πάνω Λεύκαρα`
        },
        pano_lefkara_desc: {
            en: `<img src="${imgsbase}pano_lefkara.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 46005<br>
            7705 Pano Lefkara<br>
            Cyprus<br>
            <b>Mayor:</b> Sofoklis Sofokleous<br>
            <b>Tel.:</b> +357 24342422<br>
            <b>Fax:</b> +357 24342769<br>
            <b>Email:</b> <a href="mailto:info@lefkara.org.cy" target="_blank" rel="noopener noreferrer">info@lefkara.org.cy</a><br>
            <b>Website:</b> <a href="http://www.lefkara.org.cy" target="_blank" rel="noopener noreferrer">www.lefkara.org.cy</a></p>`,
            el: `<img src="${imgsbase}pano_lefkara.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 46005<br>
            7705 Πάνω Λεύκαρα<br>
            Κύπρος<br>
            <b>Δήμαρχος:</b> Σοφοκλής Σοφοκλέους<br>
            <b>Τηλ.:</b> +357 24342422<br>
            <b>Φαξ</b><b>:</b> +357 24342769<br>
            <b>Email:</b> <a href="mailto:info@lefkara.org.cy" target="_blank" rel="noopener noreferrer">info@lefkara.org.cy</a><br>
            <b>Website:</b> <a href="http://www.lefkara.org.cy" target="_blank" rel="noopener noreferrer">www.lefkara.org.cy</a></p>`
        },

        // Limassol Municipalities
        germasogeia_title: {
            en: `Germasogeia`,
            el: `Γερμασόγεια`
        },
        germasogeia_desc: {
            en: `<img src="${imgsbase}germasogia.png" style="width:100px;margin:0 auto;display:block;"><br><p>39 Agias Paraskevis Str.<br>
            P.O.Box: 4044<br>
            Lemesos, Cyprus<br>
            <strong>Mayor:</strong> Kyriakos Xidias<br>
            <strong>Tel.:</strong> +357 25879898, +357 25879899<br>
            <strong>Fax:</strong> +357 25873434<br>
            <strong>Email:</strong> <a href="mailto:yermasoyia.municipality@cytanet.com.cy" target="_blank" rel="noopener noreferrer">yermasoyia.municipality@cytanet.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.yermasoyiamunicipality.org.cy" target="_blank" rel="noopener noreferrer">www.yermasoyiamunicipality.org.cy</a></p>`,
            el: `<img src="${imgsbase}germasogia.png" style="width:100px;margin:0 auto;display:block;"><br><p>Αγίας Παρασκευής 39<br>
            Τ.Θ.: 4044<br>
            Λεμεσός, Κύπρος<br>
            <strong>Δήμαρχος:</strong> Κυριάκος Ξυδιάς<br>
            <strong>Τηλ.:</strong> +357 25879898, +357 25879899<br>
            <strong>Φαξ</strong><strong>:</strong> +357 25873434<br>
            <strong>Email:</strong> <a href="mailto:yermasoyia.municipality@cytanet.com.cy" target="_blank" rel="noopener noreferrer">yermasoyia.municipality@cytanet.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.yermasoyiamunicipality.org.cy" target="_blank" rel="noopener noreferrer">www.yermasoyiamunicipality.org.cy</a></p>`
        },
        agios_athanasios_title: {
            en: `Agios Athanasios`,
            el: `Άγιος Αθανάσιος`
        },
        agios_athanasios_desc: {
            en: `<img src="${imgsbase}agios_athanasios.png" style="width:100px;margin:0 auto;display:block;"><br><p>42 Stavraetou Machera Str.<br>
            4104 Agios Athanasios<br>
            Cyprus<br>
            <strong>Mayor:</strong> Marinos Kyriakou<br>
            <strong>Tel.:</strong> +357 25724135<br>
            <strong>Fax:</strong> +357 25725010<br>
            <strong>Email:</strong> <a href="mailto:demos.agios.athanasios@cytanet.com.cy" target="_blank" rel="noopener noreferrer">demos.agios.athanasios@cytanet.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.agiosathanasios.org.cy" target="_blank" rel="noopener noreferrer">www.agiosathanasios.org.cy</a></p>`,
            el: `<img src="${imgsbase}agios_athanasios.png" style="width:100px;margin:0 auto;display:block;"><br><p>Σταυραετού του Μαχαιρά 42<br>
            4104 Άγιος Αθανάσιος<br>
            Κύπρος<br>
            <strong>Δήμαρχος:</strong> Μαρίνος Κυριάκου<br>
            <strong>Τηλ.:</strong> +357 25724135<br>
            <strong>Φαξ:</strong> +357 25725010<br>
            <strong>Email:</strong> <a href="mailto:demos.agios.athanasios@cytanet.com.cy" target="_blank" rel="noopener noreferrer">demos.agios.athanasios@cytanet.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.agiosathanasios.org.cy" target="_blank" rel="noopener noreferrer">www.agiosathanasios.org.cy</a></p>`
        },
        mesa_geitonia_title: {
            en: `Mesa Geitonia`,
            el: `Μέσα Γειτονιά`
        },
        mesa_geitonia_desc: {
            en: `<img src="${imgsbase}mesa_geitonia.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 59596<br>
            4010 Lemesos<br>
            Cyprus<br>
            <strong>Mayor:</strong> Doros Antoniou<br>
            <strong>Tel.:</strong> +357 25723597<br>
            <strong>Fax:</strong> +357 25723744<br>
            <strong>Email:</strong> <a href="mailto:info@mesayitonia.com.cy" target="_blank" rel="noopener noreferrer">info@mesayitonia.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.mesayitonia.com.cy" target="_blank" rel="noopener noreferrer">www.mesayitonia.com.cy</a></p>`,
            el: `<img src="${imgsbase}mesa_geitonia.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 59596<br>
            4010 Λεμεσός<br>
            Κύπρος<br>
            <strong>Δήμαρχος</strong>: Δώρος Αντωνίου<br>
            <strong>Τηλ.:</strong> +357 25723597<br>
            <strong>Φαξ:</strong> +357 25723744<br>
            <strong>Email:</strong> <a href="mailto:info@mesayitonia.com.cy" target="_blank" rel="noopener noreferrer">info@mesayitonia.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.mesayitonia.com.cy" target="_blank" rel="noopener noreferrer">www.mesayitonia.com.cy</a></p>`
        },
        lemesos_title: {
            en: `Lemesos`,
            el: `Λεμεσός`
        },
        lemesos_desc: {
            en: `<img src="${imgsbase}lemesos.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 50089<br>
            3600 Lemesos<br>
            Cyprus<br>
            <strong>Mayor:</strong> Nicos Nicolaides<br>
            <strong>Tel.:</strong> +357 25884300<br>
            <strong>Fax:</strong> +357 25365497<br>
            <strong>Email:</strong> <a href="mailto:admin@limassolmunicipal.com.cy">admin@limassolmunicipal.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.limassolmunicipal.com.cy" target="_blank" rel="noopener noreferrer">www.limassolmunicipal.com.cy</a></p>`,
            el: `<img src="${imgsbase}lemesos.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 50089<br>
            3600 Λεμεσός<br>
            Κύπρος<br>
            <strong>Δήμαρχος:</strong> Νίκος Νικολαΐδης<br>
            <strong>Τηλ</strong><strong>.:</strong> +357 25884300<br>
            <strong>Φαξ</strong><strong>:</strong> +357 25365497<br>
            <strong>Email:</strong> <a href="mailto:admin@limassolmunicipal.com.cy">admin@limassolmunicipal.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.limassolmunicipal.com.cy" target="_blank" rel="noopener noreferrer">www.limassolmunicipal.com.cy</a></p>`
        },
        kato_polemidia_title: {
            en: `Kato Polemidia`,
            el: `Κάτω Πολεμίδια`
        },
        kato_polemidia_desc: {
            en: `<img src="${imgsbase}kato_polemidia.png" style="width:100px;margin:0 auto;display:block;"><br><p>128 Panayias Evagelistrias Str.<br>
            4156 Kato Polemidia<br>
            Cyprus<br>
            <strong>Mayor:</strong> Nikos Anastasiou<br>
            <strong>Tel.:</strong> +357 25821382<br>
            <strong>Fax:</strong> +357 25395632<br>
            <strong>Email:</strong> <a href="mailto:polemidiamunicipal@cytanet.com.cy" target="_blank" rel="noopener noreferrer">polemidiamunicipal@cytanet.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.polemidiamunicipal.com.cy" target="_blank" rel="noopener noreferrer">www.polemidiamunicipal.com.cy</a></p>`,
            el: `<img src="${imgsbase}kato_polemidia.png" style="width:100px;margin:0 auto;display:block;"><br><p>Παναγίας Ευαγγελίστριας 128<br>
            4156 Κάτω Πολεμίδια<br>
            Κύπρος<br>
            <strong>Δήμαρχος:</strong> Νίκος Αναστασίου<br>
            <strong>Τηλ.:</strong> +357 25821382<br>
            <strong>Φαξ</strong><strong>:</strong> +357 25395632<br>
            <strong>Email:</strong> <a href="mailto:polemidiamunicipal@cytanet.com.cy" target="_blank" rel="noopener noreferrer">polemidiamunicipal@cytanet.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.polemidiamunicipal.com.cy" target="_blank" rel="noopener noreferrer">www.polemidiamunicipal.com.cy</a></p>`
        },
        ypsonas_title: {
            en: `Ypsonas`,
            el: `Ύψωνας`
        },
        ypsonas_desc: {
            en: `<img src="${imgsbase}ypsonas.png" style="width:100px;margin:0 auto;display:block;"><br><p>120, Archiepiskopou Makariou III Avenue<br>
            4182 Ypsonas, Lemesos<br>
            Cyprus<br>
            <strong>Mayor:</strong> Pantelis Georgiou<br>
            <strong>Tel.:</strong> +357 25395600<br>
            <strong>Fax:</strong> +357 25392595<br>
            <strong>Email:</strong> <a href="mailto:demosipsona@cytanet.com.cy" target="_blank" rel="noopener noreferrer">demosipsona@cytanet.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.ipsonas.org/" target="_blank" rel="noopener noreferrer">http://www.ipsonas.org/</a></p>`,
            el: `<img src="${imgsbase}ypsonas.png" style="width:100px;margin:0 auto;display:block;"><br><p>Μακαρίου Γ΄ 120<br>
            4182 Ύψωνας<br>
            Κύπρος<br>
            <strong>Δήμαρχος:</strong> Παντελής Γεωργίου<br>
            <strong>Τηλ</strong><strong>.:</strong> +357 25395600<br>
            <strong>Φαξ</strong><strong>:</strong> +357 25392595<br>
            <strong>Email:</strong> <a href="mailto:demosipsona@cytanet.com.cy" target="_blank" rel="noopener noreferrer">demosipsona@cytanet.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.ipsonas.org/" target="_blank" rel="noopener noreferrer">http://www.ipsonas.org/</a></p>`
        },

        // Paphos Municipalities
        poli_chrysochous_title: {
            en: `Polis (Chrysochou)`,
            el: `Πόλις (Χρυσοχού)`
        },
        poli_chrysochous_desc: {
            en: `<img src="${imgsbase}polis_chrysoxou.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 66019<br>
            8830 Polis (Chrysochous)<br>
            Cyprus<br>
            <strong>Mayor:</strong> Yiotis Papachristophi<br>
            <strong>Tel.:</strong> +357 26321321<br>
            <strong>Fax:</strong> +357 26322278<br>
            <strong>Email:</strong> <a href="mailto:polismunicipality@cytanet.com.cy" target="_blank" rel="noopener noreferrer">polismunicipality@cytanet.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.polis-municipality-cyprus.com" target="_blank" rel="noopener noreferrer">www.polis-municipality-cyprus.com</a></p>`,
            el: `<img src="${imgsbase}polis_chrysoxou.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 66019<br>
            8830 Πόλης Χρυσοχούς<br>
            Κύπρος<br>
            <strong>Δήμαρχος:</strong> Γιώτης Παπαχριστοφή<br>
            <strong>Τηλ.:</strong> +357 26321321<br>
            <strong>Φαξ:</strong> +357 26322278<br>
            <strong>Email:</strong> <a href="mailto:polismunicipality@cytanet.com.cy" target="_blank" rel="noopener noreferrer">polismunicipality@cytanet.com.cy</a><br>
            <strong>Website:</strong> <a href="http://www.polis-municipality-cyprus.com" target="_blank" rel="noopener noreferrer">www.polis-municipality-cyprus.com</a></p>`
        },
        pegia_title: {
            en: `Pegeia`,
            el: `Πέγεια`
        },
        pegia_desc: {
            en: `<img src="${imgsbase}pegeia.png" style="width:100px;margin:0 auto;display:block;"><br><p>Platia Vrisis ton Peyiotisson<br>
            8560 Pegeia<br>
            Cyprus<br>
            <strong>Mayor:</strong> Marinos Lambrou<br>
            <strong>Tel.:</strong> +357 26621244<br>
            <strong>Fax:</strong> +357 26621571<br>
            <strong>Email:</strong> <a href="mailto:info@pegeiamunicipality.com" target="_blank" rel="noopener noreferrer">info@pegeiamunicipality.com</a><br>
            <strong>Website:</strong> <a href="http://www.pegeiamunicipality.com" target="_blank" rel="noopener noreferrer">www.pegeiamunicipality.com</a></p>`,
            el: `<img src="${imgsbase}pegeia.png" style="width:100px;margin:0 auto;display:block;"><br><p>Πλατεία Βρύσης των Πεγειώτισσων<br>
            8560 Πέγεια<br>
            Κύπρος<br>
            <strong>Δήμαρχος:</strong> Μαρίνος Λάμπρου<br>
            <strong>Τηλ.:</strong> +357 26621113<br>
            <strong>Φαξ:</strong> +357 26621571<br>
            <strong>Email:</strong> <a href="mailto:info@pegeiamunicipality.com" target="_blank" rel="noopener noreferrer">info@pegeiamunicipality.com</a><br>
            <strong>Website:</strong> <a href="http://www.pegeiamunicipality.com" target="_blank" rel="noopener noreferrer">www.pegeiamunicipality.com</a></p>`
        },
        paphos_title: {
            en: `Pafos`,
            el: `Πάφος`
        },
        paphos_desc: {
            en: `<img src="${imgsbase}paphos.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 60032<br>
            8100 Pafos<br>
            Cyprus<br>
            <strong>Mayor:</strong> Fedonas Fedonos<br>
            <strong>Tel.:</strong> +357 26822270<br>
            <strong>Fax:</strong> +357 26934762<br>
            <strong>Email:</strong> <a href="mailto:town.hall@pafos.org.cy" target="_blank" rel="noopener noreferrer">town.hall@pafos.org.cy</a><br>
            <strong>Website:</strong> <a href="http://www.pafos.org.cy" target="_blank" rel="noopener noreferrer">http://www.pafos.org.cy</a></p>`,
            el: `<img src="${imgsbase}paphos.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 60032<br>
            8100 Πάφος<br>
            Κύπρος<br>
            <strong>Δήμαρχος:</strong> Φαίδωνας Φαίδωνος<br>
            <strong>Τηλ.:</strong> +357 26822270<br>
            <strong>Φαξ:</strong> +357 26934762<br>
            <strong>Email:</strong> <a href="mailto:town.hall@pafos.org.cy" target="_blank" rel="noopener noreferrer">town.hall@pafos.org.cy</a><br>
            <strong>Website:</strong> <a href="http://www.pafos.org.cy" target="_blank" rel="noopener noreferrer">http://www.pafos.org.cy</a></p>`
        },
        geroskipou_title: {
            en: `Geroskipou`,
            el: `Γεροσκήπου`
        },
        geroskipou_desc: {
            en: `<img src="${imgsbase}geroskipou.png" style="width:100px;margin:0 auto;display:block;"><br><p>P.O.Box: 63015<br>
            8210 Geroskipou<br>
            Cyprus<br>
            <strong>Mayor:</strong> Michalis Pavlides<br>
            <strong>Tel.:</strong> +357 26962324<br>
            <strong>Fax:</strong> +357 26961247<br>
            <strong>Email:</strong> <a href="mailto:info@geroskipou-municipality.com" target="_blank" rel="noopener noreferrer">info@geroskipou-municipality.com</a><br>
            <strong>Website:</strong> <a href="http://www.geroskipou-municipality.com" target="_blank" rel="noopener noreferrer">www.geroskipou-municipality.com</a></p>`,
            el: `<img src="${imgsbase}geroskipou.png" style="width:100px;margin:0 auto;display:block;"><br><p>Τ.Θ.: 63015<br>
            8210 Γεροσκήπου<br>
            Κύπρος<br>
            <strong>Δήμαρχος:</strong> Μιχάλης Παυλίδης<br>
            <strong>Τηλ.:</strong> +357 26962324<br>
            <strong>Φαξ:</strong> +357 26961247<br>
            <strong>Email:</strong> <a href="mailto:info@geroskipou-municipality.com" target="_blank" rel="noopener noreferrer">info@geroskipou-municipality.com</a><br>
            <strong>Website:</strong> <a href="http://www.geroskipou-municipality.com" target="_blank" rel="noopener noreferrer">www.geroskipou-municipality.com</a></p>`
        },

    };

    var detectlocale = function(){
        var l = document.querySelector('html').attributes.lang;
        if (l !== 'undefined' && l !== undefined) {
            l = l.value;
            if (l.indexOf('en') > -1) return 'en';
            if (l.indexOf('el') > -1) return 'el';
            return 'en';
        }
        return 'en';
    }

    var translate = function(k, locale){
        if ( typeof locale === 'undefined' || locale === undefined ){
            locale = detectlocale();
        }
        if ( t.hasOwnProperty(k) ){
            return t[k][locale];
        } else {
            return k;
        }
    }

    return {
        detectlocale: detectlocale,
        translate: translate
    }

})(__mb_i18n_conf);