declare module '@capacitor/geolocation' {
	interface GeolocationPlugin {
		getCurrentPosition(): Promise<GeolocationPosition>;
	}

	const Geolocation: GeolocationPlugin;
	export { Geolocation };
}
