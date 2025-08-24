// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

// Challenge: Append a message to notes.txt
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text
//fs.appendFileSync('notes.txt', ' appended text salute!')

// const add = require('./utils.js')
// const name = 'Eddie Jr'
// const sum = add(5, 15)
// console.log(sum)

// Challenge: Define and use a function in a new file
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console

// const validator = require('validator')
// const getNotes = require('./notes.js');
// const message = getNotes();
// console.log(message);

// Challenge: Use the chalk library in your project
// 1. Install latest version of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
// Bonus: Use docs to mess around with other styles. Make text bold and inversed.

import chalk from 'chalk';

console.log(chalk.red('Error!'));

// Combine styled and normal strings
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold('Hello world!'));