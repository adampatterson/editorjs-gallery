const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['@babel/preset-env'],
                        },
                    }
                ]
            },
            {
                test: /\.pcss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('postcss-nested-ancestors'),
                                require('postcss-nested')
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader?removeSVGTagAttrs=false'
            }
        ]
    },
    output: {
        // pathOFF: path.join(__dirname, '/dist'),
        path: path.join(__dirname, '../../maker-community/node_modules/@adampatterson/editorjs-media/test/'),
        publicPath: '/',
        filename: 'bundle.js',
        library: 'MakerGallery',
        libraryTarget: 'umd',
        libraryExport: 'default'
    }
};
