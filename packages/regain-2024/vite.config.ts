import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		port: 3000,
		host: '0.0.0.0',
		strictPort: true
	},
	plugins: [sveltekit()]
});
