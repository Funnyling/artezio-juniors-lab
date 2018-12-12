const rp = require('request-promise');
const tough = require('tough-cookie');
const cheerio = require('cheerio');

const cookie = new tough.Cookie(
  {
    key: 'CHUNTERS',
    value: '64a8e09943d984c83cf488d903ea5593',
    domain: 'coursehunters.net'
  },
  {
    key: 'accessToken',
    value: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwczpcL1wvY291cnNlaHVudGVycy5uZXQiLCJhdWQiOiJodHRwczpcL1wvY291cnNlaHVudGVycy5uZXQiLCJqdGkiOiI0ZjFnMjNhMTJhYSIsImlhdCI6MTU0MDYzNjEyNCwibmJmIjoxNTQwNjM2MTg0LCJleHAiOjE1NDEyNDA5MjQsInVzZXJfaWQiOiI2NzgzIiwiZV9tYWlsIjoiZnVubnlsaW5nNDQ0QGdtYWlsLmNvbSJ9.aK5dyHI7S10PezgtYpXqsx2xks4eAJ2pLT1fsSG112k',
    domain: 'coursehunters.net'
  }
);

const cookieJar = rp.jar();
cookieJar.setCookie(cookie, 'https://coursehunters.net');

const options = {
  uri: `https://coursehunters.net/course/react-testirovanie-s-jest-i-enzyme`,
  jar: cookieJar, 
  transform: body => cheerio.load(body)
};

const fetchLesson = lessonUrl => {
  options.uri = lessonUrl;
  return rp(options)
  .then($ => {
    const lessons = {};
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
    return lessons;
  })
  .catch(e => {
    console.error('An unexpected error has occured ', e);
    return {};
  });
};

module.exports = fetchLesson;