# Paintseidon — Website

A Greek-temple themed one-page website for Paintseidon, a painting and
decorating business serving the Fargo/Moorhead area. Plain HTML/CSS/JS, so
it can be hosted for free on **GitHub Pages** with nothing to configure.

The quote form doesn't use a server — it opens the visitor's own email app
with their details pre-filled, addressed to the business email.

## Business details currently in the site

| Detail | Value |
|---|---|
| Phone | (701) 970-9115 (`tel:+17019709115`) |
| Email | paintseidonllc@gmail.com |
| Service area | Fargo, ND · Moorhead, MN · surrounding areas |
| Trading since | 2010 |
| Services | Interior painting · Exterior painting · Staining & wallcoverings · Power washing |

If the phone or email ever changes, note that the email appears in **two**
places and both must be updated together:

1. `index.html` — the visible text in the quote section and footer.
2. `js/script.js` — the `QUOTE_RECIPIENT_EMAIL` line near the top. This is
   the one that actually controls where quote requests are sent.

## Still to add

Three things are written but switched off, because there was no real
content for them yet. Each is preserved as an HTML comment with
instructions for switching it back on:

- **Gallery** — six photo slots, commented out in `index.html`. Add JPGs to
  `images/`, swap each `gallery-placeholder` div for an `<img>`, uncomment
  the section, and put the `Gallery` link back in the header nav.
- **Reviews** — three testimonial cards, commented out in `index.html`.
  Replace the quotes and names with real ones, uncomment, and restore the
  `Reviews` nav link.
- **Opening hours and social links** — commented out inside the footer.
  Fill in the real hours and profile URLs, then uncomment.

## Adding photos

1. Put image files (JPG or PNG, ideally under ~500KB each — resize large
   phone photos first) into `images/`, e.g. `images/job-1.jpg`.
2. In the commented-out gallery block, replace:

   ```html
   <div class="gallery-placeholder"><span>Add Photo</span></div>
   <figcaption>Project description</figcaption>
   ```

   with:

   ```html
   <img src="images/job-1.jpg" alt="Repainted living room in Fargo">
   <figcaption>Living room repaint, Fargo</figcaption>
   ```

3. Uncomment the section and restore the nav link.

## Test it locally

Open `index.html` in a browser by double-clicking it. Click through the
site and submit the quote form to check the email opens correctly.

## Publish on GitHub Pages

1. Upload every file and folder to the root of the repository, keeping the
   structure intact (`index.html`, `css/`, `js/`, `images/`, `README.md`).
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
5. The site publishes at `https://<username>.github.io/<repository-name>/`
   within a minute or two.
6. Optional: to use a custom domain, see GitHub's guide on
   [custom domains for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

Pages republishes automatically within a minute or two of any change
landing on the configured branch.

## Design notes

Colours are defined once as custom properties at the top of
`css/style.css`. Two of them are contrast-sensitive:

- `--gold-bright` (#d4af37) is for text on **dark** backgrounds only.
- `--gold-deep` (#7a5f10) is for text on **light** backgrounds.
- `--gold` (#c8a24a) is decorative only — borders and rules. It is too pale
  to use for text on the marble background (2.1:1).

The hero has a gradient scrim (`.hero::after`) between the temple
illustration and the copy. The illustration is drawn in near-white marble,
so text placed over it unscrimmed drops to about 1.1:1 and becomes
unreadable. If you change the hero artwork, keep the scrim.

All text on the page meets WCAG AA (4.5:1) against its background.

## File structure

```
├── index.html          Main site (all page content lives here)
├── css/
│   └── style.css       All styling (colours, layout, responsive rules)
├── js/
│   └── script.js       Mobile menu, footer year, quote form → email logic
├── images/
│   ├── favicon.svg      Browser tab icon
│   ├── greek-key.svg    Repeating meander pattern used as a section divider
│   ├── temple-hero.svg  Illustrated temple background for the hero banner
│   └── column-icon.svg  Column icon used as a simple logo/motif
└── README.md            This file
```

All artwork is original, hand-drawn SVG — no stock photos or copyrighted
images are used, so there's nothing to license or attribute.
