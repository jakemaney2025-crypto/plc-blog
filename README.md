# PLC Blog

A personal blog website dedicated to Programmable Logic Controller (PLC) topics and industrial automation.

## Features

- ✅ **Markdown-based blog posts** - Easy content management with front matter support
- ✅ **Categories & Tags** - Organize content by topic and tags
- ✅ **Dark Mode** - Toggle between light and dark themes
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ✅ **Fast Performance** - Built with Next.js 14 for optimal speed
- ✅ **SEO Optimized** - Meta tags and structured data for better search results
- ✅ **Static Generation** - Fast page loads with pre-rendered content

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React-based framework with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Content**: Markdown files with front matter (YAML)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support
- **Markdown Processing**: [gray-matter](https://github.com/jonschlinkert/gray-matter) & [remark](https://github.com/remarkjs/remark)
- **Date Formatting**: [date-fns](https://date-fns.org/)

## Project Structure

```
/PLC-blog
├── public/                    # Static assets
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── blog/             # Blog pages
│   │   ├── categories/       # Category pages
│   │   └── tags/             # Tag pages
│   ├── components/           # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ThemeProvider.tsx
│   ├── lib/                  # Utility functions
│   │   ├── posts.ts         # Blog post utilities
│   │   └── utils.ts         # Helper functions
│   ├── styles/              # Global styles
│   │   └── globals.css
│   └── content/
│       └── posts/           # Markdown blog posts
├── .eslintrc.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository (or extract the files):
   ```bash
   cd /home/jake/PLC-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Creating Blog Posts

Create new Markdown files in `src/content/posts/` with the following format:

```markdown
---
title: Post Title
date: 2024-01-15
category: Category Name
tags: [tag1, tag2, tag3]
excerpt: Brief summary of the post
---

# Post Title

Your content here...
```

**Front Matter Fields:**
- `title` (required): Post title
- `date` (required): Publication date (YYYY-MM-DD format)
- `category` (required): Post category for organization
- `tags` (required): Array of tags for classification
- `excerpt` (required): Brief summary for previews

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Features Explained

### Dark Mode
- Automatic detection of system preferences
- Manual toggle button in the header
- Persistent storage in localStorage
- Smooth transitions between themes

### Blog Organization
- **Home Page**: Displays latest 5 posts with excerpt
- **Blog Page**: List all posts with filtering
- **Category Pages**: Browse posts by category
- **Tag Pages**: Browse posts by tags
- **Post Navigation**: Previous/Next links on post pages

### Performance
- Static generation of all blog pages
- Incremental Static Regeneration (ISR) for new posts
- Optimized images and assets
- Minimal CSS bundle

## Customization

### Update Site Metadata
Edit `src/app/layout.tsx` to update site title and description.

### Change Colors
Modify the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0066cc',
  secondary: '#333333',
},
```

### Add Features
- Comments: Integrate [Giscus](https://giscus.app/)
- Search: Add full-text search functionality
- Analytics: Integrate with Google Analytics or Vercel Analytics
- Social Sharing: Add social media sharing buttons

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Deploy with one click

### Other Platforms
- **Netlify**: Supports Next.js with zero configuration
- **Self-hosted**: Use `npm run build` and deploy to your server

## Tips & Best Practices

1. **Post Naming**: Use kebab-case for file names (e.g., `my-post-title.md`)
2. **Dates**: Keep dates in YYYY-MM-DD format for consistency
3. **Categories**: Keep category names consistent across posts
4. **Images**: Place images in `public/images/` and reference with `/images/`
5. **SEO**: Write descriptive excerpts (150-160 characters)

## Troubleshooting

### Posts not showing?
- Check that markdown files are in `src/content/posts/`
- Ensure front matter is valid YAML
- Restart the development server

### Theme not switching?
- Check that localStorage is enabled in your browser
- Clear browser cache and reload
- Check browser console for JavaScript errors

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)

## Future Enhancements

- [ ] Full-text search with filtering
- [ ] Comment system (Giscus)
- [ ] Related posts suggestions
- [ ] Reading time estimation
- [ ] Email newsletter signup
- [ ] Social media sharing buttons
- [ ] Analytics integration

## License

This project is open source and available under the MIT License.

## Author

Created as a personal blog for PLC and industrial automation topics.

---

**Start writing your PLC articles today!** 🚀
