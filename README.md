# Apex Division Website

Live site for Apex Division LLC. Hosted on GitHub Pages.

## Files
- `index.html` — the whole site (quiz included)
- Images (logos, team photo, product cover) sit next to index.html

## Adding your real links (Calendly, Stripe, socials)
Open `index.html`, search for `EDIT YOUR LINKS HERE`, and paste each link between the quotes:

```
calendly:   "https://calendly.com/your-link",
cut:        "https://buy.stripe.com/...",   // $27
physique:   "https://buy.stripe.com/...",   // $37
iron:       "https://buy.stripe.com/...",   // $37
collective: "https://buy.stripe.com/...",   // $49/mo
```

Until a link is filled in, that button emails coaches@apexdivision.com instead, so nothing on the site is ever broken. Social links stay hidden until you add them.

The quiz automatically fills the prospect's name and quiz answers into Calendly once your Calendly link is in.
