const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/index.jsx`)
  },
  {
    path: '/resume',
    component: path.resolve(`src/Resume/Resume.js`)
  }
];