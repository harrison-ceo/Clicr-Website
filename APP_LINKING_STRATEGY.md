
# 🔗 V4 App Linking Strategy

**Status: PENDING (Do Not Implement Yet)**

Currently, the marketing site (`clicr.co`) and the V4 app (`app.clicr.co`) are completely isolated. The marketing site uses a placeholder page (`/login`) to inform users about the upcoming V4 release.

## 🟢 When V4 is Ready to Launch

Execute this **single** controlled change to link the marketing site to the live V4 app.

### 1. Update Navigation (`src/components/ui/Navbar.tsx`)

Change the "Log In" button `href`:

**FROM:**
```tsx
<Link href="/login" ... >Log In</Link>
```

**TO:**
```tsx
<Link href="https://app.clicr.co/login" ... >Log In</Link>
```

### 2. Update CTA Buttons (`src/components/sections/Hero.tsx` & `CTA.tsx`)

Change "Get Started" buttons `href`:

**FROM:**
```tsx
<Link href="https://apps.apple.com/..." ... >Download on App Store</Link>
```
*Note: You may want to keep "Download App" as a secondary option, but the primary "Get Started" web flow usually points to web signup.*

**TO:**
```tsx
<Link href="https://app.clicr.co/signup" ... >Get Started on Web</Link>
```

### 3. Deprecate Placeholder

Delete `src/app/login/page.tsx` as it will no longer be reachable or needed.

---
**Verification:**
After linking, ensure `app.clicr.co` is live and handling auth correctly before merging this change to marketing `main`.
