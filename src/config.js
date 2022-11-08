module.exports = {
  siteTitle: 'Shaon Kabir | Frontend Developer',
  siteDescription:
    'Shaon Kabir is an interactive frontend developer living in beautiful Bangladesh, building high-quality websites and applications with pixel perfect and modern design.',
  siteKeywords:
    'Shaon Kabir, Shaon, Kabir, shaonkabir8, front-end engineer, web developer, javascript',
  siteUrl: 'https://shaonkabir.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Shaon Kabir',
  location: 'Dhaka, India',
  email: 'shaonkabir98@gmail.com',
  github: 'https://github.com/shaonkabir8',
  twitterHandle: '@shaonkabir8',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/shaonkabir8',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shaonkabir8/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/shaonkabir8',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shaonkabir8',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/shaonkabir8',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
