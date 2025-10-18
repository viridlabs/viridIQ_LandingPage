# ViridIQ - Coming Soon Landing Page

A beautiful, animated "coming soon" landing page for ViridIQ featuring a black, gold, and purple colour scheme.

## Features

- 🎨 Modern gradient background with animated orbs
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 💫 Interactive email signup form
- 🔗 Social media link placeholders
- 🎯 Clean, professional aesthetic

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it `viridiq-landing` (or your preferred name)
5. Choose "Public" visibility
6. **Do NOT** initialise with README, .gitignore, or license
7. Click "Create repository"

### Step 2: Initialise Git and Push Files

Open your terminal/PowerShell in the project directory and run:

```bash
# Initialise git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: ViridIQ coming soon landing page"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/viridiq-landing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch
6. Select "/ (root)" folder
7. Click "Save"

### Step 4: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/viridiq-landing/
```

It may take a few minutes for the site to go live.

## Customisation

### Update Social Links

Edit `index.html` and update the `href` attributes in the social links section:

```html
<a href="YOUR_LINKEDIN_URL" class="social-link" aria-label="LinkedIn">
<a href="YOUR_TWITTER_URL" class="social-link" aria-label="Twitter">
<a href="YOUR_GITHUB_URL" class="social-link" aria-label="GitHub">
```

### Change Colours

Edit `styles.css` and modify the CSS variables at the top:

```css
:root {
    --black: #000000;
    --gold: #FFD700;
    --purple: #9D4EDD;
    /* Add your custom colours here */
}
```

### Add Email Functionality

Currently, the email signup shows an alert. To integrate with an email service:

1. Sign up for a service like [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/)
2. Update the `handleNotify()` function in `index.html`
3. Add your API endpoint or service configuration

## File Structure

```
6_Website_Landing/
├── index.html          # Main HTML file
├── styles.css          # Styles and animations
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Licence

© 2025 ViridIQ. All rights reserved.

