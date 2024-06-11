import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {}
});

window.LOG_LEVEL = 'DEBUG';

export default app;