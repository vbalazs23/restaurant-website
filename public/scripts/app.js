
  $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        });
    });  

const nav = document.querySelector('.navbar');
    
        document.querySelector('.navbar-toggler').addEventListener('click', function () {
            if (!nav.classList.contains('scrolled') && window.scrollY < nav.offsetHeight) {
                nav.classList.add('scrolled');
            } else if (nav.classList.contains('scrolled') && window.scrollY < nav.offsetHeight) {
                nav.classList.remove('scrolled');
            }
        })
    

document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.about').classList.remove('fade-in','from-right');
        document.querySelector('.pre-menu').removeAttribute('data-aos');
        document.querySelector('.menu').removeAttribute('data-aos');
        document.querySelector('.info').classList.remove('fade-in','from-left');

    })

})

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/vbalazs23/ckzk0pk1d00ds14l9mawekkqe', // style URL
center: [20.657507209798503, 46.556436518071905], // starting position [lng, lat] 
zoom: 15, // starting zoom
pitch: 45,
bearing: -17.6,
container: 'map',
antialias: true
});



map.on('load', () => {
    // Insert the layer beneath any symbol layer.
    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
    (layer) => layer.type === 'symbol' && layer.layout['text-field']
    ).id;
     
    // The 'building' layer in the Mapbox Streets
    // vector tileset contains building height data
    // from OpenStreetMap.
    map.addLayer(
    {
    'id': 'add-3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
    'fill-extrusion-color': '#cc6300',
     
    // Use an 'interpolate' expression to
    // add a smooth transition effect to
    // the buildings as the user zooms in.
    'fill-extrusion-height': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'height']
    ],
    'fill-extrusion-base': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'min_height']
    ],
    'fill-extrusion-opacity': 0.6
    }
    },
    labelLayerId
    );
    });

const popup = new mapboxgl.Popup({closeOnClick: false, closeButton: false, className: 'map-popup'})
.setHTML('<div class="map-popup-text"><h1>FŐNIX PIZZÉRIA</h1><p>RANDOM utca 3, Random 9999</p><div class="map-popup-hidden"><p>HÉTFŐ - SZOMBAT:11:00 - 22:00<br>VASÁRNAP:16:00 - 22:00<br>06 00/555 XXX<br>+36 00/555 XX XX</p></div></div>')
    .addTo(map);

const marker = new mapboxgl.Marker({
    color: "#cc6300",
    draggable: false,
    scale: 1.5
}).setLngLat([20.657507209798503, 46.556436518071905])
    .setPopup(popup)
    .addTo(map)
    .togglePopup();
    


