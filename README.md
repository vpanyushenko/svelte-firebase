# Svelte Firebase Template

This template combines everything you need to start a Firebase project with Svelte and Sapper.

This template uses Express for routing, but you can change that to any framework you want. It also includes a prettier config file for styling with a `.prettierrc` file.

If you initialize your project with `firebase init`, do not overwrite the `functions/package.json` file, all of that was already install for you with this template.

### Install Guide

To use this yourself, install the Firebase Client to your computer using the code below or you can find Google's guide [here](https://firebase.google.com/docs/cli):

```bash
npm install -g firebase-tools
```

Install this template with the following code:

```bash
npx degit "vpanyushenko/svelte-firebase" my-app
```

Add your project ID to the `.firebaserc` file. You do not need to run `firebase init` as the files are already generated.

Run Locally:

```bash
cd my-app/functions
npm install
npm run dev
```

Deploy:

```bash
cd my-app/functions
npm install
npm run deploy
```
