# Svelte library

Everything you need to build a Svelte library, powered by [`sv`](https://npmjs.com/package/sv).

Read more about creating a library [in the docs](https://svelte.dev/docs/kit/packaging).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```

### 3. Install Dependencies
```bash
npm install
yarn add -D tailwindcss postcss autoprefixer @motionone/svelte
```

### 4. Add Tailwind to your CSS
Create `src/app.css` with:
```css
@import "tailwindcss";
/* Optionally: @config "./tailwind.config.js"; */
```

### 5. Link CSS in app.html
Add this to `<head>` in `src/app.html`:
```html
<link rel="stylesheet" href="/src/app.css" />
```

### 6. Run the App
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to view the landing page.
