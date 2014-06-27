grunt-frontend-boilerplate
==========================

## Boilerplate for starting new projects

Based on original [article](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/). [Here](http://habrahabr.ru/post/215267/) is russian translation.

### Included grunt plugins:

* ["grunt-concurrent"](https://github.com/sindresorhus/grunt-concurrent): "^0.5.0" (run grunt tasks concurrently),
* ["grunt-contrib-connect"](https://github.com/gruntjs/grunt-contrib-connect): "^0.7.1" (local hhtp-server),
* ["grunt-contrib-less"](https://github.com/gruntjs/grunt-contrib-less): "^0.11.1" (compile LESS files to CSS),
* ["grunt-contrib-uglify"](https://github.com/gruntjs/grunt-contrib-uglify): "^0.4.0" (minify files with UglifyJS),
* ["grunt-contrib-watch"](https://github.com/gruntjs/grunt-contrib-watch): "^0.6.1" (files watcher),
* ["grunt-newer"](https://github.com/tschaub/grunt-newer): "^0.7.0" (selective run tasks),
* ["grunt-notify"](https://github.com/dylang/grunt-notify): "^0.2.20" (push notifies about errors),
* ["grunt-shell"](https://github.com/sindresorhus/grunt-shell): "^0.7.0" (run shell commands),
* ["grunt-webfont"](https://github.com/sapegin/grunt-webfont): "^0.4.2" (generate custom icon webfonts from SVG),
* ["load-grunt-config"](https://github.com/creynders/load-grunt-configs): "^0.8.0" (loads grunt task configurations from separate files),
* ["time-grunt"](https://github.com/sindresorhus/time-grunt): "^0.3.1" (displays the execution time of grunt tasks)

**webfont** needs **ttfautohint**, so use ttfautohint-auto-install.sh to install on Ubuntu 12.04 LTS.