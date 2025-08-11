# Email Setup Guide for Contact Form

This guide will help you set up Nodemailer to send emails from your contact form.

## Quick Setup (Gmail)

### 1. Create Environment File

Copy the example environment file and rename it to `.env.local`:

```bash
cp .env.local.example .env.local
```

### 2. Configure Gmail App Password

1. **Enable 2-Factor Authentication**:
   - Go to your [Google Account settings](https://myaccount.google.com/)
   - Navigate to Security
   - Enable 2-Step Verification

2. **Generate App Password**:
   - Go to Security > App passwords
   - Select "Mail" as the app
   - Click "Generate"
   - Copy the 16-character password

3. **Update Environment Variables**:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

## Alternative Email Services

### Outlook/Hotmail
```env
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-app-password
```

### Custom SMTP Server
```env
EMAIL_HOST=smtp.your-provider.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@your-domain.com
EMAIL_PASS=your-password
```

## Testing the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to your contact form and submit a test message

3. Check your email inbox for the received message

4. Check the browser console for any error messages

## Troubleshooting

### Common Issues

1. **"Email service not configured"**:
   - Make sure your `.env.local` file exists
   - Verify `EMAIL_USER` and `EMAIL_PASS` are set correctly

2. **"Invalid login"**:
   - Double-check your app password
   - Ensure 2-factor authentication is enabled
   - Try regenerating the app password

3. **"Connection timeout"**:
   - Check your internet connection
   - Verify the email service settings
   - Try using a different email service

### Security Notes

- Never commit your `.env.local` file to version control
- Use app passwords instead of your regular email password
- Consider using environment variables in production deployments

## Production Deployment

For production, set the environment variables in your hosting platform:

- **Vercel**: Add environment variables in the project settings
- **Netlify**: Add environment variables in site settings
- **Railway**: Add environment variables in the dashboard

## Email Template Customization

The email template is defined in `app/api/contact/route.ts`. You can customize:

- Email subject line
- HTML styling
- Content layout
- Additional fields

The current template includes:
- Contact details (name, email, social)
- Message content
- Professional styling
- Responsive design 