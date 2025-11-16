# GitKraken Guide

A beautiful, comprehensive, and interactive guide to using GitKraken - the legendary Git GUI client.

## Features

- **Interactive Learning** - Step-by-step guides with practical examples and real-world workflows
- **Progress Tracking** - Mark lessons as complete and track your learning progress
- **Bookmarking** - Save important sections for quick reference
- **Search Functionality** - Quickly find topics across all guide sections
- **Dark Mode** - Beautiful dark theme with seamless toggling
- **Keyboard Shortcuts** - Learn essential shortcuts for Windows, Mac, and Linux
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Local Storage** - Your progress and preferences are saved locally

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe code throughout
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **ShadCN UI** - Beautiful, accessible component library built on Radix UI
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd GitKraken-Cheat-Guide
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
GitKraken-Cheat-Guide/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # ShadCN UI components
│   │   ├── Header.tsx    # Main header with search and dark mode toggle
│   │   ├── Sidebar.tsx   # Navigation sidebar
│   │   └── Layout.tsx    # Main layout wrapper
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Homepage with overview
│   │   ├── GuideSection.tsx   # Individual guide section pages
│   │   └── SearchResults.tsx  # Search results page
│   ├── hooks/            # Custom React hooks
│   │   ├── useLocalStorage.ts # Local storage hook
│   │   ├── useProgress.ts     # Progress tracking hook
│   │   └── usePreferences.ts  # User preferences hook
│   ├── data/             # Content and data
│   │   └── guideContent.ts    # All guide content
│   ├── types/            # TypeScript types
│   │   └── index.ts      # Type definitions
│   ├── lib/              # Utility functions
│   │   └── utils.ts      # Utility helpers
│   ├── App.tsx           # Main App component with routing
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## Guide Content

The guide covers the following topics:

1. **Getting Started** - Installation, setup, and opening repositories
2. **Interface Overview** - Understanding the GitKraken interface
3. **Basic Git Operations** - Staging, committing, pushing, and pulling
4. **Branching Strategies** - Creating, switching, and managing branches
5. **Merging & Conflicts** - Merging branches and resolving conflicts
6. **Rebasing** - Interactive rebasing and squashing commits
7. **Stashing Changes** - Temporarily saving work without committing
8. **Remote Repositories** - Working with GitHub, GitLab, and other remotes
9. **Advanced Features** - Git Flow, submodules, file history, and integrations

## Local Storage

The application uses browser localStorage to save:

- **Progress** - Completed and bookmarked sections
- **Preferences** - Dark mode, font size, sidebar state
- **Last Visited** - Resume where you left off

Data is stored with the following keys:
- `gitkraken-guide-progress` - Learning progress
- `gitkraken-guide-preferences` - User preferences

## Contributing

Contributions are welcome! To add or improve content:

1. Edit `src/data/guideContent.ts` to add new sections or update existing content
2. Follow the existing structure for consistency
3. Test your changes locally
4. Submit a pull request

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized build will be in the `dist/` directory. You can preview it with:

```bash
npm run preview
```

## Deployment

The built application is a static site and can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload the contents of the `dist/` folder after building.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [ShadCN UI](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)

---

**Happy Learning!** Master GitKraken and become a Git visualization expert!
