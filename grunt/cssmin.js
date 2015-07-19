module.exports = {
    dist: {
        options: {
            banner: '/*! <%= globalConfig.pkgname %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
            '<%= globalConfig.dest %>/styles/main.css': '<%= globalConfig.dest %>/styles/main.prefixed.css'
        }
    }
};