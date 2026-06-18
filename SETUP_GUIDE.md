# Easy Solutions Website — Complete Setup & Deployment Guide

This guide takes you from downloading the ZIP all the way to a live Vercel website.
Everything is free. No credit card needed.

---

## WHAT YOU NEED (install these first)

| Tool | What it is | Download |
|------|-----------|----------|
| **Node.js** | Runs the project | https://nodejs.org (download LTS version) |
| **VS Code** | Code editor for content changes | https://code.visualstudio.com |
| **Git** | Version control (needed for Vercel) | https://git-scm.com/downloads |
| **GitHub account** | Free hosting for your code | https://github.com |
| **Vercel account** | Free website hosting | https://vercel.com |

> All five are completely free.

---

## STEP 1 — INSTALL NODE.JS

1. Go to https://nodejs.org
2. Click the big green **"LTS"** button (Long Term Support)
3. Download and run the installer — click Next, Next, Install
4. When done, open **Command Prompt** (Windows) or **Terminal** (Mac)
5. Type this and press Enter to confirm it worked:
   ```
   node --version
   ```
   You should see something like: `v20.11.0`

---

## STEP 2 — EXTRACT AND OPEN THE PROJECT

1. Find the downloaded **easy-solutions-react.zip** file
2. Right-click → **Extract All** (Windows) or double-click (Mac)
3. You now have a folder called `easy-solutions-react`
4. Open **VS Code**
5. Go to **File → Open Folder** → select the `easy-solutions-react` folder
6. Click **"Yes, I trust the authors"** if asked

---

## STEP 3 — INSTALL PROJECT DEPENDENCIES

1. In VS Code, open the **Terminal** (menu: Terminal → New Terminal)
2. You should see a command line at the bottom of VS Code
3. Type this and press Enter:
   ```
   npm install
   ```
4. Wait about 1–2 minutes. You will see lots of text scrolling — that is normal.
5. When it stops and shows your folder name again, it is done.

---

## STEP 4 — RUN THE WEBSITE LOCALLY

1. In the same terminal, type:
   ```
   npm run dev
   ```
2. You will see:
   ```
   VITE v5.x.x  ready in xxx ms
   ➜  Local:   http://localhost:5173/
   ```
3. Open your browser and go to: **http://localhost:5173**
4. Your website is running! ✅

> To stop the server later: press **Ctrl + C** in the terminal.

---

## STEP 5 — UPDATE YOUR CONTENT (before deploying)

Open this file in VS Code:
```
src/data/content.js
```

Update the `COMPANY` section at the top with real details:

```js
export const COMPANY = {
  name: 'Easy Solutions',
  phone: '+91 YOUR_REAL_NUMBER',
  phoneRaw: '91YOURREALNUM',   // no spaces or +
  email: 'your@realemail.com',
  address: 'Your Real Address, Kochi, Kerala — 6XXXXX',
  ...
}
```

Save the file (Ctrl + S) and the browser refreshes automatically.

### To add employee photos:
1. Create a folder: `easy-solutions-react/public/team/`
2. Copy photos there — name them: `favas.jpg`, `asha.jpg`, `rahul.jpg`
3. In `content.js`, find the `TEAM` section and change:
   ```js
   photo: null,
   // to:
   photo: '/team/favas.jpg',
   ```

### To add gallery photos:
1. Create folder: `easy-solutions-react/public/gallery/`
2. Put photos there
3. In `GALLERY` array, set: `image: '/gallery/yourphoto.jpg'`

---

## STEP 6 — CREATE A GITHUB ACCOUNT (if you don't have one)

1. Go to https://github.com
2. Click **Sign Up**
3. Enter your email, create a password, choose a username
4. Verify your email
5. You now have a free GitHub account

---

## STEP 7 — INSTALL GIT AND SET IT UP

1. Go to https://git-scm.com/downloads
2. Download and install Git (click Next through the installer)
3. Open Command Prompt / Terminal and run these two commands
   (replace with your own name and email):
   ```
   git config --global user.name "Favas Thangal"
   git config --global user.email "your@email.com"
   ```

---

