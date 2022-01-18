const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'userType',
            message: 'Please enter the type of user: ',
            choices: ['Manager', 'Engineer', 'Intern', 'End program'],
        }
    ])
    .then(userTypeAnswer => {
        console.log(userTypeAnswer.userType);
        if(userTypeAnswer.userType === 'Manager') {
            managerEntry(); 
        } else if(userTypeAnswer.userType === 'Engineer') {
            engineerEntry()
        } else if(userTypeAnswer.userType === 'Intern') {
            internEntry()
        } else if(userTypeAnswer.userType === 'End program') {
            generateHTML(pageData);
        } else {
            console.log('Please make a selection!')
        }
    });
}

const managerEntry = () => {
    console.log(`
    ===============================
    Enter the Managers Information!
    ===============================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter the Manager's name: ",
            validate: nameInput => {
                if(nameInput) {return true}
                else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Please enter the Manager's Employee ID Number: ", 
            validate: idInput => {
                if(idInput) {return true}
                else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "Please enter the Manager's email address: ", 
            validate: emailInput => {
                if(emailInput) {return true}
                else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the Manager's office number: ", 
            validate: officeInput => {
                if(officeInput) {return true}
                else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        }
    ])
    .then(answers => 
        promptUser());
}
const engineerEntry = () => {
    console.log(`
    ===============================
    Enter the Engineer's Information!
    ===============================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter the Engineer's name: ",
            validate: nameInput => {
                if(nameInput) {return true}
                else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "Please enter the Engineer's Employee ID Number: ", 
            validate: idInput => {
                if(idInput) {return true}
                else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "Please enter the Engineer's email address: ", 
            validate: emailInput => {
                if(emailInput) {return true}
                else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHubUserName',
            message: "Please enter the Engineer's GitHub Username: ", 
            validate: userNameInput => {
                if(userNameInput) {return true}
                else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        }
    ])
    .then(answers => 
        promptUser());
}
const internEntry = () => {
    console.log(`
    ===============================
    Enter the Intern's Information!
    ===============================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please enter the Intern's name: ",
            validate: nameInput => {
                if(nameInput) {return true}
                else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internID',
            message: "Please enter the Intern's Employee ID Number: ", 
            validate: idInput => {
                if(idInput) {return true}
                else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "Please enter the Intern's email address: ", 
            validate: emailInput => {
                if(emailInput) {return true}
                else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'schoolName',
            message: "Please enter the Intern's school name: ", 
            validate: schoolInput => {
                if(schoolInput) {return true}
                else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        }
    ])
    .then(answers => 
        promptUser());
}

const generateHTML = (pageData) => {
    console.log(pageData);
}


promptUser();