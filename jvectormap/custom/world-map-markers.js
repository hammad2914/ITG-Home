// Markers on the world map
$(function(){
	$('#world-map-markers').vectorMap({
		map: 'world_mill_en',
		normalizeFunction: 'polynomial',
		hoverOpacity: 0.5,
		hoverColor: false,
		zoomOnScroll: false,
		markerStyle: {
			initial: {
				fill: '#03045e',
				stroke: '#FFFFFF',
				r: 4,
			},
		},
		zoomMin: 1,
		hoverColor: true,
		series: {
			regions: [{
				values: gdpData,
				scale: ['#0077b6', '#ade8f4'],
				normalizeFunction: 'polynomial'
			}]
		},
		backgroundColor: 'transparent',
		markers: [
			{latLng: [22.31, 114.16], name: 'Hong Kong Team Trade'},
			{latLng: [22.51, 112.16], name: 'OVM'},
			{latLng: [23.81, 117.16], name: 'Wunsche'},
			{latLng: [23.69, 80.66], name: 'Texlymx'},
			{latLng: [19.07, 73.37], name: 'Supplychain, India'},
			{latLng: [39.55, 116.25], name: 'OVM'},
			{latLng: [25.33, 89.54], name: 'Euro Centra Bangladesh'},
			{latLng: [23.77, 89.87], name: 'Supplychain, Bnagladesh'},
			{latLng: [25.26, 67.00], name: 'Euro Centra Pakistan'},
			{latLng: [25.52, 62.32], name: 'M5 Groupe'},
			{latLng: [31.54, 74.04], name: 'ARP'},
			{latLng: [30.17, 71.41], name: 'TLS'},
			{latLng: [33.68, 71.55], name: 'Supplychain, Pakistan'},
			
		],
		onRegionTipShow: function(event, label, code) {
            // This function is called when hovering over a country.
            // Set an empty string to hide the country name tooltip.
            label.html('');
        }
	});
});