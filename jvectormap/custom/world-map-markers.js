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
			}],
		},
		backgroundColor: 'transparent',
		markers: [
			{latLng: [22.31, 114.16]},
			{latLng: [23.69, 80.66]},
			{latLng: [39.55, 116.25]},
			{latLng: [25.33, 89.54]},
			{latLng: [30.17, 71.41]},
			{latLng: [13.75, 100.50]},
			{latLng: [14.05, 108.27]},
			{latLng: [38.96, 35.24]},
			{latLng: [31.16, 36.83]},
			{latLng: [47.41, 28.36]},
			{latLng: [23.63, -102.55]},
			
		],
		onRegionTipShow: function(event, label, code) {
            // This function is called when hovering over a country.
            // Set an empty string to hide the country name tooltip.
            label.html('');
        }
	});
});
