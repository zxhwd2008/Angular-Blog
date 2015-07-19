module.exports = {
    'build': [
        'clean:dist',
        'jshint',
        'karma:local',
        'ngAnnotate',
        'less',
        'autoprefixer',
        'cssmin',
        'concat:libs',
        'concat:app',
        'uglify',
        'concat:minifiedLibsWithKendo',
        'clean:middleBuild',
        'copy',
        'htmlbuild'
    ]
};