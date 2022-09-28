// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./lib/generateHTML');

const profileCards = [];

// Questions user is asked in CLI
const welcome = () => {
    console.log(`
Welcome to the team generator!
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
                const createManager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.officeNumber));
                const manager = {
                    name: createManager.getName(),
                    role: createManager.getRole(),
                    id: createManager.getId(),
                    email: createManager.getEmail(),
                    officeNumber: createManager.getOfficeNumber(),
                };
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
                const createEngineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
                const engineer = {
                    name: createEngineer.getName(),
                    role: createEngineer.getRole(),
                    id: createEngineer.getId(),
                    email: createEngineer.getEmail(),
                    github: createEngineer.getGithub(),
                };
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
                const createIntern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
                const intern = {
                    name: createIntern.getName(),
                    role: createIntern.getRole(),
                    id: createIntern.getId(),
                    email: createIntern.getEmail(),
                    school: createIntern.getSchool(),
                };
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
        
                    createHTMLFile(profileCards);
                    return
                }
            });
    }
}


// Create HTML file with profiles based on user inputs
const createHTMLFile = (profileCards) => {
    const htmlPageContent = generateHTML(profileCards);

    fs.writeFile('./dist/index.html', htmlPageContent, (err) => err ? console.log(err) : console.log('Successfully created index.html!'))
}

// Initialise app
const init = () => {
    welcome();
    collectPeopleData();

    
}

init();