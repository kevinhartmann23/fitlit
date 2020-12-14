# fitZen - Health Tracker
### Turing School of Software Design - Mod2 Paired project

### Contributors
- Jeff Kersting : [github profile](https://github.com/JeffKersting)
- Kevin Hartmann : [github profile](https://github.com/kevinhartmann23)

The details of this project are outline in [this project spec](http://frontend.turing.io/projects/fitlit.html).

## Table of Contents
1. [Introduction](#introduction)
2. [Instructions](#setup-instructions)
3. [How-To](#using-fitzen)
4. [Challenges & Wins](#challenges-&-wins)
5. [Appreciation](#appreciation)

## Introduction
  The task was to build an app that tracks a user's health information. Given the data forms, we created a single page view where you can filter through a user's hydration, activity, and sleep data. We have also included a friends sidebar that allows a user to remain up to date with their friends activities for extra encouragement! Please follow the [setup instructions](#setup-instructions) below on how to begin!

## Setup Instructions

- For easy use and access visit our deployed site [here]()

If you are interested in browsing our code or contributing, follow the steps below:
  1. Fork this repo - on the top right corner of this page, click the **Fork** button.
  2. Once forked, `git clone [ssh key]` in your terminal, to add this repo locally.
  3. Run `npm install` to install all of this projects dependencies.

[Back to Top of Page](#table-of-contents)

### Testing

We have created a series of tests for our data model. If you would like to run a few of these tests, choose a test file and run `npm test test/[selected test file]` in your terminal.
You will see that we have provided a set test data file to make testing much smoother and easier to read.

### Linting Your Code

Run the command in your terminal `npm run lint` to run the linter on your JavaScript code.

The linter will look only at the JavaScript files you have within the `src` and the `test` directories.

### Data Model

We have decided to break our data model down into 2 files for each category: our `repos` will consist of any data and method needed to compile data for **all** users. Then, individual data `user` files to compile data based on a single user.

Below is a layout of our data architecture:
![architecture](./assets/fitLitArch.png)

You will also find we added a few other files to create a better user experience!
- `chartHelpers.js` - using a additional dependency we built charts to display user information
- `friend.js` - adding a friend file, allowed us to gather a user's friend information based on the filtered data

### Technologies Used
- javascript
-

[Back to Top of Page](#table-of-contents)

## Using fitZen

#### Login Page
On page load, you are greeted by a login page. This is currently designed to enter a given name from the user's data file. Typing a user's name, then clicking the login button will allow a user access to their information.
------ INSERT IMAGE/GIF HERE ----------
Future Iterations: We plan to add usernames and passwords to our data, and allow a user to enter a password for user security.

#### Welcome Page
Once a user has logged in, the main page displays a users friends and our meditating mascot! The bubbles surrounded by the fitZen mascot are populated with a **water glass** representing a user's hydration, a **running shoe** representing a user's activity, and a **bed** representing a user's sleep. You can also find smaller icons in the top right corner of the window for quick access and filtration of data.
------ INSERT IMAGE/GIF HERE ----------
Future Iterations: ??

#### Filtering Data
On click of any icon, the icon will change colors and the window will populate data a user is choosing to view. The friend's section will now show a leaderboard of who is ahead in the totals based on each page visited!
------ INSERT IMAGE/GIF HERE ----------
Future Iterations: ??

#### Hamburger Menu
At the very top right there is a small menu icon, when a user hover's over this icon they are give the option to view their information or logout!
------ INSERT IMAGE/GIF HERE ----------
Future Iteration: We plan to add an edit feature to user's information for more accurate data display and better user experience.

[Back to Top of Page](#table-of-contents)

## Challenges & Wins

### Challenges

### Wins/Reflections



[Back to Top of Page](#table-of-contents)
