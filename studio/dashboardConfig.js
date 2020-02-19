export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4c869d660f7f6df14ecef2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xwtwsv5t',
                  apiId: 'd67632a3-6c41-4376-a574-92bd3ff1295f'
                },
                {
                  buildHookId: '5e4c869d660f7f72894ecefe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yzfjgx9s',
                  apiId: '166b8283-3602-4776-8b5e-c50bbe3c374c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/candlesupply/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yzfjgx9s.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
