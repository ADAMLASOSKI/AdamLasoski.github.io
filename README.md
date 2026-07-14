# Adam Lasoski - IT Student Portfolio

A modern, dark-themed portfolio website showcasing IT student credentials, skills, and projects.

## 🌐 Features

- **Dark Theme with Gradient Accents** - Beautiful blue and cyan color scheme
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Fade-in effects and hover interactions throughout
- **Multiple Sections**:
  - Hero section with call-to-action
  - About me section
  - Technical skills organized by category
  - Featured projects showcase
  - Contact information
  - Navigation bar with smooth scrolling

## 📁 Project Structure

```
AdamLasoski.github.io/
├── index.html      # Main portfolio page
├── styles.css      # Dark theme styling with gradients
├── script.js       # Smooth scrolling and animations
└── README.md       # This file
```

## 🎨 Customization Guide

### 1. Update Personal Information

Edit `index.html` and replace:
- Your name in the hero section (`<h1>`)
- Email address in the contact section
- GitHub and LinkedIn URLs in the contact section
- About me content to match your background
- Skills section with your actual technical skills
- Projects section with your real projects

### 2. Customize Projects

In the **Projects Section** of `index.html`, update each project card:
- Project names
- Descriptions
- Links (change `#` to actual URLs)
- Technology tags

Example:
```html
<div class="project-card">
    <div class="project-header">
        <h3>My Awesome Project</h3>
        <div class="project-links">
            <a href="https://demo.example.com" class="project-link">Live</a>
            <a href="https://github.com/user/project" class="project-link">Code</a>
        </div>
    </div>
    <p class="project-description">
        Built a web app using React and Node.js...
    </p>
    <div class="project-tags">
        <span class="tag">React</span>
        <span class="tag">Node.js</span>
    </div>
</div>
```

### 3. Adjust Colors (Optional)

Edit `styles.css` to change the theme. Find the `:root` section:
```css
:root {
    --accent-blue: #3b82f6;
    --accent-cyan: #06b6d4;
    --accent-purple: #a78bfa;
    /* ... other colors ... */
}
```

## 🚀 How to Use

1. **View locally**: Open `index.html` in your web browser
2. **Deploy**: This is already set up for GitHub Pages at `https://AdamLasoski.github.io`
3. **Make changes**: Edit `index.html`, `styles.css`, or `script.js` and commit to the `main` branch

## 📋 Quick Customization Checklist

- [ ] Replace name in hero section
- [ ] Update about section with your bio
- [ ] Add your actual skills to the skills section
- [ ] Add 3-4 of your best projects with links
- [ ] Update contact information
- [ ] Update social media links (GitHub, LinkedIn)
- [ ] Customize colors if desired
- [ ] Test on mobile devices

## 💡 Tips for IT Students

- Keep projects links up-to-date with your GitHub repositories
- Add brief, meaningful descriptions of what you learned from each project
- Organize skills by proficiency or category
- Update portfolio regularly as you learn new technologies
- Consider adding a blog section or certifications page later

## 📱 Browser Support

Works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

---

**Happy coding! 🚀**
