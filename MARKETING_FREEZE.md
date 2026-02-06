
# ❄️ MARKETING SITE FREEZE

**Status: FROZEN**
**Effective Date: 2026-02-06**

This repository (`vacant-intergalactic`) is currently **FROZEN** to protect the public-facing marketing site while major V4.0 work happens on the application side.

## 🚫 Rules of Engagement

1.  **NO Changes to Logic:** Do not touch routing, auth flows, or core components.
2.  **NO Changes to UI:** Branding, layout, and copy are locked.
3.  **NO Inter-Dependencies:** This separate marketing site must NOT attempt to import, reference, or share code with the V4 app repo (`glacial-feynman`).
4.  **Content Fixes ONLY:** Typo fixes or critical asset swaps are allowed but require "MARKETING_APPROVED" sign-off.

## 🔗 How to Connect to V4 App (When Ready)

See `APP_LINKING_STRATEGY.md` for the specific single-step procedure to link this site to the V4 app.

## 🚀 Deployment

- **Production Domain:** `clicr.co`
- **Branch:** `main`
- **Env Vars:** Does NOT require Supabase service keys. Independent.

DO NOT DEPLOY V4 APP CODE TO THIS PROJECT.
