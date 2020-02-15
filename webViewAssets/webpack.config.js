const path = require('path')
const fs = require('fs')
const baseDir = './src/'
const entry = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter(_ => _.isDirectory() && !_.name.startsWith('.') && _.name !== 'lib' && _.name !== 'css')
    .map(_ => _.name)
    .reduce((s, v) => {
        s[v] = path.join(__dirname, baseDir, v)
        return s
    }, {})
const isProduction = (process.env.NODE_ENV === 'production')


console.log(entry)
module.exports = {
    entry,
    mode: process.env.NODE_ENV,
    output: {
        filename: '[name]/bundle.js',
        path: path.resolve(__dirname, './assets/')
    },
    devtool: (!isProduction) ? 'source-map' : 'disabled',
    module: {
        rules: [
            { test: /\.glsl$/, use: 'raw-loader' },
            { test: /\.scss/, use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        sourceMap: !isProduction,
                       importLoaders: 2
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: !isProduction
                    }
                  }
            ]}
        ]
    }
}
