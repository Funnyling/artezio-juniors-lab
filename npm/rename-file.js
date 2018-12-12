const fs = require('fs');
const util = require('util');

const renameFile = (dir, lessons) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }

    files.forEach(filePath => {
      const parts = filePath.split('.');
      const extension = parts[1];
      const fileName = parts[0];
      if (!filePath.includes('lesson')) {
        return;
      }

      const number = fileName.split('lesson')[1];
      let { name } = lessons[number];
      if (name.includes(':')) {
        name = name.replace(/:/g, ' - ');
      }
      if (name.includes('"')) {
        name = name.replace(/"/g, ' ');
      }
      if (name.includes('?')) {
        name = name.replace('?', '');
      }
      if (name.includes('\\')) {
        name = name.replace(/\\/g, ' ');
      }
      if (name.includes('/')) {
        name = name.replace(/\//g, ' ');
      }
      if (name.includes('EJS')) {
        name = name.replace(/EJS\\Pug\\Handlebars/g, 'EJS Pug Handlebars');
      }
      if (name.includes('+')) {
        name = name.replace('+', 'plus');
      }
      if (name.includes('-')) {
        name = name.replace('-', 'minus');
      }
      if (name.includes('plus\\minus')) {
        name = name.replace('plus\\minus', 'plus or minus');
      }
      if (name.includes('&')) {
        name = name.replace(/&/g, '');
      }
      if (name.includes('$')) {
        name = name.replace(/\$/g, '');
      }
      if (name.includes('#')) {
        name = name.replace(/#/g, '');
      }
      if (name.includes('!')) {
        name = name.replace(/!/g, '');
      }
      if (name.includes('*')) {
        name = name.replace(/\*/g, '');
      }
      if (name.includes('|')) {
        name = name.replace(/\|/g, '');
      }
      if (name.includes(number)) {
        name = name.replace(number, '');
      }
      if (name.includes('`')) {
        name = name.replace(/`/g, '');
      }

      const newPath = `${dir}${number}${name}.${extension}`;
      fs.rename(`${dir}${filePath}`, newPath, () => {});
    });
  });
};

module.exports = renameFile;