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

## The logo

`logo.png` is the full lockup: the illustration sits at x209 y77, 664x404,
above the wordmark, in a 1079x633 image. Its white background has been
flood-filled to transparency from the edges, so white inside the figure
and the wave highlights is preserved.

It is used two different ways, because the artwork's own wordmark is navy
and would disappear against the navy bars:

- **Header and footer** crop to the illustration only, via `.logo-mark`,
  and pair it with the Cinzel wordmark in marble. The crop is driven by a
  `--mark-h` custom property, so changing the size needs one number.
- **About section** uses the whole lockup, wordmark included, since the
  marble background gives the navy type plenty of contrast.

If the artwork is ever re-exported, the crop numbers in `.logo-mark` are
tied to that 1079x633 source and will need recalculating.

## Cache busting

`index.html` loads `style.css?v=N` and `script.js?v=N`. **Bump N whenever
either file changes.** GitHub Pages sends long cache lifetimes, so without
a new query string returning visitors keep the old copy and see new markup
against an old stylesheet.

## Social links

The footer's Follow column links to Facebook, Instagram, LinkedIn and
Pinterest. Mobile share parameters (`utm_*`, `mibextid`, `stkn`) were
stripped from the supplied URLs - they are analytics tokens, not part of
the address.

Two of the four are share links rather than canonical profile URLs:

- Facebook points at `/share/1FAfm7LTqD/`, which redirects to the page.
- Pinterest points at a `pin.it` short link.

Both work, but they depend on a redirect staying alive. If the canonical
URLs are available (the address shown when visiting the profile in a
desktop browser), prefer those.

The LinkedIn link goes to a personal profile, not a company page. If a
Paintseidon company page is created later, swap that URL.

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
