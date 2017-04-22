## Express, pug, sass, vue.js and Webpack

### Dev mode
 "npm run dev" start dev env with sourcemaps activated in sass and js
```
 open in browser:  localhost:4000
 autoreload enabled (must have livereload plugin for chrome)
 https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
```
### Production
```
 first: run "npm run build" on dev env for repack all src to compressed format
 second: run "npm start" for serve on prod env
```

### Dependencies
```
Production dependencies:

 "body-parser": "~1.16.0"
 "cookie-parser": "~1.4.3"
 "debug": "~2.6.0"
 "dotenv": "~4.0.0"
 "express": "~4.14.1"
 "morgan": "~1.7.0"
 "pug": "~2.0.0-beta10"
 "serve-favicon": "~2.3.2"
```
```
Dev dependencies:

 "babel-core": "^6.24.0"
 "babel-loader": "^6.4.1"
 "babel-preset-es2015": "^6.24.0"
 "css-loader": "^0.27.3"
 "eslint": "^3.17.1"
 "eslint-config-standard": "^6.2.1"
 "eslint-plugin-promise": "^3.4.2"
 "eslint-plugin-standard": "^2.0.1"
 "extract-text-webpack-plugin": "^2.1.0"
 "node-sass": "^4.5.1"
 "postcss-loader": "^1.3.3"
 "sass-loader": "^6.0.3"
 "style-loader": "^0.16.0"
 "vue": "^2.2.4"
 "vue-loader": "^11.3.1"
 "vue-template-compiler": "^2.2.4"
 "webpack": "^2.3.1"
 "webpack-livereload-plugin": "^0.10.0"
```

