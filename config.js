module.exports = {
  pathPrefix: '',
  siteUrl: 'https://mehd.io',
  siteTitle: 'Mehdio',
  siteDescription: 'Logbook of a software developer',
  author: 'Mehdi OUAZZA',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  pages: {
    home: '/',
    blog: 'blog',
  },
  social: {
    github: 'https://github.com/mehd-io',
    twitter: 'https://twitter.com/mehd_io',
    linkedin: 'https://linkedin.com/in/mehd-io/',
    medium: 'https://medium.com/@mehdio',
    spotify: 'https://open.spotify.com/artist/27Mo6S5guiiHYTTGb3rHwk?si=gMDHVEb0QS6KJ0Ynji7MHA',
    rss: '/rss.xml',
  },
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    angular: {
      description: 'Angular is an open source web application platform.',
      color: '#dd3431',
    },
    javascript: {
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    typescript: {
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },

  },
};
