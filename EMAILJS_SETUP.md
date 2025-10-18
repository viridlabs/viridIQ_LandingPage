# EmailJS Setup Guide

## Quick Setup Steps

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Click "Sign Up" (use Google for quick signup)
- Verify your email

### 2. Create Email Service
1. Go to **"Email Services"** → **"Add New Service"**
2. Choose **Gmail** (or your email provider)
3. Click **"Connect Account"** and sign in
4. Click **"Create Service"**
5. Name it "ViridIQ Landing" and click **"Save"**
6. **Copy your Service ID** (starts with `service_...`)

### 3. Create Email Template
1. Go to **"Email Templates"** → **"Create New Template"**
2. Use these settings:
   - **Subject**: `New ViridIQ Landing Page Signup`
   - **Content**:
   ```
   New email signup from ViridIQ landing page!
   
   Email: {{email}}
   
   Signup Date: {{date}}
   ```
   - **To Email**: `ali@viridiq.com`
   - **From Name**: `ViridIQ Landing Page`
3. Click **"Save"**
4. **Copy your Template ID** (starts with `template_...`)

### 4. Get Your Public Key
1. Go to **"Account"** in the left menu
2. Find your **Public Key** (starts with `user_...`)
3. **Copy it**

### 5. Update Your HTML File

Open `index.html` and find these three lines (around lines 70, 101):

```javascript
// Line 70 - Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_PUBLIC_KEY");

// Line 101 - Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

Replace with your actual credentials:

**Example:**
```javascript
// Line 70
emailjs.init("user_abc123xyz");

// Line 101
emailjs.send('service_viridiq', 'template_signup', templateParams)
```

### 6. Test It!

1. Open `index.html` in your browser
2. Enter your own email address
3. Click "Notify Me"
4. Check your inbox at `ali@viridiq.com` - you should receive an email!

## What Happens When Someone Signs Up?

1. User enters their email and clicks "Notify Me"
2. Button shows "Sending..." while processing
3. EmailJS sends you an email at `ali@viridiq.com` with:
   - The subscriber's email address
   - The date and time they signed up
4. User sees a success message
5. Form clears, ready for the next signup

## Troubleshooting

**Nothing happens when I click "Notify Me"**
- Check the browser console (F12) for errors
- Verify all three credentials are correct
- Make sure there are no extra spaces in the credentials

**"FAILED..." error message**
- Double-check your Service ID and Template ID
- Make sure your email service is connected in EmailJS
- Check that the template variables match: `{{email}}` and `{{date}}`

**Email not received**
- Check your spam folder
- Verify "To Email" is set to `ali@viridiq.com` in the template
- Check EmailJS dashboard for any error messages

## Free Tier Limits

- **200 emails/month** (more than enough for a landing page!)
- All features included
- No credit card required

## Need Help?

EmailJS has great documentation: https://www.emailjs.com/docs/

