export default {
  title: 'StellarNovaUI',
  base: process.env.NODE_ENV === 'production' ? '/stellarnovaui/' : '/',
  themeConfig: {
    nav: [{ text: 'Document', link: '/guide/introduce' }],
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            {
              text: 'Introduce',
              link: '/guide/introduce'
            },
            {
              text: 'Quick Start',
              link: '/guide/quickstart'
            }
          ]
        },
        {
          text: 'Development',
          items: [
            {
              text: 'Directory Structure',
              link: '/develop/'
            },
            {
              text: 'Component Development',
              link: '/develop/component'
            },
            {
              text: 'Global Components',
              link: '/develop/global'
            },

            {
              text: 'Build and Deploy',
              link: '/develop/build'
            }
          ]
        },
        {
          text: 'Components',
          items: [
            {
              text: 'Button',
              link: '/components/button/'
            },
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/markliu2013/stellarnovaui' }]
  }
};
