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
                  buildHookId: '5ee14d7f8f13520236562898',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-oy49dgfi',
                  apiId: '8537e367-206d-4222-9c86-ed99e1f75fb4'
                },
                {
                  buildHookId: '5ee14d7fa92978b95f3c6ad0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c185zume',
                  apiId: 'f8485adf-8711-4c4c-a1f1-3947023dabe5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/james-randolph-50/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c185zume.netlify.app', category: 'apps'}
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
