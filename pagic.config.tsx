

export default {
  theme: "blog",
  plugins: ["blog"],
  title: "边城浪子",
  description: "恍若清风不见剑",
  github: "https://github.com/ScorpionH/site",
  srcDir: "src",
  nav: [
    {
      text: '首页',
      link: '/',
      icon: 'czs-home-l',
    },
    {
      text: '分类',
      link: '/categories/',
      icon: 'czs-category-l',
    },
    {
      text: '标签',
      link: '/tags/',
      icon: 'czs-tag-l',
    },
    {
      text: '关于',
      link: '/about/',
      icon: 'czs-about-l',
    },
  ],
  blog: {
    root: "/posts/",
    social: {
      github: "ScorpionH/site",
      email: "345844393@qq.com",
      twitter: 'scorpion'
    },
  },
};
