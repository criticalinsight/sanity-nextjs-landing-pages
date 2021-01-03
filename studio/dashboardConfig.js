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
                  buildHookId: '5ff1847280da589cc89fa6db',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jfe2awrw',
                  apiId: 'e6d59b6e-fb08-45b4-959e-4312256649ab'
                },
                {
                  buildHookId: '5ff184723aa240984a35c7b5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-j2z1kneq',
                  apiId: '734ab27d-b29c-454e-a0cc-447b4bcb26d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/criticalinsight/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-j2z1kneq.netlify.app', category: 'apps'}
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
