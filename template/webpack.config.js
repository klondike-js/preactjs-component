var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    publicPath: '/build/'
  },
  resolve: {      
    alias: {          
      'preact': path.resolve(__dirname, './node_modules/preact'),
      'preact-compat': path.resolve(__dirname, './node_modules/preact-compat')    
    }  
  }, 
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  externals: {
    preact: {          
        commonjs: "preact",          
        commonjs2: "preact",          
        amd: "Preact",          
        root: "Preact"      
    }
  }
};