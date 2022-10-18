export function load({ fetch }) {
	const fetchResult = fetch('/hifi-server').then((response) => response.json());
	return { fetchResult };
}
