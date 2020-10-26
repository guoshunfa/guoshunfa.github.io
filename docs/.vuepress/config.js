module.exports = {
  base: '/',
  title: '熊猫🐼',
  description: 'wow',
  head: [
    ['link', { rel: 'icon', href: '/panda.png' }]
  ],
  port: 9898,
  themeConfig: {
    // 你的GitHub仓库
    repo: 'https://github.com/guoshunfa/guoshunfa.github.io',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
    ]
  }
}