

module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript"
    ],
    plugins: [
        ["module-resolver",
            {
                alias: {
                    "@modules": "./src/modules",
                    "@config": "./src/config",
                    "@database": "./src/database",
                    "@errors": "./src/errors",
                    "@middlewares": "./src/middlewares",
                    "@routes": "./src/routes",
                    "@shared": "./src/shared"
                }
            }],
        "babel-plugin-transform-typescript-metadata",
        ["@babel/plugin-proposal-decorators", {
            legacy: true
        }],
        ["@babel/plugin-proposal-class-properties", {
            loose: true
        }],

    ],
}