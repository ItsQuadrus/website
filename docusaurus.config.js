module.exports = {
  title: 'CloudNetService',
  tagline: 'The CloudNet Network Environment Technology',
  url: 'https://cloudnetservice.eu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cloudnetservice', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  themeConfig: {
    navbar: {
      title: 'CloudNetService',
      logo: {
        alt: 'CloudNetService Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/3.3/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/cloudnetservice/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/3.3/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.cloudnetservice.eu',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/CloudNetService',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/CloudNetService',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CloudNetService. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/cloudnetservice/website/edit/master/',
          includeCurrentVersion: false,
          versions: {
            "3.3": {
              "label": "CloudNet v3",
              "path": "3.3"
            },
            /*"2.2": {
              "label": "CloudNet v2",
              "path": "2.2"
            }*/
          },
          lastVersion: "3.3",
        },
        blog: {
          showReadingTime: true,
          editUrl:
              'https://github.com/cloudnetservice/website/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};