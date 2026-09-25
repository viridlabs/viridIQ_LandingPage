# ViridIQ

Astro preview of the ViridIQ site. This address is for review. It is not the live domain.

Preview: https://viridlabs.github.io/viridIQ_LandingPage/

[www.viridiq.com](https://www.viridiq.com) stays on Framer. This repository must not contain a `CNAME` file. Publishing one would make GitHub Pages claim `www.viridiq.com`.

When the site is ready to replace Framer, add a `CNAME` containing `www.viridiq.com` to the published output and point DNS at GitHub Pages. Change `site` to `https://www.viridiq.com` and `base` to `/` in `astro.config.mjs` at the same time.

## Local check

```sh
npm install
npm run build
npm run preview
```
