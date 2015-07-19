module.exports = {
    timestamp: Date.now(),
    buildNumber: Date.now().toString(),
    buildDate: (new Date()).toLocaleString(),
    pkgname: 'ElsevierTest',
    lib: 'lib',
    bower: 'lib/bower_components',
    src: 'app',
    common: 'app/common',
    dest: 'Build',
    style: 'styles',
    destApp: 'Build/app'
};