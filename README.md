# Portfolio | Apurv Sinha

A modern, responsive portfolio website built with Next.js 16, featuring smooth animations, a contact form, and a live GitHub contribution graph.

![Portfolio Preview](https://ik.imagekit.io/xeylous/Profile_picture_preview.png?updatedAt=1770449003179)

## Features

- **Smooth Scrolling** - Lenis-powered butter-smooth scroll experience
- **GSAP Animations** - Scroll-triggered animations for projects and experience sections
- **GitHub Contributions** - Live contribution graph fetched from GitHub API
- **Contact Form** - Nodemailer-integrated form with email notifications
- **Responsive Design** - Mobile-first approach with Tailwind CSS v4
- **SEO Optimized** - Meta tags, Open Graph, and Twitter cards configured

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [GSAP](https://greensock.com/gsap/) + [Lenis](https://github.com/studio-freight/lenis)
- **Email:** [Nodemailer](https://nodemailer.com/)
- **Fonts:** Poppins, Dosis (Google Fonts)

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/xeylous/portfolio-v2.git

# Navigate to directory
cd portfolio-v2

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=recipient@email.com
```

> **Note:** Use a [Gmail App Password](https://support.google.com/accounts/answer/185833) for `EMAIL_PASS`

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/contact/     # Contact form API route
│   ├── globals.css      # Global styles & CSS variables
│   ├── layout.js        # Root layout with fonts & metadata
│   └── page.js          # Main page component
├── assets/icons/        # SVG icon components
├── components/
│   ├── common/          # Shared components (Footer)
│   ├── About.jsx        # About section
│   ├── Caption.jsx      # Call-to-action section
│   ├── Contact.jsx      # Contact form & info
│   ├── Experience.jsx   # Work experience timeline
│   ├── GitHubStreak.jsx # Live GitHub contributions
│   ├── Header.jsx       # Hero section with navbar
│   ├── Projects.jsx     # Project showcase grid
│   └── SmoothScroll.jsx # Lenis scroll wrapper
└── utils/
    └── scroll.js        # Smooth scroll configuration
```

## Customization

### Colors

Edit CSS variables in [`globals.css`](src/app/globals.css):

```css
:root {
  --background: rgb(17, 17, 17);
  --hack-bg: #020e1828;
  --linear-grey: #cbc9e2;
}
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Links

- **Live Site:** [xeylous.xyz](https://xeylous.xyz)
- **Blog:** [blog.xeylous.xyz](https://blog.xeylous.xyz)
- **Resume:** [resume.xeylous.xyz](https://resume.xeylous.xyz)
- **GitHub:** [@xeylous](https://github.com/xeylous)
- **LinkedIn:** [apurv-sinha-xeylous](https://linkedin.com/in/apurv-sinha-xeylous)
- **Twitter:** [@xeylous](https://twitter.com/xeylous)

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/xeylous">Apurv Sinha</a>
</p>