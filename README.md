# SwiftMeta

SwiftMeta is a technology company building communication and learning platforms. This is the official documentation and product website for SwiftMeta.

## About SwiftMeta

- **SonaTG**: A live chat application for real-time communication and collaboration. [Live now](https://sonatg.app)
- **ClassTour**: An upcoming interactive learning platform for Grade 11–12 students in Mathematics, Physical Sciences, and Life Sciences.

---

## Quick Start

This site is built with **Next.js**, **React**, **Tailwind CSS**, **MDX**, and **TypeScript**.

### Installation

```bash
git clone https://github.com/Ymffuture/Swiftmetadocs.git
cd Swiftmetadocs
pnpm install
pnpm generate-content-json
pnpm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site locally.

### Production Build

```bash
pnpm run build
pnpm run start
```

---

## Technology Stack

- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS with custom oklch color theming
- **Content**: MDX (Markdown + React components)
- **Search**: Fuzzy search with JSON-based indexing
- **Type Safety**: TypeScript
- **Code Quality**: Biome for linting and formatting

---

## Features

### Content Management
- MDX support with custom React components
- Flexible document structure with multi-level navigation
- Auto-generated table of contents
- Syntax highlighting with theme support

### User Experience
- Light/dark mode with system preference detection
- Responsive design for all screen sizes
- Fuzzy search with term highlighting
- Smooth page transitions

### Developer Experience
- Type-safe configuration and routes
- SEO-ready with dynamic meta tags
- Fast build times with optimized imports
- Easy to customize colors and branding

---

## Project Structure

```
├── app/                    # Next.js app directory
├── components/             # Reusable React components
├── contents/docs/          # MDX documentation files
├── settings/               # Site configuration
├── styles/                 # Global CSS and theming
├── lib/                    # Utilities and helpers
├── public/                 # Static assets
└── scripts/                # Build and content scripts
```

---

## Contributing

Contributions and feedback are welcome! Please feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request
4. Open an issue with suggestions

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Contact

For questions, support, or partnerships:

**SwiftMeta**  
GitHub: [github.com/Ymffuture](https://github.com/Ymffuture)  
Website: [https://swiftmeta-docs.vercel.app](https://swiftmeta-docs.vercel.app)  

**SonaTG**: [https://sonatg.app](https://sonatg.app)
