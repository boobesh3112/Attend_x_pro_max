# Deployment Guide

## Quick Deploy

### Deploy to Vercel (Recommended)

1. Visit https://vercel.com/new
2. Import this repository
3. Vercel will automatically detect the configuration from `vercel.json`
4. Click "Deploy"

**Configuration is automatic!** The `vercel.json` file contains all necessary settings.

### Deploy to Netlify

1. Visit https://app.netlify.com/start
2. Connect your repository
3. Netlify will automatically detect the configuration from `netlify.toml`
4. Click "Deploy site"

**Configuration is automatic!** The `netlify.toml` file contains all necessary settings.

---

## Manual Build

```bash
# Install dependencies
pnpm install

# Build for production
pnpm run build

# Preview the production build
pnpm run preview
```

Build output: `dist/` directory

---

## Performance

✅ Initial bundle: 796 KB (gzipped: 202 KB)
✅ 58% smaller than before optimization
✅ Lazy loading for all app pages
✅ Asset caching configured (1 year)

---

## Deployment Status

**Vercel:** ✅ READY
**Netlify:** ✅ READY

Choose your platform and deploy!
