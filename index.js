const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
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
        name: "managerID",
        message: "Please enter the Manager's Employee ID Number: ",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter a name!");
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
          generateHTML(teamMembers, idArray);
      }
    });
}

const managerEntry = () => {
  inquirer.prompt({
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
  })
  .then((answers) {
      const manager = new Manager(
          answers.managerOfficeNumber
      );
  })
};

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
        name: "engineerID",
        message: "Please enter the Engineer's Employee ID Number: ",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter a name!");
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
        name: "internID",
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
        answers.internEmail,
        answers.internSchool
      );
      teamMembers.push(intern);
      idArray.push(answers.internId);
      createTeam();
    });
};

const generateHTML = (teamMembersArr, teamIdArr) => {
  console.log(teamMembersArr, teamIdArr);
};

promptUser();
