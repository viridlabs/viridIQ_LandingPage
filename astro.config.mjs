// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Preview only. www.viridiq.com stays on Framer until a deliberate cutover.
export default defineConfig({
  site: 'https://viridlabs.github.io',
  base: '/viridIQ_LandingPage',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});
