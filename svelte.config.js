import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter()
  }
};

export default config; 