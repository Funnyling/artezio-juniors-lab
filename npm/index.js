const fetchLesson = require('./fetch-lesson');
const renameFile = require('./rename-file');

const tmp = [  
  /* {
    url: 'https://coursehunters.net/course/osnovy-vue-js-s-vuex-i-vue-router',
    dir: 'd:/Downloads/Courses/VueJs Vuex Vue Router/'
  },
  {
    url: 'https://coursehunters.net/course/webpack-4-za-predelami-osnov',
    dir: 'd:/Downloads/Courses/Webpack 4 Beyond the Basics/'
  },
  {
    url: 'https://coursehunters.net/course/nastolnye-prilozheniya-s-angular-firestore-i-electron',
    dir: 'd:/Downloads/Courses/Angular-Firestone-Electron/'
  },
  {
    url: 'https://coursehunters.net/course/ngrx-store-effects',
    dir: 'd:/Downloads/Courses/Angular-ngrx-store/'
  },
  {
    url: 'https://coursehunters.net/course/fm-graphql',
    dir: 'd:/Downloads/Courses/Basic GraphQL/'
  },
  {
    url: 'https://coursehunters.net/course/razvertyvanie-veb-prilozheniy-s-pomoshchyu-webpack',
    dir: 'd:/Downloads/Courses/Deploying Web Applications with Webpack/'
  },
  {
    url: 'https://coursehunters.net/course/docker-deep-dive',
    dir: 'd:/Downloads/Courses/Docker/'
  },
  {
    url: 'https://coursehunters.net/course/fm-typescript',
    dir: 'd:/Downloads/Courses/FrontendMasters Mastering TypeScript/'
  },
  {
    url: 'https://coursehunters.net/course/polnyy-kurs-veb-razrabotchika-react-s-redux-2nd-edition',
    dir: 'd:/Downloads/Courses/Full Course React Redux/'
  },
  {
    url: 'https://coursehunters.net/course/mern-stack-front-to-back-full-stack-react-redux-node-js',
    dir: 'd:/Downloads/Courses/Full Stack MERN/'
  },
  {
    url: 'https://coursehunters.net/course/osnovy-funkcionalnogo-programmirovaniya-v-javascript',
    dir: 'd:/Downloads/Courses/Functional JS Programming/'
  },
  {
    url: 'https://coursehunters.net/course/fm-git',
    dir: 'd:/Downloads/Courses/Git-In-Depth/'
  },
  {
    url: 'https://coursehunters.net/course/intensivnyy-onlayn-kurs-professionalnyy-node-js-uroven-1',
    dir: 'd:/Downloads/Courses/HTML Academy Pro NodeJs/'
  },
  {
    url: 'https://coursehunters.net/course/upravlenie-pamyatyu-v-java',
    dir: 'd:/Downloads/Courses/Java Memory Management/'
  },
  {
    url: 'https://coursehunters.net/course/jenkins-bootcamp-polnostyu-avtomatiziruem-sborku',
    dir: 'd:/Downloads/Courses/Jenkins/'
  },
  {
    url: 'https://coursehunters.net/course/photoshop-cc-dlya-veb-dizayna',
    dir: 'd:/Downloads/Courses/Photoshop CC for the Web/'
  },
  {
    url: 'https://coursehunters.net/course/pro-gatsby',
    dir: 'd:/Downloads/Courses/Pro Gatsby/'
  },
  {
    url: 'https://coursehunters.net/course/fm-visual-studio',
    dir: 'd:/Downloads/Courses/Pro VSCode/'
  },
  {
    url: 'https://coursehunters.net/course/prodvinutye-react-patterny',
    dir: 'd:/Downloads/Courses/React Patterns/'
  },
  {
    url: 'https://coursehunters.net/course/react-redux-enzyme-znakomstvo-s-prilozheniyami-i-testami',
    dir: 'd:/Downloads/Courses/React-Redux-Enzyme/'
  },
  {
    url: 'https://coursehunters.net/course/react-router-v4-tyler-mcginnis',
    dir: 'd:/Downloads/Courses/React-Router-4/'
  },
  {
    url: 'https://coursehunters.net/course/stroim-prilozheniya-s-react-socket-io-i-rethinkdb',
    dir: 'd:/Downloads/Courses/React-Socket_io-RethinkDB/'
  },
  {
    url: 'https://coursehunters.net/course/platforma-salesforce-sertifikaciya-app-builder-developer-401',
    dir: 'd:/Downloads/Courses/Salesforce Platform App Builder Developer 401 Certification/'
  },
  {
    url: 'https://coursehunters.net/course/polnyy-kurs-salesforce-visual-workflow',
    dir: 'd:/Downloads/Courses/Salesforce Visual Workflow/'
  },
  {
    url: 'https://coursehunters.net/course/webpack-transpiling-i-bandling-javascript',
    dir: 'd:/Downloads/Courses/Webpack Transpiling and Bundling JavaScript/'
  },
  {
    url: 'https://coursehunters.net/course/rukovodstvo-po-sketch',
    dir: 'd:/Downloads/Courses/Руководство по Sketch/'
  },
  {
    url: 'https://coursehunters.net/course/typescript-masterclass-todd-motto',
    dir: 'd:/Downloads/Courses/Mastering TypeScript ToddMotto/'
  } */
  {
    url: 'https://coursehunters.net/course/polnoe-rukovodstvo-razrabotchika-2018-ot-dzhunika-k-senoru',
    dir: 'D:/video/Courses/The Complete Junior to Senior Web Developer Roadmap (2018)/'
  }
]

const main = () => {
  const newTmp = tmp.map(({url, dir}) => {
    console.info('Start loading ', dir);
    const promise = fetchLesson(url);
    const result = {
      dir,
      promise
    };
    
    return result;
  });

  newTmp.forEach(({dir, promise}) => {
    console.info('Start renaming files ', dir);
    promise.then(lessons => renameFile(dir, lessons))
    .catch(e => {
      console.log('Error');
    });
  });
}

main();