module.exports = function (api) {
    api.cache(true)
    const presets = [
        [
            '@babel/preset-env',
            {
                loose: true,
                modules: false
            }
        ]
    ]
    const plugins = []
    return {
        presets,
        plugins
    }
}