## STEP 8 — PUSH YOUR PROJECT TO GITHUB

### Create a new repository on GitHub:
1. Go to https://github.com and log in
2. Click the **+** icon (top right) → **New repository**
3. Name it: `easy-solutions-website`
4. Keep it **Public** (free Vercel hosting requires this, or use private with Vercel's GitHub app)
5. Do NOT check "Add a README" (we already have one)
6. Click **Create repository**

### Connect your project to GitHub:
In VS Code terminal (make sure you are in the project folder), run these commands one by one:

```bash
git init
git add .
git commit -m "Initial commit — Easy Solutions website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/easy-solutions-website.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your actual GitHub username.

When asked, enter your GitHub username and password.
If GitHub asks for a token instead of password, follow the prompt or go to:
GitHub → Settings → Developer Settings → Personal Access Tokens → Generate new token (classic) → check "repo" → copy and use as password.

After this, refresh your GitHub page — you should see all your files there. ✅

---

## STEP 9 — CREATE A VERCEL ACCOUNT

1. Go to https://vercel.com
2. Click **Sign Up**
3. Choose **Continue with GitHub** (easiest — links your accounts)
4. Authorize Vercel to access your GitHub

---

## STEP 10 — DEPLOY TO VERCEL (FREE)

1. On Vercel dashboard, click **Add New → Project**
2. You will see your GitHub repositories listed
3. Find **easy-solutions-website** and click **Import**
4. Vercel automatically detects it as a Vite/React project
5. Settings will auto-fill — **do not change anything**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**
7. Wait about 60–90 seconds

🎉 **Your website is live!**

Vercel gives you a free URL like:
```
https://easy-solutions-website.vercel.app
```

---

## STEP 11 — CONNECT A CUSTOM DOMAIN (Optional, Free)

If you have a domain (e.g. `easysolutions.in`):

1. In Vercel dashboard → your project → **Settings → Domains**
2. Click **Add Domain**
3. Type your domain: `easysolutions.in`
4. Vercel shows you DNS records to add
5. Log in to your domain registrar (GoDaddy, Namecheap, etc.)
6. Add the DNS records Vercel gives you
7. Wait 10–30 minutes for DNS to propagate

Vercel provides **free SSL (HTTPS)** automatically. ✅

---

## UPDATING THE WEBSITE AFTER DEPLOYMENT

Every time you make a content change:

1. Edit `src/data/content.js` (or any file)
2. Save the file
3. In terminal, run:
   ```bash
   git add .
   git commit -m "Updated services / team / content"
   git push
   ```
4. Vercel **automatically detects the push** and redeploys in ~60 seconds

No manual steps needed after initial setup. Every `git push` = new deployment. ✅

---

## TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| `npm install` fails | Make sure Node.js is installed. Run `node --version` to check. |
| Website shows blank page | Run `npm run dev` first and check for errors in terminal |
| `git push` asks for password | Use a GitHub Personal Access Token as the password |
| Vercel build fails | Check the build log — usually a missing dependency. Run `npm install` locally first. |
| Changes not showing on live site | Make sure you ran `git push` after saving |
| Domain not connecting | DNS changes take up to 48 hours — wait and check again |

---

## VERCEL FREE PLAN LIMITS

Vercel's Hobby (free) plan is very generous for a business website:

| Feature | Free Limit |
|---------|-----------|
| Bandwidth | 100 GB / month |
| Deployments | Unlimited |
| Custom domains | Unlimited |
| HTTPS/SSL | Free, automatic |
| Serverless functions | 100 GB-hours / month |
| Build time | 6,000 minutes / month |

A typical business website uses less than 5 GB/month. You will never hit the limits.

---

## QUICK REFERENCE COMMANDS

```bash
npm install          # Install dependencies (first time only)
npm run dev          # Run locally at http://localhost:5173
npm run build        # Build for production (creates dist/ folder)

git add .            # Stage all changes
git commit -m "msg"  # Save changes with a message
git push             # Push to GitHub → triggers Vercel deployment
```

---

*Built by Code Leaf · www.codeleaf.co.in · +91 80751 59094*
