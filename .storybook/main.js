const path = require('path')

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    'storybook-addon-react-docgen'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
};

 

//alles andere löschen
//package json anpassen
//git remote anpassen
//ggf alles rüberkopieren in komplett neues package