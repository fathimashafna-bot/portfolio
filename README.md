# Fathima Shafna — Personal Portfolio Website

A modern, responsive, high-performance personal portfolio website designed for **Fathima Shafna**, aspiring **Data Scientist & AI Engineer**. Built with clean HTML5, custom dark-theme CSS3, Bootstrap 5 (via official CDN), and vanilla JavaScript.

---

## 🌟 Highlights & Design Features

- **Aesthetic**: Deep obsidian / near-black background (`#070a12`) with vibrant electric-cyan (`#00f0ff`) and violet (`#8b5cf6`) glowing accents.
- **Modern UI Patterns**: Glassmorphic panels with backdrop blur, glowing borders, smooth card hover lifts, and subtle micro-animations.
- **Typography**: Paired Google Fonts — **Poppins** for crisp modern headings and **Inter** for clean readability.
- **Icons**: Font Awesome 6 CDN icons throughout.
- **Responsive Navigation**: Sticky navbar with scroll transparency, active section highlighting (ScrollSpy), and an auto-closing mobile menu on small screens.
- **Hero Visual & Avatar Fallback**: Graceful fallback mechanism if a local photo (`profile.jpg`) is not supplied, displaying an initials avatar badge and AI orbital ring.
- **Honest & Transparent Presentation**: Skills presented without arbitrary proficiency percentages; projects explicitly labeled as academic concepts and exploratory prototypes.
- **Accessible & Motion-Conscious**: Visible focus rings (`:focus-visible`), skip-to-content link, semantic HTML, and full support for `prefers-reduced-motion`.
- **Client-Side Form Validation**: Complete live field validation with explicit messaging detailing that this is a client-side demonstration without silent email failures.

---

## 📁 Project Structure

```text
├── index.html        # Complete website semantic structure and content
├── style.css         # Dark theme styling, tokens, glassmorphism, responsive queries
├── script.js         # Navigation behavior, scroll animations, form validation
└── README.md         # Documentation, setup guide, and customization instructions
```

---

## 🚀 Quick Start / Setup Instructions

This project does not require Node.js, React, Webpack, Vite, or any build system. It is pure standard web technology.

### Option 1: Direct File Preview
Simply double-click `index.html` in your file explorer, or right-click `index.html` and choose **Open With > Google Chrome** (or Edge / Firefox / Safari).

### Option 2: Run Using a Local Development Server (Recommended)
Running through an HTTP server ensures consistent behavior and asset loading.

#### Using Python (Built-in)
Open a terminal (PowerShell, Command Prompt, or Bash) in this directory and run:
```bash
python -m http.server 3000
```
Then open your browser and navigate to:
```text
http://localhost:3000
```

#### Using Node.js / `npx serve`
```bash
npx serve .
```

#### Using VS Code "Live Server" Extension
1. Open the folder in VS Code.
2. Install the **Live Server** extension by *Ritwick Dey*.
3. Click **"Go Live"** in the status bar at the bottom right.

---

## 🌐 External CDN Dependencies

The site loads resources from official, high-speed CDNs:
- **Bootstrap 5 CSS & JS**: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/...`
- **Font Awesome 6 Icons**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/...`
- **Google Fonts (Inter & Poppins)**: `https://fonts.googleapis.com/...`

> **Note:** An active internet connection is required to fetch external fonts and icons from the CDNs. If offline, the site falls back to system fonts and native icons.

---

## 🛠️ Customization Guide

### 1. Adding Your Real Profile Picture
1. Save your photograph as `profile.jpg` in the project root directory alongside `index.html`.
2. The `<img>` tag in `index.html` will automatically render it.
3. If no image named `profile.jpg` is present, the site automatically renders the stylized **FS** initials avatar with AI orbital accents.

### 2. Updating Social Media Links
In `index.html`, search for `your-username` and replace placeholder URLs with your actual profile links:
- GitHub: `https://github.com/your-username`
- LinkedIn: `https://linkedin.com/in/your-username`
- Instagram: `https://instagram.com/your-username`

### 3. Updating Experience & Education Details
In `index.html`, locate the `<section id="education">` block:
- **Softronics Internship**: Pre-configured with a 1-year Software / Technical Intern milestone. Adjust responsibilities or dates as desired.
- **B.Sc. in Computer Science**: Replace `[Your College / University Name Placeholder]` with your college/university name and adjust any specific coursework items.
- **Higher Secondary (Science Stream)**: Replace `[Your School / Higher Secondary Institution Placeholder]` with your high school or institution name.

### 4. Updating Project Repositories
In `index.html`, locate the `<section id="projects">` block:
- Each project card includes an editable repository link button (`<a href="https://github.com/your-username/...">`).
- Replace these with your actual GitHub repository or live demonstration links.

### 5. Connecting the Contact Form to a Real Backend
The current contact form performs comprehensive **client-side validation** (checking name length, valid email syntax, message length) and transparently notifies users that it is a front-end demo.

To receive emails directly in your inbox:
#### Using Formspree (Free & Simple)
1. Register for a free account at [Formspree](https://formspree.io/).
2. Create a new form and copy your Formspree endpoint (e.g., `https://formspree.io/f/xvovqgzy`).
3. In `index.html`, update `<form id="portfolio-contact-form">` to:
   ```html
   <form id="portfolio-contact-form" action="https://formspree.io/f/YOUR_ENDPOINT_HERE" method="POST">
   ```
4. Remove `event.preventDefault();` in `script.js` or submit via `fetch()`.

#### Using EmailJS
Include the EmailJS CDN script and call `emailjs.sendForm(...)` within the submit event handler in `script.js`.

### 6. Customizing Colors & Styling
All colors and spacing are configured as CSS custom properties at the top of `style.css`:
```css
:root {
  --bg-dark: #070a12;         /* Deep background */
  --violet-primary: #8b5cf6;  /* Primary violet accent */
  --cyan-primary: #00f0ff;    /* Electric cyan accent */
}
```
Modify these variables to adjust your theme instantly across the entire website.

---

## ⚠️ Known Limitations

1. **Static Front-End Only**: This portfolio does not include a server-side backend or database. Submissions in the contact form are validated in the browser only.
2. **CDN Internet Requirement**: Bootstrap, Google Fonts, and Font Awesome require network access. For an offline deployment, download the CSS/font files locally and adjust link paths.
3. **Academic Exploration Notice**: Projects showcased in this template are labeled as concept prototypes and exploratory analytics projects.

---

## 📄 License
This portfolio template is available for personal and educational use. Feel free to customize and expand it for your career journey.
