<script lang="ts">
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import { Geolocation } from '@capacitor/geolocation';
	import { parseCSV } from '$lib/csvUtils';
	import LocatorButton from './locatorButton.svelte';

	let loc: GeolocationPosition;
	let friends: any = [];
	let map: any;
	let userMarker: any;

	// Get User Postion
	async function getCurrentPosition() {
		try {
			const res = await Geolocation.getCurrentPosition();
			loc = res;
		} catch (error) {
			console.error('Error getting location:', error);
		}
	}

	// Get Friend Positions
	async function loadFriendLocations() {
		try {
			friends = await parseCSV('src/lib/data/friendLocations.csv');
		} catch (error) {
			console.error('Error loading friend locations:', error);
		}
	}

	// define this as a global function which can be accessed anywhere in the Map.svelte component
	function flyToCurrentPosition(time: number, currentZoom: number, sameLocation: boolean) {
		if (loc) {
			let newZoom: number = currentZoom;
			if (sameLocation) {
				newZoom = currentZoom + 1;
			}

			map.flyTo({
				center: [loc.coords.longitude, loc.coords.latitude],
				zoom: newZoom,
				pitch: 0,
				duration: time,
				bearing: 0
			});
		}
	}
	// On mount, make map
	onMount(() => {
		mapboxgl.accessToken =
			'pk.eyJ1IjoiYWltYTc5MTciLCJhIjoiY2xxdGkzNzMyNTMzaTJqbm1zeHJkaXlpeiJ9.tYKBJ6Ekn4KKunlpW-9Ukg';

		map = new mapboxgl.Map({
			container: 'map',
			projection: 'globe',
			center: [0, 0], // Set initial center
			zoom: 1, // Set initial zoom level
			pitch: 45,
			bearing: 0,
			logoPosition: 'top-left',
			attributionControl: false
		});

		map.getCanvasContainer().style.zIndex = 1000;
		map.addControl(new mapboxgl.AttributionControl(), 'top-right');

		async function addMarkers() {
			if (!loc) return;
			// Create a new marker.
			userMarker = new mapboxgl.Marker({ color: '#FFFFFF' })
				.setLngLat([loc.coords.longitude, loc.coords.latitude])
				.addTo(map);
			await loadFriendLocations();

			friends.forEach((friend: any) => {
				const { latitude, longitude, bestFriend } = friend;
				const color = bestFriend === '1' ? '#FF0000' : '#0000FF';

				new mapboxgl.Marker({ color })
					.setLngLat([parseFloat(longitude), parseFloat(latitude)])
					.addTo(map);
			});
		}

		map.on('style.load', () => {
			map.setFog({
				color: 'rgb(25, 29, 39)', // Lower atmosphere
				'high-color': 'rgb(5, 5, 25)', // Upper atmosphere
				'horizon-blend': 0.05, // Atmosphere thickness (default 0.2 at low zooms)
				'space-color': 'rgb(0, 0, 0)', // Background color
				'star-intensity': 0.2 // Background star brightness (default 0.35 at low zoooms )
			});
			//map.setConfigProperty('basemap', 'showLabels', true);
		});

		map.on('flystart', () => {
			map.interactive = false;
		});

		map.on('flyend', () => {
			map.interactive = true;
		});

		map.setStyle('mapbox://styles/mapbox/dark-v10');

		// On mount, get user position and then fly to it
		getCurrentPosition().then(() => {
			addMarkers();
			flyToCurrentPosition(4000, 2, false);
			userMarker.setLngLat([loc.coords.longitude, loc.coords.latitude]);
		});

		return () => {
			map.remove();
		};
	});
</script>

<div id="map">
	<LocatorButton
		onClick={() => {
			getCurrentPosition().then(() => {
				let CurrentZoom = map.getZoom();
				let CenterCoordinates = map.getCenter();
				let sameLoc =
					loc.coords.latitude.toFixed(2) == CenterCoordinates.lat.toFixed(2) &&
					loc.coords.longitude.toFixed(2) == CenterCoordinates.lng.toFixed(2);
				flyToCurrentPosition(1000, CurrentZoom, sameLoc);
				userMarker.setLngLat([loc.coords.longitude, loc.coords.latitude]);
			});
		}}
	/>
</div>

<style>
	#map {
		position: absolute;
		height: calc(100%);
		width: 100%;
		left: 0%;
		top: 0%;
		z-index: 0;
		overflow-y: hidden;
	}
</style>
