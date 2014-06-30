module.exports = {
    dist: {
        options: {
            sourceMap: false
        },
        files: {
            'vendors/plugins.min.js': [
                'bower_components/jquery/dist/jquery.js',
                'js.plugins/jquery.formstyler.js'
            ]
        }
    }
};