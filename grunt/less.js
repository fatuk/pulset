module.exports = {
    options: {
        sourceMap: false,
        sourceMapFilename: 'css/style.css.map',
        sourceMapRootpath: '../',
        yuicompress: true,
        compress: true
    },
    build: {
        files: {
            "css/main.css": "less/main.less"
        }
    }
};