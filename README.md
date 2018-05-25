## Express, pug, sass, vue.js and Webpack
 Global dependencies: "node-dev"  
 Recommended global installs: webpack, node-sass, eslint

 npm install -g node-dev webpack node-sass eslint

### Dev mode server
```
    "npm run dev" start dev env with sourcemaps activated in sass and js
    open in browser:  localhost:4000
    autoreload enabled (must have livereload plugin for browser)
    https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
    https://addons.mozilla.org/en-US/firefox/addon/remotelivereload/
```
### Production server
```
    first: run "npm run build" on Dev env for repack all sass and js sources to compressed format
    second: run "npm start" for serve on prod env
```

### Dependencies
```
    "body-parser": "~1.17.2",
    "cookie-parser": "~1.4.3",
    "cors": "^2.8.4",
    "debug": "~3.0.0",
    "dotenv": "^4.0.0",
    "express": "~4.15.4",
    "express-flash": "0.0.2",
    "express-session": "^1.15.5",
    "pug": "~2.0.0-rc.3",
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.1",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.6.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "css-loader": "^0.28.5",
    "extract-text-webpack-plugin": "^3.0.0",
    "node-sass": "^4.5.3",
    "postcss-loader": "^2.0.6",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.18.2",
    "vue": "^2.4.2",
    "vue-loader": "^13.0.4",
    "vue-template-compiler": "^2.4.2",
    "webpack": "^3.5.5",
    "webpack-livereload-plugin": "^0.11.0"
```

