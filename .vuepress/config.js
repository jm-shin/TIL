const path = require('path');
let {getArticles} = require(path.resolve('.vuepress/dong_util'))

module.exports = {
  title: '개발자 신종민',
  description: 'Today I Learned',
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/53161335?v=4',
    nav: [
      { text: 'Home', link: '/' },
      {text: 'About', link: '/About/'},
    ],
    lastUpdated: true,
    sidebar: [
      {
        title: 'Vuepress',
        collapsable: true,
        children: getArticles('vuejs/vuepress')
      },
      {
        title: 'Books',
        collapsable: true,
        children: getArticles('Books')
      }
    ],
    smoothScroll: true
  },
  base: '/TIL/',
}
