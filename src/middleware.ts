import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  ignoredRoutes: ["/api/webhooks(.*)"],
  publicRoutes: ["/", "/About", "/Services", "/Contact"]
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};