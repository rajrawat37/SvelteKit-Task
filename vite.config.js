import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
export default {
	plugins: [sveltekit()],
	server: {
		host:true,
		fs: {
			strict: false,
			allow: [".."],
		}
	}
};
