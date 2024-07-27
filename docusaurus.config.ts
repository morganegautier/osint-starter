import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OSINT Starter Pack',
  tagline: 'Open Source Intelligence (OSINT) tools and resources',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.osintstarter.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'morganegautier',
  projectName: 'osint-starter',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  scripts: [
    { src: 'https://a.osintstarter.com/js/script.outbound-links.js', defer: true, 'data-domain': 'osintstarter.com' },
  ],

  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: './docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/morganegautier/osint-starter/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/png/logo-color.png',
    navbar: {
      title: 'OSINT Starter Pack',
      logo: {
        alt: 'OSINT Starter Pack Logo',
        src: 'img/svg/logo-color.svg',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'challenges',
          label: 'Challenges',
        },
        {
          href: 'https://github.com/morganegautier/osint-starter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          // title: 'Docs',
          items: [
            {
              label: 'Challenges',
              to: '/challenges',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/morganegautier/osint-starter',
            },
          ],
        },
      ],
      copyright: `MIT License - Copyright © ${new Date().getFullYear()} Morgane Gautier`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
