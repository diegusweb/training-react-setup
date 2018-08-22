const path = require('path');

const config = {
    entry: './app/index.jsx',
    output:{
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module:{

    }
};

module.exports = config;
