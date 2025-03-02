# Frontend Developer Case Study

This project is a solution for the Frontend Developer Case Study provided by [Company Name]. It showcases a modern e-commerce application built with a micro frontend architecture, adhering to SOLID principles and the 12-Factor methodology.

## Project Overview
This application consists of a host app and two remote apps:
- **host/**: The main Next.js application that integrates remote modules and manages state with Redux and RTK Query.
- **products-remote/**: A Next.js remote app fetching and displaying products from the Fake Store API.
- **basket-remote/**: A React remote app displaying and managing the shopping basket.

## Technologies Used
- **Frameworks**: React (18), Next.js (13.5.6)
- **UI Library**: Ant Design (5.x.x)
- **Programming Language**: TypeScript
- **State Management**: Redux Toolkit (RTK Query, Redux)
- **API**: Fake Store API (https://fakestoreapi.com/)
- **Micro Frontend Architecture**: Webpack 5 Module Federation

## Setup Instructions
1. **Clone the Repository**:
   git clone https://github.com/hkardouni/frontend-case-study.git
   cd frontend-case-study

## Install Dependencies:
   cd host && npm install
   cd ../products-remote && npm install
   cd ../basket-remote && npm install

## Run the Applications:
- **Host**: cd host && npm run dev (http://localhost:3000)
- **Products Remote**: cd products-remote && npm run dev (http://localhost:3001)
- **Basket Remote**: cd basket-remote && npx webpack serve (http://localhost:3002)
- **Access the App**: Open http://localhost:3000 in your browser.

## Deployment
The code is developed in the test/v1.0.0 branch.
For production, merge test/v1.0.0 into prod/v1.0.0 after testing:

git checkout prod/v1.0.0
git merge test/v1.0.0
git push origin prod/v1.0.0

## GitHub Repository
(https://github.com/hkardouni/frontend-case-study)

## Features
- **Product Listing**: Fetches products from Fake Store API using RTK Query.
- **Add to Basket**: Adds products to the shopping basket with a responsive UI.
- **Remove from Basket**: Removes items from the basket with real-time updates.
- **Micro Frontend**: Modular architecture with separate host and remote apps.

## SOLID Principles
- **Single Responsibility**: Each component (e.g., product listing, basket) has one responsibility.
- **Open/Closed**: Components are extensible via props without modifying core logic.
- **Liskov Substitution**: Not heavily applied (no inheritance used).
- **Interface Segregation**: Props are tailored to specific component needs.
- **Dependency Inversion**: API calls abstracted via RTK Query.

## 12-Factor Methodology
- **Codebase**: Single Git repository for all apps.
- **Dependencies**: Declared in package.json for each module.
- **Config**: Supports environment variables (e.g., API URL in .env).
- **Backing Services**: Fake Store API as a decoupled service.
- **Build & Run Separation**: Development uses npm run dev and Webpack.
- **Stateless Processes**: Basket state managed in Redux, not local components.
- **Port Independence**: Each app runs on a separate port (3000, 3001, 3002).
- **Concurrency**: Scalable via micro frontend structure.
- **Disposability**: Apps can be stopped and restarted cleanly.
- **Dev/Prod Parity**: Minimal differences (e.g., dev uses local ports).
- **Logs**: Console logs implemented for debugging.
- **Admin Processes**: Debugging via browser DevTools.

## Bonus Features
- **UI**: Enhanced with Ant Design for a polished look.
- **Type Safety**: Full TypeScript support across all modules.