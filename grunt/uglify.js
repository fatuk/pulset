module.exports = {
    dist: {
        options: {
            sourceMap: true
        },
        files: {
            'vendors/plugins.min.js': [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/jqueryui/ui/core.js',
                'bower_components/jqueryui/ui/widget.js',
                'bower_components/jqueryui/ui/mouse.js',
                'bower_components/jqueryui/ui/slider.js',
                'js.plugins/jquery.formstyler.js'
            ]
        }
    }
};