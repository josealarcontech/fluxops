import express from 'express';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import { getAuth } from '@clerk/express';

const app = express();

// Add Clerk middleware
app.use(
  clerkMiddleware({
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY!,
    secretKey: process.env.CLERK_SECRET_KEY!,
  })
);

// Public route
app.get('/api/public', (_req, res) => {
  res.json({ message: 'Anyone can access this' });
});

// Protected route:
app.get('/api/protected', requireAuth(), (req, res) => {
  // access Clerk-authenticated user session using getAuth
  const { userId, sessionId } = getAuth(req);
  res.json({
    userId,
    sessionId
  });
});


app.get('/api/admin-area', requireAuth(), (req, res) => {
  const { userId } = getAuth(req);
  return res.json({message: `Welcome to the admin area, user ${userId}`});
  // Fetch user from your DB and check roles...
  // Return 403 if not authorized
});

export default app;
