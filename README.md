# surfingkeys-conf

Configuration file for surfingkeys browser extension using esbuild

## Why esbuild?

- Surfingkeys doesn't support using **es module** for configuration file therefore we have to use **commonjs module**. But I want to use es module.
- Esbuild is very fast.
- I may use typescript in future.

## Requirements

nodejs

## Installation

### Cloning repository

If you have git installed in your system, copy the following command in your terminal and run it.

`git clone https://github.com/isaif/surfingkeys-conf.git`

### Installing dependencies

After cloning the repository run the following to install dependencies
`npm install` or `yarn`

### Generate Configuration file

We need to generate the `config.js` file which will be used by surfingkeys as settings file. Run the following command:

`npm run build` or `yarn build`.

This `config.js` will be generated inside the `dist` directory located at the root of the repository.

If the `dist` directory doesn't exist before running `npm run build` or `yarn build` then it will be created automatically.

### Adding config file location in surfingkeys settings

To use this config file you need to tell surfingkeys where the file is located. You can do so in the settings page of surfingkeys which can be opened using `;e` command in the browser or click on surfingkeys icon and select the _settings_ option. Then enable _Advanced mode_ and add the location of file in _load settings from a file_ input.

You can add the path to `config.js` in surfingkeys directly or create a soft link in `~/.config/surfingkeys/config.js` and add this path.
