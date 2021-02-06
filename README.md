# fitness-tracker
This workout tracker is created using Mongo database with a Mongoose schema and handles routes with Express.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## User Story
```
As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.
```
## Description
A consumer will reach their fitness goals more quickly when they track their workout progress. This application allows the user to create a new workout or continue with their last workout. The user will be able to:

  * Add exercises to the most recent workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

  * View the total duration of each workout from the past seven workouts on the `stats` page.

Application Development: 
Two different route files have been created within the routes folder:
- htmlRoutes.js handles the static html requests
- apiRoutes.js handles the dynamic API requests

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)

## Installation
1. Pre-requirement is to install a command-line application and node version 14.15.0 or higher.
2. Open the terminal/command-line and open the directory where the project is downloaded. 
3. Enter the command 'npm install' to install all the required package dependencies.

## Usage
1. In the command line/terminal within the directory that the project is downloaded, invoke the application using the command 'node server.js' or' npm start' 
2. The application can be accessed using this URL in the browser (https://my-fitness-tracker-app.herokuapp.com/). The Home page of the fitness-tracker application will be rendered, with a navbar that has links to the Dashboard as well as the home page. The user can also see the details of the last workout on this page.
3. Clicking on the "Continue workout" button allows the user to add new exercises to the last workout. 
4. Clicking on the "New workout" button allows the user to add a new workout followed by new exercises for the new workout. 
5. Clicking on the "Dashboard" allows user to view the stats page, with details like combined weight and total duration of each workout from the past seven days.

## Contributing
This application has been individually developed by Jesal Mehta. If you are interested in fixing issues and contributing directly to the code base, you can do so according to the guidelines listed in the [Contributor Covenant](https://www.contributor-covenant.org/) industry standard.

## Questions
For any questions,
Here is my Github profile link: [JesalDM](https://github.com/JesalDM)  
You can also reach out to me directly at [jesaldmehta@gmail.com](mailto:jesaldmehta@gmail.com)

## License
This project is licensed under the terms of the MIT license.

## For Review
* Github Repository URL: https://github.com/JesalDM/fitness-tracker
* Deployed application Heroku URL: https://my-fitness-tracker-app.herokuapp.com/