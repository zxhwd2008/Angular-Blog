module.exports = {
    common: {
        files: [
            {
                expand: true,
                src: [
                    '<%= globalConfig.src %>/**',
                    '!<%= globalConfig.common %>/**/*.js',
                    '!<%= globalConfig.common %>/*.js'
                ],
                dest: '<%= globalConfig.dest %>/',
                filter: 'isFile'
            }
        ]
    }
};