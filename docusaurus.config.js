module.exports = {
    title: 'Invăţarea uşoară a chimiei',
    tagline: 'Invăţăm prin experimente',
    url: 'https://lucidumitru.github.io',
    baseUrl: '/invatare-usoara-chimie/',
    favicon: 'img/favicon.ico',
    organizationName: 'lucidumitru', // Usually your GitHub org/user name.
    projectName: 'invatare-usoara-chimie', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Invăţarea uşoară a chimiei',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            links: [{
                    to: 'docs/chimie/clasa7/chimie-clasa7-capitolul1',
                    activeBasePath: 'docs',
                    label: 'Documentaţii',
                    position: 'left',
                },
                { to: 'blog', label: 'Blog', position: 'left' },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Documentaţii',
                    items: [{
                            label: 'Invăţarea uşoară a chimiei',
                            to: 'docs/chimie/clasa7/chimie-clasa7-capitolul1',
                        },
                        {
                            label: 'Ghidul de chimie versus accidentele',
                            to: 'docs/ghidul-de-chimie-versus-accidentari',
                        },
                    ],
                },
                {
                    title: 'Comunitate',
                    items: [{
                            label: 'Facebook',
                            href: 'https://www.facebook.com/danielaelena.dumitru.7',
                        },
                        {
                            label: 'Youtube',
                            href: 'https://www.youtube.com/channel/UCCVEIyugABtorLa_FIEPazw?view_as=subscriber',
                        },
                    ],
                },
                {
                    title: 'Extra',
                    items: [{
                            label: 'Blog',
                            to: 'blog',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Dumitru Elena-Daniela: Invatarea usoara a chimiei. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    homePageId: 'doc1',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};