const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/index.js`)
  },
  {
    path: '/resume',
    component: path.resolve(`src/Resume/Resume.js`)
  }
];