# EdBlume Website - Local Deployment Guide

## Quick Start

The EdBlume website is now running on a local server!

### Access the Website
- **URL**: http://localhost:8000
- **Status**: ✅ Running successfully

### Server Details
- **Server**: Python HTTP Server
- **Port**: 8000
- **Protocol**: HTTP
- **Status**: Active

## How to Start the Server

### Option 1: Python HTTP Server (Recommended)
```bash
cd /Users/apoorvsingh/Desktop/EdBlume
python3 -m http.server 8000
```

### Option 2: Node.js (if available)
```bash
npx http-server -p 8000
```

### Option 3: PHP (if available)
```bash
php -S localhost:8000
```

## Website Structure

```
EdBlume/
├── index.html          # Main homepage
├── thank-you.html      # Thank you page
├── css/
│   ├── style.css       # Main stylesheet
│   ├── colors.css      # Color variables
│   ├── typography.css  # Typography styles
│   ├── components.css  # Component styles
│   └── html5reset.css  # CSS reset
├── js/
│   └── team-accordion.js # Team section functionality
├── images/             # Website images
└── Logos/             # EdBlume logos
```

## Features

- ✅ Responsive design
- ✅ Modern CSS with animations
- ✅ Mobile-friendly navigation
- ✅ Image gallery with thumbnails
- ✅ Team section with expandable bios
- ✅ Contact forms
- ✅ Smooth scrolling navigation

## Development Notes

- The website uses vanilla HTML, CSS, and JavaScript
- No build process required
- All assets are optimized for web
- Cross-browser compatible
- SEO-friendly structure

## Stopping the Server

Press `Ctrl + C` in the terminal where the server is running.

## Troubleshooting

1. **Port 8000 in use**: Try a different port (e.g., `python3 -m http.server 8080`)
2. **Permission denied**: Make sure you're in the correct directory
3. **Page not loading**: Check if the server is running and the port is correct

## Next Steps

- Test all links and forms
- Check responsive design on different devices
- Optimize images if needed
- Consider adding analytics
- Set up for production deployment 