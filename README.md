# react-ultimate


### run quokka
       "Ctrl+Shift+P"
       Quokka.js: Start on Current File

### 10-react-quiz
       - npm i json-server
       - create "data" folder with questions.json
       - package.json add "server": "json-server --watch src/data/questions.json --port 8000"
       - npm run server

### vite
       - npm create vite@latest
       Project name:
       Select a framework:
       Select a variant:
              cd project-name
              npm install
              npm run dev

### vite - eslint
       npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev

       .eslint.json file:
       `
        {
          "extends": "react-app"
        }
       `

       .vite.config.js file:
       `import eslint from 'vite-plugin-eslint';
       
       plugins: [react(), eslint()], 
       `
