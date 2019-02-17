let experienceData = {
  imageStyle: {
    height: '60px',
    width: '60px'
  },
  flexDirectionStyle: {
    'flex-direction': 'row-reverse',
  },
  coreData: [
    {
      imageTag: 'Udacity',
      imageSrc: "https://d1qb2nb5cznatu.cloudfront.net/startups/i/113563-0d042ff7bd710ce95c303aa3f93c8522-medium_jpg.jpg?buster=1456467302",
      heading: 'Udacity',
      subheading: 'Software Engineering Mentor',
      timeTaken: '(Feb-2019)',
      discription: 'I mentor up to 15 students in Udacity Front End Nanodegree in each cohort. I help them Learn JavaScript, debugging problems, and sharing my knowledge about Computer Science. My main goal with the students is to teach them how to become a true software Engineer(although, I myself is on a never-ending journey to become a better software engineer).'
    },
    {
      imageTag: 'Pesto Tech',
      imageSrc: "https://d1qb2nb5cznatu.cloudfront.net/startups/i/5001643-cc60fc70ac9239ed7f038da685f19928-medium_jpg.jpg?buster=1512196533",
      heading: 'Pesto Tech',
      subheading: 'JavaScript Developer',
      timeTaken: '(Jan-2019)',
      discription: 'Diving deep in JavaScript, Trying to contribute to Open Source Projects and Learning Best Software Engineering practices.'
    },
    {
      imageTag: 'Elucidata',
      imageSrc: "https://d1qb2nb5cznatu.cloudfront.net/startups/i/800274-9da7166416e86d872510e14f8059d1b8-medium_jpg.jpg?buster=1504338785",
      heading: 'Elucidata',
      subheading: 'Full Stack Developer',
      timeTaken: '(July-2018 to Dec-2018)',
      discription: `Worked on a biotech SASS platform called Polly, My main work was handling legacy code, building a new authentication system
      and also working on Project dashboard implementing some new feature and enhancing the older ones.`
    },
    {
      imageTag: 'Chegg India',
      imageSrc: "https://img.grouponcdn.com/coupons/3G3tpCYibBfoFJ36FAzVBh/chegg-logo-500x500/v1/t200x200.png",
      heading: 'Chegg India',
      subheading: 'Expert QA',
      timeTaken: '(Jan-2018 to May-2018)',
      discription: 'Answer questions and gave expert advice. Solve technical problems through research and collaboration.'
    },
  ]
}

let projectData = {
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  imageContainerStyle: {
    'margin-top': '20px',
    'margin-left': '20px',
  },
  flexDirectionStyle: {
    'flex-direction': 'column',
  },
  coreData: [{
    link: 'https://polly.elucidata.io',
    imageTag: 'Polly App',
    imageSrc: "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/61/896574/c8b4aadb7131239ab7452b331f45e8b8-original.png",
    heading: 'Polly',
    subheading: 'A collaborative platform to discover target IDs from mass-spec data(Bio-tech)',
    timeTaken: '',
    discription: 'Tech Stack:- [ Angular2, AWS Incognito, Typescript ]'
  },
  {
    link: 'https://github.com/vkbinfo/udacityNeighborhood',
    imageTag: 'NeighborHood—​Google Maps Project',
    imageSrc: "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/3e/734762/dc0c94f8b05edfb78d43459df728f976-original.png",
    heading: 'NeighborHood—​Google Maps Project',
    subheading: 'A google map project to learn Maps Apis.',
    timeTaken: '',
    discription: 'Tech Stack:- [ Javascript, Knockout.js, jQuery ]'
  },
  {
    link: '',
    imageTag: 'Hobby Listing',
    imageSrc: "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/3b/734758/03e5c2487ba3897e296d6d8b18aa03a0-original.png",
    heading: 'Hobby Listing',
    subheading: 'A General Project for Category listing of hobbies.',
    timeTaken: '',
    discription: 'Tech Stack:- [ Python, Flask, AWS(lightsail), PostgreSQL, Jinga2 ]'
  },
  {
    link: '',
    imageTag: 'Game Playing Agent — M​aking an AI agent to play Isolation game',
    imageSrc: "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/c4/734757/cc888ca92597af2d5071728f0840eb42-original.png",
    heading: 'Game Playing Agent — M​aking an AI agent to play Isolation game',
    subheading: 'A game player agent for Isolation game.',
    timeTaken: '',
    discription: 'Built an AI agent that can play an Isolation game.Implemented Minimax algorithm and a heuristic solution for AI agent. By using a good heuristic function, increased winning ratio from ~50% to ~70% against other agents.'
  },
  ]
}

export {
  experienceData,
  projectData,
};
