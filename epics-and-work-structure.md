# Project Epics and Work Structure

## Epic 1: Project Setup & Infrastructure

- Ticket 1.1: Initialize GitHub repository with README and license
- Ticket 1.2: Set up frontend with React + Vite
- Ticket 1.3: Install frontend dependencies (React Router, React Query, TailwindCSS or Material UI, Axios/fetch)
- Ticket 1.4: Set up backend with Node.js + Express or NestJS
- Ticket 1.5: Configure database connection (PostgreSQL/MongoDB) with ORM (Prisma/Sequelize/Mongoose)
- Ticket 1.6: Create .env config files for frontend and backend environments
- Ticket 1.7: Dockerize backend, frontend, and database for local development
- Ticket 1.8: Set up GitHub Actions for linting, testing, and deployment pipelines

## Epic 2: Authentication & Authorization

- Ticket 2.1: Design User schema with roles (Admin, Dispatcher, Technician)
- Ticket 2.2: Implement signup and login backend APIs with JWT authentication
- Ticket 2.3: Create React pages for login, signup, and logout flows
- Ticket 2.4: Integrate JWT handling in React (store token securely, refresh token if applicable)
- Ticket 2.5: Implement protected routes in React Router based on user roles

## Epic 3: Client (CRM) Management

- Ticket 3.1: Design Client data model
- Ticket 3.2: Build CRUD backend API endpoints for clients
- Ticket 3.3: Create React client list page with pagination and search/filtering
- Ticket 3.4: Create client detail/edit page with form validation using React Hook Form or Formik
- Ticket 3.5: Connect frontend to backend using React Query for data fetching and mutations
- Ticket 3.6: Implement error handling and loading states on client pages

## Epic 4: Job Scheduling & Management

- Ticket 4.1: Design Job data model with necessary fields
- Ticket 4.2: Build CRUD backend API endpoints for jobs
- Ticket 4.3: Create React job list page with filters (status, technician, date)
- Ticket 4.4: Build job creation and edit forms with client and staff assignment
- Ticket 4.5: Use React Query for job data fetching, mutation, and cache updates
- Ticket 4.6: Add job status update feature in UI (buttons or dropdown)
- Ticket 4.7: Create job detail page showing linked client info and notes

## Epic 5: Staff Management

- Ticket 5.1: Design Staff data model
- Ticket 5.2: Build CRUD backend API endpoints for staff
- Ticket 5.3: Create React staff list and detail pages
- Ticket 5.4: Add staff selection UI in job creation/edit forms

## Epic 6: Dashboard & Reporting

- Ticket 6.1: Build backend summary API returning key stats (clients count, upcoming jobs, completed jobs)
- Ticket 6.2: Create React dashboard with stat cards and upcoming jobs list
- Ticket 6.3: Optional: integrate simple charts with a library like Recharts or Chart.js

## Epic 7: Notifications & Integrations

- Ticket 7.1: Set up email service provider (SendGrid or Nodemailer SMTP)
- Ticket 7.2: Implement backend email notifications on job assignment
- Ticket 7.3: Create in-app notification UI component in React
- Ticket 7.4: Integrate map component (Google Maps React or Leaflet) to display job locations
- Ticket 7.5: Add map view in job details or dashboard

## Epic 8: Testing & Deployment

- Ticket 8.1: Write backend unit tests (Jest or Mocha) for auth, clients, jobs
- Ticket 8.2: Write frontend unit tests (React Testing Library) for key components and pages
- Ticket 8.3: Add integration/end-to-end tests with Cypress or Playwright (optional)
- Ticket 8.4: Configure deployment pipelines for frontend (Vercel) and backend (Railway, Render, or similar)
- Ticket 8.5: Write seed scripts to populate demo data for local and production environments
- Ticket 8.6: Complete README with setup instructions, architecture notes, and contribution guidelines

## Epic 9: UI/UX Polish

- Ticket 9.1: Implement responsive design for mobile and desktop with TailwindCSS or Material UI
- Ticket 9.2: Add loading spinners and error messages throughout the UI
- Ticket 9.3: Add consistent status badges and color coding for job/client statuses
- Ticket 9.4: Optional: implement dark mode toggle using CSS variables or context
- Ticket 9.5: Improve accessibility (ARIA roles, keyboard navigation)
