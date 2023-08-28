# Three.js minimal template for shaders development
Ready to use template to develop shaders locally with three.js and glsl scripts.

Minimal setup with everything you will need to easily start developing.

# Dependencies

The only thing you will need to install is [Node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Some operative systems already have it installed by default. Check it out to save you time. To check, just run in console:

```
npm -v
```

If there is a success message like `9.4.0` then you can continue.

# Usage

Once cloned, execute `npm install` to install the minimal requirements and `npx vite` to run the live server.
Go to [http://localhost:5173/](http://localhost:5173/) to check the example shader output.

The example script is located in `shaders/main.frag`.

Enjoy.

# Debugging

If anything goes wrong you can check possible problems in the Console output of your web browser developer tools.

# Template content

 - Three.js with minimal code to visualize shader outcome.
 - Vite for simple live server.
 - [vite-plugin-glsl](https://github.com/UstymUkhman/vite-plugin-glsl) for hot reloading on glsl scripts.
