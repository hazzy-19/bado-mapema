# Bado Mapema

Bado Mapema is a functional architecture and behavioral savings dashboard designed with a premium, glassmorphic dark mode aesthetic. It features an interactive UI with animated metrics, a pet state machine, and data workflows.

## Features
- **Premium Glassmorphic UI**: Deep slate backgrounds, colorful neon glows, and smooth micro-animations.
- **Dark/Light Mode**: Integrated theme toggle utilizing smart CSS inversion perfectly preserving all high-contrast accents.
- **Interactive Architecture Graph**: Visualize the core models and logic vectors.
- **Behavioral Savings State**: Real-time updates for "Pet State Machine" based on saving milestones. 

## Getting Started

### 1. Prerequisites
- Node.js (v18+)
- npm or yarn

### 2. Environment Variables

Create a `.env` or `.env.local` file in the root directory (one has been provided for you as `.env.example`). You will need to add your Render backend URL so the frontend can communicate with the server.

```bash
NEXT_PUBLIC_BACKEND_URL="https://your-backend-instance.onrender.com"
```

### 3. Installation

Install the dependencies:

```bash
npm install
# or
yarn install
```

### 4. Running the Development Server

Start the local server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Tech Stack
- Frontend: Next.js (App Router), React, TypeScript
- Styling: Tailwind CSS v4, Lucide React (Icons)
- Visualizations: xyflow/react (Architecture Map)
