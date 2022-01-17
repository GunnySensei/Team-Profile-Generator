const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'userType',
            message: 'Please enter the type of user: ',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            
        }
    ]);
    
}

const managerEntry = () => {
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
    ]);
}
const engineerEntry = () => {
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
    ]);
}
const internEntry = () => {
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
    ]);
}


promptUser();