# 🌐 Vandith Thotla — Portfolio

This repository contains the source code for my **personal portfolio website and art gallery**, hosted at  
👉 [vandiththotla.github.io](https://vandiththotla.github.io)

It highlights my **professional experience, technical skills, projects, education**, and a **dedicated gallery** showcasing my graphite, charcoal, and mixed-media artworks.

---

## ✨ Features

- **Responsive Design** — Optimized for mobile, tablet, and desktop.
- **Hero Section with Typed.js** — Animated professional roles (*Software Engineer, Full-Stack Developer, Cloud Practitioner, Java Specialist, Angular/React Enthusiast*).
- **Sticky Navigation + Smooth Scroll** — Accessible and user-friendly site flow.
- **Contact Bar with Icons** — Direct links for phone, email, GitHub, LinkedIn.
- **Projects Showcase** — Academic and professional projects displayed in a responsive card grid.
- **Skills Grid** — Organized by categories (Languages, Cloud, Data, Testing, Tooling).
- **Education Cards** — Degrees, years, and GPAs.
- **Interactive Art Gallery**  
  - Masonry layout for artworks of different sizes.  
  - Filter by *Graphite/Charcoal, Painting, Mixed-Media*.  
  - Lightbox viewer with **keyboard navigation** and **escape-to-close**.

---

## 🚀 Getting Started

### 1. Clone this repository
```bash
git clone https://github.com/vandiththotla/vandiththotla.github.io.git
cd vandiththotla.github.io
```

### 2. Open locally
Just open `index.html` in your browser.  
(Works without a server since it’s pure HTML, CSS, and JS.)

### 3. Run with Live Server (optional, for dev)
```bash
npm install -g live-server
live-server
```

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Flexbox, Grid, Masonry, clamp-based typography)  
- **Interactivity:** Vanilla JavaScript + [Typed.js](https://github.com/mattboldt/typed.js)  
- **Fonts:** [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)  
- **Hosting:** GitHub Pages  

---

## 📂 Project Structure

```
.
├── index.html          # Portfolio homepage
├── gallery.html        # Art gallery page
├── styles.css          # Global + gallery styles
├── app.js              # JS (typed animation, reveal-on-scroll, lightbox)
├── creative/
│   └── artworks/       # Artwork images
├── docs/
│   └── README.full.md  # Extended documentation
└── README.md           # Short recruiter-friendly README
```

---

## 🖼️ Gallery Details

Artworks are stored in `/creative/artworks/` and listed in `gallery.html` as:

```js
{ 
  src: 'creative/artworks/041_logan.jpg',
  title: 'Old Man Logan',
  year: 2019,
  type: 'Graphite/Charcoal'
}
```

- **Filter buttons** allow visitors to switch categories.  
- **Captions** show *title, year, and medium*.  
- **Lightbox** supports clicking, keyboard navigation, and escape key to close.  

---

## 📸 Preview

### Hero Section
Shows my name, animated professional roles, and a contact bar.

### Projects Section
Three-column responsive grid of professional & academic projects.

### Art Gallery
Masonry-style grid with filters, categories, and immersive lightbox view.

---

## 🌐 Deployment (GitHub Pages)

1. Commit & push changes to the `main` branch.
2. Go to **Repository → Settings → Pages**.
3. Set source to `main` branch, `/root`.
4. Site will be live at:  
   `https://<username>.github.io`

---

## 📬 Contact

- 📧 Email: [vandiththotla15@gmail.com](mailto:vandiththotla15@gmail.com)  
- 💼 LinkedIn: [linkedin.com/in/vandiththotla](https://linkedin.com/in/vandiththotla)  
- 💻 GitHub: [github.com/vandiththotla](https://github.com/vandiththotla)

---

## ⚖️ License

This project is licensed under the MIT License.  
You may fork, reuse, or adapt with attribution (appreciated but not required).
