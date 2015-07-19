module.exports = {
    dist: {
        options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        files: {
            "<%= globalConfig.dest %>/styles/main.prefixed.css": "<%= globalConfig.dest %>/styles/main.css"
        }
    }
};