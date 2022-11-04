module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {}
    },
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: '@elegantstack/gatsby-theme-flexiblog-agency',
      options: {
        sources: {
          local: true
        }
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'G5 NEWS',
    name: 'G5News',
    description: 'Goiás em tempo real',
    address:
      'Av. T-4, Ed. Buena Vista Office Design - 16° andar - 1613 Goiânia - GO',
    email: 'contato@g5news.com.b',
    phone: '(62) 3988-7592',

    //Site Social Media Links
    social: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/siteg5news'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/SiteG5News'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/g5newsgoias/'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'Our Team',
        slug: '/authors'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Links rápidos',
        items: [
          {
            name: 'Anuncie conosco',
            slug: '/contact'
          },
          {
            name: 'Quem Somos',
            slug: '/about'
          },
          {
            name: 'Fale conosco',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
