// hold info for question
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const renderTeam = require("./src/html-templates");
const teamMemberObjArr = [];

const init = () => {
  const createManager = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the manager's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the manager's id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the manager's E-mail address?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the manager's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.id,
          answers.name,
          answers.email,
          answers.officeNumber
        );
        teamMemberObjArr.push(manager);

        addEmployees();
      });
  };

  function addEmployees() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "What employees would you like to add?",
          choices: ["Engineer", "Intern", "I'm Done"],
        },
      ])
      .then((answer) => {
        switch (answer.choice) {
          case "Engineer":
            createEngineer();
            break;

          case "Intern":
            createIntern();
            break;

          default:
            buildTeam();
            break;
        }
      });

    function createEngineer() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
          },
          {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
          },
          {
            type: "input",
            name: "email",
            message: "What is the engineer's E-mail address?",
          },
          {
            type: "input",
            name: "github",
            message: "What is the engineer's github?",
          },
        ])
        .then((answers) => {
          const engineer = new Engineer(
            answers.id,
            answers.name,
            answers.email,
            answers.github
          );
          teamMemberObjArr.push(engineer);

          addEmployees();
        });
    }
    function createIntern() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
          },
          {
            type: "input",
            name: "id",
            message: "What is the intern's id?",
          },
          {
            type: "input",
            name: "email",
            message: "What is the intern's E-mail address?",
          },
          {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
          },
        ])
        .then((answers) => {
          const intern = new Intern(
            answers.id,
            answers.name,
            answers.email,
            answers.school
          );
          teamMemberObjArr.push(intern);

          addEmployees();
        });
    }
  }
  function buildTeam() {
    fs.writeFile(
      "./dist/index.html",
      "utf-8",
      renderTeam(teamMemberObjArr)
      // , (err) => {
      //   if (err) console.log(err);
      //   else {
      //     console.log("success");
      //   }
      // }
    );
  }

  createManager();
};

init();
