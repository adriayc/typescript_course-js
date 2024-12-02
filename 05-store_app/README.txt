STORE APP

* Initialize the app
  - Create React + TS App (VITE)
    $ npm create vite@latest store-app -- --template react-ts
    $ cd store-app
    $ code .              // Open in VSCode
    $ npm install
    $ npm run dev
    $ npm install && npm run dev
    $ npm run build       // Build prod
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
    + Radix UI Icons
      $ npm i @radix-ui/react-icons
  - Add Shadcn/ui components
    + Dropdown Menu
      $ npx shadcn@latest add dropdown-menu
    + Separator
      $ npx shadcn@latest add separator
    + Card
      $ npx shadcn@latest add card
    + Carousel
      $ npx shadcn@latest add carousel
    + Skeleton
      $ npx shadcn@latest add skeleton
    + Label, Input, Select, Slider, Checkbox
      $ npx shadcn@latest add label input select slider checkbox
    + Slider
      $ npx shadcn@latest add slider
    + Pagination
      $ npx shadcn@latest add pagination
    + Toast
      $ npx shadcn@latest add toast
    + Table
      $ npx shadcn@latest add table

* Deploy App
  - Build production
     $ npm run build
  - Create Repository in GitHub
    + Click 'Nex'
      > Create a new repository
        > Repository name: temp-comfy-ts
        > Private
        Click 'Create repository'
  - Upload local repository to GitHub
    $ rm -rf .git
    $ git init
    $ git add .
    $ git commit -m "first commit"
    Push
    $ git remote add origin git@github.com:{USERNAME}/{{REPO_NAME}}.git
    $ git branch -M main
    $ git push -u origin main
  - Netlify (URL: https://www.netlify.com/)
    + Click 'Add new site' -> 'Import an existing project' -> 'Deploy with GitHub' -> Search your repos... {{REPO_NAME}} -> Click {{REPO_NAME}}
      > Let's deploy your project
        > Build command: npm run build
        > Publish directory: dist
        Click 'Deploy {{REPO_NAME}}'
      > NOTE: Click on the app URL and open the browser
