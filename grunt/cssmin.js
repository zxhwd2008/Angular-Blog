module.exports = {
    dist: {
        options: {
            banner: '/*! <%= globalConfig.pkgname %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
            '<%= globalConfig.destApp %>/styles/main.min.css': '<%= globalConfig.dest %>/styles/main.prefixed.css'
        }
    }
};