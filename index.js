// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./lib/generateHTML');

const profileCards = [];

// Questions user is asked in CLI
const welcome = () => {
    console.log(`Welcome to the team generator!
    Use \`npm run reset\` to reset the dist/ folder.
    
    Please build your team.`);
}

const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager\'s office number?',
        },
    ])
    .then (profileCards.push(data))
    .then (decideAddMember());
}

const decideAddMember = () => {
    prompt([
            {
                type: 'list',
                name: 'addMember',
                message: 'Which type of team member would you like to add?',
                choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members.'],
            },
        ])
        .then((data) => {
            if (data.choices === 'Engineer') {
                addEngineer();
            } else if (data.choices === 'Intern') {
                addIntern();
            } else {
                return
            }
        });
}

const addEngineer = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s GitHub username?',
        },
    ])
    .then(profileCards.push(data))
    .then(decideAddMember());
}

const addIntern = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s school?',
        },
    ])
    .then(profileCards.push(data))
    .then(decideAddMember());
}

// Initialize app
const init = () => {
    welcome();
    addManagerData()
        .then((profileCards) => fs.writeFileSync('./dist/index.html', generateHTML(profileCards)))
        .then(() => console.log('Successfully created index.html!'))
        .catch((err) => console.error(err));
}

init();