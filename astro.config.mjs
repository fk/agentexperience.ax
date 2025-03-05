import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon"
import rehypeFigure from '@microflash/rehype-figure'
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://agentexperience.ax',
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      // because we have a lot of in flight page structures, we are
      // allow listing what goes into the sitemap.
      filter: (page) => {

        const {pathname} = new URL(page);

        switch (pathname){
          case '/':
          case '/articles/':
          case '/research/':
            return true;
          default:
            break;
        }

        if (pathname.startsWith('/research/')) {
          return true;
        }

        if (pathname.startsWith('/concepts/')) {
          return true;
        }

        return false;
      }
    })
  ],
  markdown: {
    rehypePlugins: [rehypeFigure],
  },
});
