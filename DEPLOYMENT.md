# Deployment Instructions for GoDaddy

This guide explains how to deploy your MV Industrial Corporation website to GoDaddy.

## Building the Website

The website has already been built. The production files are in the `dist` folder.

To rebuild in the future, run:
```bash
npm run build
```

## Deploying to GoDaddy

### Method 1: FTP Upload (Recommended for GoDaddy)

1. **Access your GoDaddy hosting account**
   - Log in to your GoDaddy account
   - Go to "My Products" and find your hosting plan
   - Click "Manage" next to your hosting account

2. **Open File Manager or FTP**
   - Option A: Use GoDaddy's built-in File Manager
   - Option B: Use an FTP client like FileZilla

3. **Upload files**
   - Navigate to your website's root directory (usually `public_html` or `www`)
   - Upload ALL files from the `dist` folder to this directory
   - Make sure to upload:
     - `index.html`
     - The `assets` folder with all CSS and JS files

4. **Configure the domain**
   - Ensure your domain (mvindustrial.in) points to your GoDaddy hosting
   - This is usually done through the "Domains" section in GoDaddy

### Method 2: Using FTP Client (FileZilla)

1. **Get FTP credentials from GoDaddy**
   - Host: Usually `ftp.yourdomain.com`
   - Username: Provided by GoDaddy
   - Password: Set in GoDaddy hosting panel

2. **Connect via FileZilla**
   - Download FileZilla if needed
   - Enter your FTP credentials
   - Connect to the server

3. **Upload the dist folder contents**
   - Navigate to `public_html` on the remote server
   - Upload all files from the local `dist` folder

## Post-Deployment

1. Visit http://www.mvindustrial.in to verify the site is live
2. Test all navigation links
3. Check responsive design on mobile devices
4. Verify all images load properly

## Updating the Website

Whenever you make changes:
1. Run `npm run build` to create new production files
2. Upload the new files from the `dist` folder to GoDaddy
3. Clear your browser cache to see the changes

## Important Notes

- The website is a single-page application (SPA)
- All content loads from a single `index.html` file
- Images are loaded from Pexels (external source)
- The site is fully responsive and mobile-friendly

## Contact Information on Website

- Address: C-48, Veerasandra Industrial estate, Electronic City, Bengaluru, India - 560100
- Phone: +(91) 984 091 1975
- Email: smv@mvc.org.in
- Website: http://www.mvindustrial.in

## Support

If you encounter any issues with deployment, contact GoDaddy support or consult their hosting documentation.
