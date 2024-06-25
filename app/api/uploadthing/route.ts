// Resource: https://docs.uploadthing.com/nextjs/appdir#create-a-nextjs-api-route-using-the-filerouter
// Copy paste (be careful with imports)


import { createNextRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

export const maxDuration = 60; // This function can run for a maximum of 5 seconds
export const dynamic = 'force-dynamic';

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});
