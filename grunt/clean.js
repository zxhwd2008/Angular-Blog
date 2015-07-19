module.exports = {
    dist: [
        '<%= globalConfig.dest %>',
        '<%= globalConfig.dest %>'
    ],
    middleBuild: [
        '<%= globalConfig.dest %>/*.js',
        '!<%= globalConfig.dest %>/*.min.js'
    ]
};