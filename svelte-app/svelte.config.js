import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter() 
		/*,vite: {
			optimizeDeps: {
			  include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
			}
 			// plugins: []
		} */
	}
};

export default config;
