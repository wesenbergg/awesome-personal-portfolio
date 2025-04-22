# Awesome Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://boriss.uiux.fi)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Looks great on all devices
- **Dark/Light Mode** - Toggle between themes with a single click
- **Bilingual** - Available in both English and Finnish
- **Modern UI** - Built with shadcn/ui components
- **Performance Optimized** - Fast loading and rendering

## 💻 Technologies

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **Vite** - Build tool
- **React Router** - Navigation
- **React Hook Form** - Form handling
- **Zod** - Validation
- **Internationalization** - Multi-language support

## 🏗️ Project Structure

```
src/
├── components/     # UI components
├── context/        # React contexts (Language, Theme)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
└── styles/         # CSS and Tailwind styles
```

## 🛠️ Development

### Prerequisites

- Node.js (v18+)
- pnpm

### Installation

```sh
# Clone the repository
git clone https://github.com/wesenbergg/awesome-personal-portfolio.git

# Navigate to the project directory
cd boriss-portfolio-palace

# Install dependencies
npm install
# or
pnpm install

# Start the development server
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:8080`

### Build

```sh
npm run build
# or
pnpm build
```

## 📝 Coding Standards

- **TypeScript** for all new files
- **Functional components** with hooks
- **i18n** using the `t()` function from `useLanguage` hook
- **Tailwind CSS** for styling

## 📱 Contact

- Website: [boriss.uiux.fi](https://boriss.uiux.fi)
- GitHub: [wesenbergg](https://github.com/wesenbergg)

## 📄 License

See the [LICENSE](LICENSE) file for details.
