# Logo Font

https://www.fontspace.com/ardyanatypes

### Run JSON Server

```sh
$ npx json-server db.json
```

Need to align social media links in footer properly

Tasks

1. Add ability to get posts from json server and display them
2. Create actual backend using node and express
3. Create admin section where you can add stories and modify them etc.
4. Create authentication for admin users and subscribers

## Running Client and Server

We can use the `concurrently` package to run both the client and the server at the same time

```sh
$ npm i concurrently
```

`/package.json`

```json
"scripts": {
  "start": "node backend/server.js",
  "server": "nodemon backend/server.js",
  "client": "npm run dev --prefix frontend",
  "dev": "concurrently \"npm run server\" \"npm run client\" "
},
```

```sh
$ npm run dev
```
