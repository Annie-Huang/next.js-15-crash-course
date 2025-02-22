import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/mock-users(.*)']);

export default clerkMiddleware(async (auth, req) => {
  // the .protect function will direct user to the sign up page if they are not signed in....
  // e.g. when you are sign out and go to http://localhost:3000/mock-users, it will direct you to the sign in page.
  //      after sign in it will direct you back into mock-users page.
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
