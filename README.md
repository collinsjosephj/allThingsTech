# The Tech Deck Blog  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Overview

The Tech Deck is a platform for developers to write and share technical content, such as articles, tutorials, and guides. The application allows users to create an account, write posts, comment on posts, and edit their own posts. It's built using Node.js, Express.js, Sequelize, MySQL, and Handlebars, with TailwindCSS for styling.
 
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. Collective and constructive discourse is a vital way to grow individually, and this is aimed to be an outlet for like-minded people to share similar, or different experiences, and ultimately broaden their understanding of this ever-changing landscape.

<img width="1183" alt="Screenshot 2024-07-18 at 06 26 03" src="https://github.com/user-attachments/assets/f063c781-9bd0-4675-8a0d-7cbd3b5d9c26">


## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation

1. To install this application, you first need to clone the repository:

   
   ```
   git clone https://github.com/collinsjosephj/allThingsTech.git
   
   cd tech-deck
   
   ```

2. Install dependencies:
   
   ```
   npm install
   
   ```
   
3. Set up environmennt variables. To do this, simply create at `.env` file at the root directory, and add the following:

   ```
   DB_NAME=your_local_db_name
   DB_USER=your_local_db_user
   DB_PASSWORD=your_local_db_password
   ```


4.  Assuming you have `Sequalize` installed, create and seed the database:
   
   ```
   npx sequelize-cli db:create
   ```
   ```
   npx sequelize-cli db:migrate
   ```
   ```
   npx sequelize-cli db:seed:all
   ```

5. Start the application locally:

First, you need to run, which will seed your application and load my CSS that I installed via `TailwindCSS`. 

   ```
   npm run seed
   ```

   ```
   
   npm run start
   
   ```

## Usage

- Navigate to `http://localhost:3000` in your browser to access the application.
- Sign up for an account or log in if you already have one.
- Create new posts, edit your posts, and comment on others' posts.

## Deployment

This application is deployed live with Heroku, and uses Sequelize for its database functionality.
Here is the link to view the live version: [The Tech Deck Blog](https://techdeckblog-596f0e71dc60.herokuapp.com/)

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request. You can also reach out to me via the links provided below. I would absolutely **love** to collaborate on any and all projects, big and small.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/collinsjosephj/allThingsTech/blob/main/LICENSE) file for details. 

## Questions

If you have any questions about the repo, open an issue or contact me directly via email [here](mailto:collinsjosephj@gmail.com). 

You can find more of my work on [GitHub](https://github.com/collinsjosephj@gmail.com).
