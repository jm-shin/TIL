const path = require('path');
let { getArticles } = require(path.resolve('.vuepress/util'))

module.exports = {
  title: '개발자 신종민',
  description: 'Today I Learned',
  base: '/TIL/',
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/53161335?v=4',
    nav: [
      { text: 'Home', link: '/' },
      {text: 'About', link: '/About/'},
    ],
    lastUpdated: true,
    smoothScroll: true,
    sidebar: [
      {
        title: 'Solution',
        collapsable: true,
        children: getArticles('Solution')
      },
      {
        title: 'Books',
        collapsable: true,
        children: getArticles('Books')
      },
      {
        title: 'Linux',
        collapsable: true,
        children: getArticles('Linux')
      },
      {
        title: 'Docker',
        collapsable: true,
        children: getArticles('Docker')
      },
      {
        title: 'Database',
        collapsable: true,
        children: getArticles('Database')
      },
      {
        title: 'Vuepress',
        collapsable: true,
        children: getArticles('Vuepress')
      },
      {
        title: 'Front',
        collapsable: true,
        children: getArticles('Front')
      },
      {
        title: 'ETC',
        collapsable: true,
        children: getArticles('ETC')
      },
    ],
  },
}
