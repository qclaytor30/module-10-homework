// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// const generateHTML = require('./lib/generateHTML');
const Manager = require('./lib/manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const profileCards = [];

// Questions user is asked in CLI
const welcome = () => {
    console.log(
        `Welcome to the team generator!
    Use \`npm run reset\` to reset the dist/ folder.
    
        Please build your team.`);
}

const collectPeopleData = () => {
    const addManagerData = () => {
        inquirer
            .prompt([
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
            .then((answers) => {
                const manager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.officeNumber));
                profileCards.push(manager);
                decideAddMember();
            });
    }

    addManagerData();

    const addEngineerData = () => {
        inquirer
            .prompt([
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
                    message: 'What is the engineer\'s email?',
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the engineer\'s GitHub username?',
                }
            ])
            .then((answers) => {
                const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
                profileCards.push(engineer);
                decideAddMember();
            });
    }

    const addInternData = () => {
        inquirer
            .prompt([
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
                    message: 'What is the intern\'s email?',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is the intern\'s school?',
                },
            ])
            .then((answers) => {
                const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
                profileCards.push(intern);
                decideAddMember();
            });
    }

    const decideAddMember = () => {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'decision',
                    message: 'Which type of team member would you like to add?',
                    choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members.'],
                },
            ])
            .then((answers) => {
                if (answers.decision === 'Engineer') {
                    addEngineerData();
                } else if (answers.decision === 'Intern') {
                    addInternData();
                } else {
                    console.log(profileCards);
                    return
                }
            });
    }
}

// Initialize app
const init = () => {
    welcome();
    collectPeopleData();

    const htmlPageContent = generateHTML(profileCards);

    console.log(htmlPageContent);
    // .then((profileCards) => fs.writeFileSync('./dist/index.html', generateHTML(profileCards)))
    // .then(() => console.log('Successfully created index.html!'))
    // .catch((err) => console.error(err));
}

init();