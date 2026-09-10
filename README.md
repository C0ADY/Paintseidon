# Paintseidon — Website

A Greek-temple themed one-page website for a painting & decorating business,
built as plain HTML/CSS/JS so it can be hosted for free on **GitHub Pages**.

The quote form doesn't use a server — it opens the visitor's own email app
with their details pre-filled, addressed to your business email. There's
nothing to host, configure, or pay for beyond GitHub Pages itself.

## 1. Before you publish — replace the placeholders

Every place you need to edit is wrapped in square brackets, e.g. `[Phone
Number]`. Open the project in any text editor and use **Find & Replace**
(or your editor's "search across files") to swap each one out.

The business name is already set throughout the site to **Paintseidon**.
The remaining placeholders are still to fill in — open `index.html` and
replace:

| Placeholder | Replace with |
|---|---|
| `[Phone Number]` (text) and `[PHONE NUMBER]` (in `tel:` links) | His contact number, e.g. text `07123 456789` and link `tel:+447123456789` |
| `[email@example.com]` | The email address he wants quote requests sent to |
| `[Town / Service Area]` | The town/area he covers, e.g. "Leeds and the surrounding area" |
| `[X]` / `[X]+` | Years of experience |
| `[Facebook URL]` / `[Instagram URL]` | His social media links, or delete those `<p>` lines in the footer if he doesn't have any |
| `[Mon–Fri: 8am–6pm]` / `[Sat: By appointment]` | Real working hours |
| The About section paragraph starting "[Add a short paragraph…]" | A couple of sentences about him/his experience |
| The testimonial placeholders | Real customer quotes, once he has some (or delete the section) |

**Also update `js/script.js`:** near the top of the file there's a line:

```js
var QUOTE_RECIPIENT_EMAIL = "email@example.com";
```

Change `"email@example.com"` to the real business email — this is what
actually controls where quote requests go (the visible text in `index.html`
is just for display).

## 2. Add real photos

The gallery section currently shows six dashed placeholder boxes. To use
real photos of finished jobs:

1. Add your image files (JPG or PNG, ideally under ~500KB each — resize/compress
   large phone photos first) into the `images/` folder, e.g. `images/job-1.jpg`.
2. In `index.html`, find each gallery block that looks like this:

   ```html
   <figure class="gallery-item">
     <div class="gallery-placeholder"><span>Add Photo</span></div>
     <figcaption>[Project description]</figcaption>
   </figure>
   ```

3. Replace the placeholder `<div>` with an `<img>` tag, and fill in the caption:

   ```html
   <figure class="gallery-item">
     <img src="images/job-1.jpg" alt="Repainted living room in Anytown">
     <figcaption>Living room repaint, Anytown</figcaption>
   </figure>
   ```

Repeat for as many photos as you have — you can add more `<figure>` blocks
than the original six, or remove unused ones.

A real photo of the painter, or a logo, can replace `images/column-icon.svg`
in the header/footer/about section the same way.

## 3. Test it locally (optional but recommended)

You don't need any special software. Just open `index.html` in a web
browser by double-clicking it, and click through the site and the quote
form to check everything looks right and the email opens correctly.

## 4. Publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `painting-website`) — it can be
   public or private, but GitHub Pages on a free account requires the
   repository to be **public**.
2. Upload every file and folder from this package into the root of that
   repository, keeping the folder structure intact:

   ```
   index.html
   css/style.css
   js/script.js
   images/…
   README.md
   ```

   Easiest way: on the repository's GitHub page, click **Add file → Upload
   files**, then drag the whole contents of this folder in and commit.

3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` (or `master`) and folder `/ (root)`, then
   **Save**.
6. GitHub will publish the site at a URL like:

   ```
   https://<your-github-username>.github.io/<repository-name>/
   ```

   This can take a minute or two the first time. Refresh the Pages settings
   page until it shows the live link.

7. Optional: to use your own domain (e.g. `www.yourbusiness.co.uk`) instead
   of the github.io address, see GitHub's guide on
   [custom domains for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## 5. Updating the site later

Any time you want to change something, edit the file (`index.html`,
`css/style.css`, etc.), then upload the changed file to the same GitHub
repository (or use `git push` if you're comfortable with Git) — GitHub
Pages automatically republishes within a minute or two of a change landing
on the branch you configured in step 4.

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
