# Easy Solutions — React Website

## 🚀 Running Locally

```bash
npm install
npm run dev
```
Open http://localhost:5173

## 📦 Deploy to Vercel

```bash
npm run build
```
Then push to GitHub and import on vercel.com — or drag the `dist/` folder.

## ✏️ HOW TO UPDATE CONTENT

**All content lives in one file:**
`src/data/content.js`

### Update company info (phone, email, address):
Edit the `COMPANY` object at the top.

### Add/edit a service:
Find `SERVICES` array, copy any object and edit.

### Add a team member photo:
1. Put photo in `/public/team/` folder (e.g. `favas.jpg`)
2. In `TEAM` array, change `photo: null` to `photo: '/team/favas.jpg'`

### Add a gallery item:
Add object to `GALLERY` array with category: 'activity' | 'success' | 'update'
To use a real photo: put it in `/public/gallery/` and set `image: '/gallery/photo.jpg'`

### Add a testimonial:
Add object to `TESTIMONIALS` array.

### Update stats:
Edit `STATS` array.

## 📁 Project Structure

```
src/
  data/
    content.js        ← ALL CONTENT LIVES HERE
  components/
    Navbar.jsx        ← Top navigation
    Footer.jsx        ← Footer
    Logo.jsx          ← SVG logo
    TeamCard.jsx      ← Team member card
    ServiceCard.jsx   ← Service card (home + full variants)
    AIChat.jsx        ← AI Tax Assistant widget
    WAFloat.jsx       ← WhatsApp float button
    useReveal.js      ← Scroll animation hook
  pages/
    Home.jsx          ← Home page
    About.jsx         ← About page
    Services.jsx      ← Services page
    Gallery.jsx       ← Gallery page
    Contact.jsx       ← Contact page
public/
  team/               ← Put team member photos here
  gallery/            ← Put gallery photos here
```
