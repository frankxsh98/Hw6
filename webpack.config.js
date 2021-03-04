const path = require('path');

module.exports = {
    entry: ['./src/jvs1.js','./src/snapsvg.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
  };
