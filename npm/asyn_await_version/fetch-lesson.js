const rp = require('request-promise');
const tough = require('tough-cookie');
const cheerio = require('cheerio');

const cookie = new tough.Cookie({
    key: 'CHUNTERS',
    value: 'a211eed2f03db8d2e2a2271e794b1026',
    domain: 'coursehunters.net'
  },
  {
    key: 'accessToken',
    value: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwczpcL1wvY291cnNlaHVudGVycy5uZXQiLCJhdWQiOiJodHRwczpcL1wvY291cnNlaHVudGVycy5uZXQiLCJqdGkiOiI0ZjFnMjNhMTJhYSIsImlhdCI6MTUyNjQ5NjQxMSwibmJmIjoxNTI2NDk2NDcxLCJleHAiOjE1MjcxMDEyMTEsInVzZXJfaWQiOiI2NzgzIiwiZV9tYWlsIjoiZnVubnlsaW5nNDQ0QGdtYWlsLmNvbSJ9.Ipi82DhBBp0cIIEFeWU8YmN3yCpAt1DlTtXvBNOSk54',
    domain: 'coursehunters.net'
  }
);

const cookieJar = rp.jar();
cookieJar.setCookie(cookie, 'https://coursehunters.net');

const options = {
  uri: `https://coursehunters.net/course/osnovy-vue-js-s-vuex-i-vue-router`,
  jar: cookieJar, 
  transform: body => cheerio.load(body)
};

const fetchLesson = async (lessonUrl) => {
  options.uri = lessonUrl;
  const lessons = {};
  try {
    const $ = await rp(options);
    $('#lessons-list > li').each((i, htmlElem) => {
      const lessonElem = $(htmlElem);      
      const id = parseInt(lessonElem.data('index')) + 1;
      const originalName = lessonElem.children('span[itemprop="name"]').text().split('. ')[1];
      const name = `${id}. ${originalName}`;

      lessons[id] = {
        name,
        id
      };
    });
  } catch (e) {
    console.error('An unexpected error has occured ', e);
  }
  return lessons;
}
module.exports = fetchLesson;