STORE APP

* Initialize the app
  - Create React + TS App (VITE)
    $ npm create vite@latest store-app -- --template react-ts
    $ cd store-app
    $ code .              // Open in VSCode
    $ npm install
    $ npm run dev
    $ npm install && npm run dev
  - Install dependencies
    + Redux Toolkit
      $ npm install @reduxjs/toolkit
      $ npm install react-redux
    + React Router DOM
      $ npm install react-router-dom
    + Axios
      $ npm install axios
    + Tailwind CSS (URL: https://tailwindcss.com/docs/installation/using-postcss)
      $ npm install -D tailwindcss postcss autoprefixer
      $ npx tailwindcss init -p
    + Shadcn UI (URL: https://ui.shadcn.com/docs/installation/vite)
      $ npm i -D @types/node
      $ npx shadcn@latest init  // Run the CLI
        > Ok to proceed? (y) y
        > ? Which style would yo like to use? Default
        > ? Which color would you like to use as the base color? Slate
        > ? Would you like to use CSS variables for theming? yes
      $ npx shadcn@latest add button  // Add button component
