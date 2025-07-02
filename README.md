# Todo List Web App

A simple Todo List web application built with Node.js, Express, and EJS.

## Features

- Add, view, and manage your todos
- Responsive UI with EJS templating
- Organized project structure with routes, views, and static assets
- Sidebar navigation, header, and footer
- Dynamic year and author in the footer
- **Planned:** React-based Todo List frontend

## Project Structure

```
todo/
├── node_modules/
├── todo-ejs/
│   ├── public/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── script.js
│   ├── routes/
│   │   └── todoapp.js
│   └── views/
│       ├── index.ejs
│       └── partials/
│           ├── header.ejs
│           ├── footer.ejs
│           └── sidebar.ejs
├── app.js
├── package.json
└── README.md
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the app**
   ```bash
   node app.js
   ```
   The server will start at [http://localhost:3000](http://localhost:3000).

## Usage

- Open your browser and go to [http://localhost:3000](http://localhost:3000)
- Add, view, and manage your todos

## Technologies Used

- Node.js
- Express.js
- EJS
- HTML/CSS/JavaScript
- **Planned:** React

## License

This project is licensed under the MIT License.