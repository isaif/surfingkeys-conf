# surfingkeys-conf

Configuration file for surfingkeys browser extension using esbuild

## Requirements

nodejs

## Generate Configuration file

After cloning you need to run `npm run build` to generate the `config.js` file inside the `dist` directory which will be located in the root of this repository.

If the `dist` directory doesn't exist before running `npm run build` then it will be created automatically.

You can add the path to this `config.js` in surfingkeys directly or create a soft link in `~/.config/surfingkeys/config.js`
