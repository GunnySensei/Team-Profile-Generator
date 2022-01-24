const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site')
const fs = require("fs");

const teamMembers = [];
const idArray = [];

const promptUser = () => {
  console.log(`
    ===============================
    Enter the Managers Information!
    ===============================
    `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter the Manager's name: ",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Please enter the Manager's Employee ID Number: ",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please enter the Manager's email address: ",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter an email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please enter the Manager's office number: ",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamMembers.push(manager);
      idArray.push(answers.managerId);
      createTeam();
    });
};

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.memberChoice) {
        case "Engineer":
          engineerEntry();
          break;
        case "Intern":
          internEntry();
          break;
        default:
          console.log(teamMembers, idArray);
      }
    })
    .then(teamMembers, idArray => {generatePage(teamMembers, idArray)});
}

const engineerEntry = () => {
  console.log(`
        ===============================
        Enter the Engineer's Information!
        ===============================
        `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Please enter the Engineer's name: ",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "Please enter the Engineer's Employee ID Number: ",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Please enter the Engineer's email address: ",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Please enter the Engineer's GitHub Username: ",
        validate: (userNameInput) => {
          if (userNameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamMembers.push(engineer);
      idArray.push(answers.engineerId);
      createTeam();
    });
};

const internEntry = () => {
  console.log(`
    ===============================
    Enter the Intern's Information!
    ===============================
    `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Please enter the Intern's name: ",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: "Please enter the Intern's Employee ID Number: ",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "emailAddress",
        message: "Please enter the Intern's email address: ",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "schoolName",
        message: "Please enter the Intern's school name: ",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter a school name!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.emailAddress,
        answers.schoolName
      );
      teamMembers.push(intern);
      idArray.push(answers.internId);
      createTeam();
    });
};

// const generatePage = (teamData, idArr) => {
//       if(!teamData) {
//           return '';
//       }

//   for(let i = 0; i <= idArr.length; i++){
//       return `
//           <section class="card" id="teamMemberCard">
//               <div class="card-header" id="memberHeader">
//                   <h1>${teamData[i].name}</h1>
//                   <h2>${idArr[i]}</h2>
//               </div>
//           </section>
//       `
//   }
//   module.exports = templateData => {
//   return `

//   <!DOCTYPE html>
//   <html lang="en">
  
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//     <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="style.css">
//   </head>
  
//   <body>
//     <header>
//       <div class="container flex-row justify-space-between align-center py-3">
//         <h1 class="page-title text-secondary bg-dark py-2 px-3"></h1>
//         <nav class="flex-row">
//           ${templateData}
//         </nav>
//       </div>
//     </header>
//     <main class="container my-5">
      
//     </main>
//     <footer class="container text-center py-3">
//       <h3 class="text-dark">&copy;2020 by </h3>
//     </footer>
//   </body>
//   </html>
//   `;
  
//   }
// }


promptUser()
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
