# Autonoms Orb Widget (WordPress)

This folder generates a **single, WordPress-friendly** JS file that renders the exact Autonoms Orb shader (copied from `src/components/Orb.jsx`) into a DOM element.

## Build

From this folder:

```bash
npm install
npm run build
```

Output:
- `dist/orb-widget.js`

## Use in Elementor + WPCode

1) In Elementor, add an HTML widget:

```html
<div id="autonoms-orb" style="width:100%; height:620px;"></div>
```

2) Upload `dist/orb-widget.js` to WordPress Media Library and copy its URL.

3) In WPCode, add (Footer):

```html
<script src="YOUR_UPLOADED_URL/orb-widget.js" defer></script>
```

### Programmatic mount (optional)

The build exposes `window.AutonomsOrb.mount(...)`.

```html
<script>
  window.addEventListener("DOMContentLoaded", () => {
    window.AutonomsOrb?.mount("#autonoms-orb", {
      hue: 60,
      hoverIntensity: 0.1,
      rotateOnHover: true,
      forceHoverState: false,
      backgroundColor: "#000000"
    });
  });
</script>
```

