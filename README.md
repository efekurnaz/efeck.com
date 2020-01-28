# Simple Webpack boilerplate/example
Example of basic Webpack config for a simple website.
Guide: [here](https://dev.to/pixelgoo/how-to-configure-webpack-from-scratch-for-a-basic-website-46a5)


Install all packages:
```
$ npm install
```

Run webpack
```
$ npm run build
```

Done! Open index.html in browser for a cat image.

----

### Notice about production mode and postcss.config.js
In *postcss.config.js* there is a check for **process.env.NODE_ENV** variable. The thing is even if you set Webpack mode to production it *won't* automatically change Node environment variable.

The simplest way to configure this is to install *cross-env* package:
```
$ npm install --save-dev cross-env
```

Then just add another npm script in *package.json* for production mode:
```javascript
"scripts": {
  "build": "webpack --config webpack.config.js",
  "build-production": "cross-env NODE_ENV=production webpack --config webpack.config.js"
}
```

Now when you run `npm run build-production` the *process.env.NODE_ENV* variable will be production and postcss.config.js check is going to work:
```javascript
if(process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: [
            require('autoprefixer'),
            require('cssnano')
        ]
    }
}
```
[From Webpack documentation](https://webpack.js.org/guides/production/):
Technically, *NODE_ENV* is a system environment variable that Node.js exposes into running scripts. It is used by convention to determine dev-vs-prod behavior by server tools, build scripts, and client-side libraries. Contrary to expectations, *process.env.NODE_ENV* **is not set to "production"** within the build script webpack.config.js. Thus, conditionals like `process.env.NODE_ENV === 'production' ? '[name].[hash].bundle.js' : '[name].bundle.js'` within webpack configurations do not work as expected.

# Layer Motion Slideshow

A CSS Grid-based slideshow template with a layer motion effect on the main image and on the title.

![Layer Motion Slideshow](https://tympanus.net/codrops/wp-content/uploads/2019/01/LayerMotionSlideshow_featured-1.jpg)

[Article on Codrops](https://tympanus.net/codrops/?p=37953)

[Demo](https://tympanus.net/Development/LayerMotionSlideshow/)

## Credits

- [imagesLoaded](https://imagesloaded.desandro.com/) by Dave DeSandro
- [TweenMax](https://greensock.com/tweenmax) by Greensock
- [Charming](https://github.com/yuanqing/charming) by Yuan Qing
- Images from [Unsplash.com](https://unsplash.com/)

## License
This resource can be used freely if integrated or build upon in personal or commercial projects such as websites, web apps and web templates intended for sale. It is not allowed to take the resource "as-is" and sell it, redistribute, re-publish it, or sell "pluginized" versions of it. Free plugins built using this resource should have a visible mention and link to the original work. Always consider the licenses of all included libraries, scripts and images used.

## Misc

Follow Codrops: [Twitter](http://www.twitter.com/codrops), [Facebook](http://www.facebook.com/codrops), [Google+](https://plus.google.com/101095823814290637419), [GitHub](https://github.com/codrops), [Pinterest](http://www.pinterest.com/codrops/), [Instagram](https://www.instagram.com/codropsss/)


[© Codrops 2019](http://www.codrops.com)






