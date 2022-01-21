const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://angelokandah.github.io/AngeloKandah/',
  title: 'AK.',
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Angelo Kandah',
  role: 'Aspiring Front End Engineer',
  description:
    'I graduated from University of California, Santa Cruz with a Bachelor of Science in Computer Science. I live in California and I am passionate about developing web applications in Javascript and React.',
  resume:
    'https://drive.google.com/file/d/1Tae5SysAtoH50Ly7jSSiNmwCa3IllHV1/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/angelokandah/',
    github: 'https://github.com/AngeloKandah',
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'DuplicateTabCloser',
    description:
      'A chrome extension for cleaning up any duplicate tabs that you open with configurable options for the user.',
    stack: ['Javascript', 'Jest', 'Webpack'],
    sourceCode: 'https://github.com/AngeloKandah/DuplicateTabCloser',
  },
  {
    name: 'DuplicateTabCloser Landing Page',
    description:
      'A landing page for the DuplicateTabCloser with mobile first in mind.',
    stack: ['React', 'Javascript', 'Tailwind'],
    sourceCode: 'https://github.com/AngeloKandah/DuplicateTabCloserLandingPage',
    livePreview:
      'https://angelokandah.github.io/DuplicateTabCloserLandingPage/',
  },
  {
    name: 'Pokémon Egg Group Calculator',
    description:
      'A calculator for figuring out the fastest path(s) from one egg group to another.',
    stack: ['React', 'Javascript', 'Styled-Components'],
    sourceCode: 'https://github.com/AngeloKandah/EggGroupChain',
    livePreview: 'https://angelokandah.github.io/EggGroupChain/',
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'React',
  'Tailwind',
  'Styled-Components',
  'HTML',
  'CSS',
  'Git',
  'Jest',
  'Webpack',
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kandah.angelo@gmail.com',
};

export { header, about, projects, skills, contact };
