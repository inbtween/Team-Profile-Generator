const inquirer = require("inquirer");

//  DEPENDECIES
const Manager = requirer("./lib/Manager");
const Engineer = requirer("./lib/Engineer");
const Intern = requirer("./lib/Intern");

const path = require("path");
const fs = require("fs");
const Choice = require("inquirer/lib/objects/choice");

const teamMember = [];
const id = [];

// DATA


// FUNCTIONS
function menu() {
  const createManager = () => {
    // var manager questions in prompt()
    // .then(answer)
    inquirer.prompt(questionsManager).then((answer) => {
      const manager = new Manager(managername);
      teamMembers.push(manager);
      id.push(answer.manager);
      createTeam();
    });
  };
  const createTeam = () => {
    inquirer.prompt(questions).then((answer) => {
      switch (answer.choice.role) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          buildTeam();
      }
    });
    // what type of team members
    // switch
    // choice run enginer(), intern(), buildteam()
  };
  const createEngineer = () => {
    inquirer.prompt(questionsEngineer).then((answer) => {
    const engineer = new Engineer(answer.choice.role);
    teamMembers.push(engineer);
    id.push(role.engineer);
    createEngineer();
    });
  };
  const createIntern = () => {
    inquirer.prompt(questionsIntern).then((answer) => {
      const intern = new Intern(answer.choice.role);
      teamMembers.push(intern);
      id.push(intern);
          createIntern();
    });
  };
  const buildTeam = () => {
    inquirer.prompt(questionstTeam).then((answer) => {
        switch (answer.choice.role) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;
          default:
            buildTeam();
        }
      });

menu();

const answers = (res) => {
    `${res.role}
    ${res.id}
    ${res.office}
    ${res.email}
    ${res.school}`  // write it to a file
    fs.writeFile(".src/index.html", html, (err) =>
      err ? console.error(err) : console.log("success")
    );
    };
// USER INTERACTIONS ==========================
const questions = [
  {
    // Create Manager?
    // Create Team?
    //  Create Engineer?
    // Create Intern?
    type: "list",
    name: "role",
    message: "what type of team member would you like to add?",
    choices: ["Engineer", "Intern", "None"],
  },
];
const questionsManager = [
  {
    type: "input",
    name: "role",
    message: "Please enter your a name.",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter an employee ID.",
  },
  {
    type: "input",
    name: "office",
    message: "Please enter an officer number.",
  },
];
const questionsEngineer = [
  {
    type: "input",
    name: "role",
    message: "Please enter your a name.",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter an employee ID.",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub account.",
  },
];
const questionsIntern = [
  {
    type: "input",
    name: "role",
    message: "Please enter your a name.",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter an employee ID.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter an employee email.",
  },
  {
    type: "input",
    name: "school",
    message: "Please enter your school.",
  },
];
const questionsTeam = [
    {
      type: "list",
      name: "role",
      message: "what type of team member would you like to add?",
      choices: ["Engineer", "Intern", "None"],
    },
  ];

// Please enter your a name.
// Please enter an employee ID.
// Please enter an employee email.
// Please enter an office number.
// Would you  like to add another employee? Engineer, Intern, Finish Team
// do we have employees?
// no?
// make a manager
// yes?
// ask do you want to add any more
// yes?
// what type? (engineer, intern, manager)
// no?
// quit
