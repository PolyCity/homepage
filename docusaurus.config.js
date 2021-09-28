/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'The leaf is always greener on PolyCityDex',
  tagline: 'Swap, earn, stack yields on a decentralized, community driven platform. Welcome home to DeFi.',
  url: 'https://polycity.xyz',
  baseUrl: '/homepage/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/polycity.png',
  organizationName: 'polycity', // Usually your GitHub org/user name.
  projectName: 'homepage', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/PolyCity/polycity-homepage.git/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/PolyCity',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PolyCityDex',
        logo: {
          alt: 'PolyCityDex Protocol Logo',
          src: 'img/polycity.png',
        },
        items: [{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorials',
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left'
          },
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/PolyCity',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://twitter.com/PolyCityFinance',
            label: 'Twitter',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'Telegram',
            position: 'right',
          },
          {
            href: 'https://discord.gg/We7GHYMVVA',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [{
            title: 'Learn',
            items: [{
                label: 'Tutorials',
                to: 'docs/intro',
              },
              {
                label: 'How to Swap',
                to: 'docs/tutorials/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [{
                label: 'Telegram',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/PolyCityFinance',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/We7GHYMVVA',
              },
            ],
          },
          {
            title: 'More',
            items: [{
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/PolyCity',
              },
            ],
          },
          {
            title: 'Open Source Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [{
                label: 'Privacy',
                href: 'https://opensource.facebook.com/legal/privacy/',
              },
              {
                label: 'Terms',
                href: 'https://opensource.facebook.com/legal/terms/',
              },
              {
                label: 'Data Policy',
                href: 'https://opensource.facebook.com/legal/data-policy/',
              },
              {
                label: 'Cookie Policy',
                href: 'https://opensource.facebook.com/legal/cookie-policy/',
              },
            ],
          },
        ],
        logo: {
          alt: 'PolyCityDex Open Source Logo',
          src: 'img/polycity.png',
          href: 'https://app.polycity.xyz/',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} PolyCityDex. Built with 🖖 in Auckland.`,
      },
    }),
  customFields: {
    feature: 'DeFi Ecosystem 100% decentralized finance',
    welcome: 'PolyZen',
    porfolio: 'Access multi-chains with zero fee and gasless transactions on PolyCityDex'
  },
});