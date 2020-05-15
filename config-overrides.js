const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#222222',
            '@link-color': '#9116E7',
            '@success-color': '#A7E00B',
            '@info-color:': '#45D9F7',
            '@warning-color': '#FFB949',
            '@error-color': '#FF423F',
            '@font-family': 'Charlie Display',
            '@layout-header-background': '#222222'
        },
    }),
);