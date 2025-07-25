import postcssPresetEnv from "postcss-preset-env";

export default {
    plugins: [postcssPresetEnv({
        autoprefixer: {
            grid: true,
            flexbox: true,
        }
    })]
};
