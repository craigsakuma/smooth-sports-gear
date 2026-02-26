# Smooth Sports Gear — Site Completion Checklist

---

## 1. Contact Form (Formspree)

- [ ] Go to [formspree.io](https://formspree.io) and create a free account
- [ ] Click **+ New Form**, give it a name (e.g. "Smooth Sports Gear Contact")
- [ ] Copy the form ID — it looks like `xpwzrjkq`
- [ ] Open `index.html` and find this line (~line 470):
  ```
  action="https://formspree.io/f/YOUR_FORM_ID"
  ```
  Replace `YOUR_FORM_ID` with your actual ID
- [ ] Verify by submitting a test message — you should receive it by email

---

## 2. Contact Information

All placeholders are in `index.html`. Search for each one and replace.

| Placeholder | Replace with | Appears on |
|---|---|---|
| `[Your Phone Number]` | Tom's phone number | Contact section + Footer |
| `[your@email.com]` | Tom's email address | Contact section + Footer |
| `[Your City, State]` | `Gualala, CA` | Footer |

---

## 3. Social Media Links

In `index.html`, find the footer social links section (~line 547).
Replace `href="#"` with the actual URLs, or delete any icons for platforms not used.

- [ ] Facebook — `href="https://facebook.com/YOUR_PAGE"`
- [ ] Instagram — `href="https://instagram.com/YOUR_HANDLE"`
- [ ] X / Twitter — update or remove if not used

---

## 4. Product Photos

Drop photos into `images/products/` and then update the placeholder
colored blocks in `index.html`. Search for `product-img-placeholder`
to find each one.

| Product slot | Status |
|---|---|
| Jerseys & Uniforms | ⬜ No photo yet |
| T-Shirts & Polos | ⬜ No photo yet |
| Hoodies & Sweatshirts | ⬜ No photo yet |
| Hats & Caps | ⬜ No photo yet |
| Stickers & Decals | ⬜ No photo yet |
| Mugs & Drinkware | ⬜ No photo yet |
| Posters & Banners | ⬜ No photo yet |
| Signs & Displays | ⬜ No photo yet |

---

## 5. Footer Copyright Year

In `index.html` (~line 585), update:
```
© 2024 Smooth Sports Gear
```
to the current year.

---

## 6. Choose a Tagline (optional)

See `BRAND.md` for options. If chosen, add it to the hero eyebrow or
footer. Current options:

- *"Outfitting Champions Since 1994"*
- *"Your Team. Your Town. Your Gear."*
- *"Handcrafted for Your Community"*
- *"Where Every Team Gets Its Look"*
- *"Built for the Coast. Made for the Game."*

---

## 7. Changing Photos (ongoing)

See `photos.js` — this is the only file you need to edit to swap photos.

1. Drop the new photo into `images/gallery/`
2. Open `photos.js`
3. Find the slot you want to change and update the filename
4. Save — done

---
