# StudentPortal — Student Directory

A responsive Student Directory built with React components and props, Vite, and Bootstrap 5. 

## Features
- Responsive Bootstrap navbar, breadcrumb, grid, cards, buttons, pagination, alert, and footer
- Reusable `Navbar`, `StudentCard`, and `StudentModal` React components with props
- Search students by name, ID, major, or tag
- View a student's profile in a modal
- Add and delete students (in-memory demo state)
- Responsive layout for desktop, tablet, and mobile

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

> This is a front-end demonstration. Student changes are stored in React state and reset when the page is refreshed; there is no backend/database connected.

## GitHub submission

Create a new empty repository on GitHub, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Build responsive student directory with React and Bootstrap"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/student-directory.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. After pushing, submit the repository URL and the included UI screenshot.
