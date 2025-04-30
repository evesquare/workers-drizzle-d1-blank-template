import { getCloudflareContext } from '@opennextjs/cloudflare';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono()
  .basePath('/api')
  .get('/hello', (c) => {
    return c.json({ message: `Hello` });
  });

export type AppType = typeof app;

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
