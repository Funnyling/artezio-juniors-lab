const fetchLesson = require('./fetch-lesson');

const urls = [
  'https://coursehunters.net/course/osnovy-vue-js-s-vuex-i-vue-router',
  'https://coursehunters.net/course/webpack-4-za-predelami-osnov'
];
const main = () => {
  for (let url of urls) {
    try {
      const lessonInfo = await fetchLesson(url);
      console.log(lessonInfo)
    } catch (e) {
      console.error('An unexpected error has occured ', e);
    }
  }
}

main();