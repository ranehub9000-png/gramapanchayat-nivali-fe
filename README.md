# Nivali Gram Panchayat Website

Official website for Nivali Gram Panchayat, Taluka Chiplun, District Satara, Maharashtra.

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional government-style design
- **Google Maps Integration**: Location map with embedded Google Maps
- **Bilingual Support**: Devanagari and English text
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Government Schemes**: Information about relevant government schemes
- **Contact Information**: Office address and contact details

## Files Structure

```
chiplun/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet with responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Setup Instructions

### Basic Setup (No API Key Required)

The website works out of the box with an embedded Google Maps iframe. Simply open `index.html` in a web browser.

### Advanced Setup (Interactive Google Maps)

To use the interactive Google Maps with markers:

1. Get a Google Maps API Key:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable "Maps JavaScript API" and "Geocoding API"
   - Create credentials (API Key)
   - Restrict the API key to your domain (recommended for production)

2. Update the HTML:
   - Open `index.html`
   - Find the line: `<!-- <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script> -->`
   - Uncomment it and replace `YOUR_API_KEY` with your actual API key
   - Comment out or remove the embedded iframe code in the script section

## Customization

### Update Village Information

Edit the following sections in `index.html`:
- Village Overview cards
- Population statistics table
- Contact information
- Office hours

### Change Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1e40af;      /* Main blue color */
    --secondary-color: #fbbf24;    /* Accent yellow */
    --accent-color: #059669;       /* Green accent */
}
```

### Update Logo

The logo is an SVG in the header section. You can:
- Replace the SVG code with your own design
- Use an image file instead
- Modify the colors and shapes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- The website uses web fonts (Poppins and Noto Sans Devanagari) loaded from Google Fonts
- Font Awesome icons are loaded from CDN
- All images use placeholder URLs - replace with actual images if needed
- The map coordinates are approximate - update with exact coordinates if available

## License

This website is created for official use by Nivali Gram Panchayat, Government of Maharashtra.

## Contact

For any queries or updates, contact the Gram Panchayat office.

---

**Government of Maharashtra** | **Nivali Gram Panchayat**
