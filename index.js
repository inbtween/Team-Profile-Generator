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
    inquirer.prompt(questionsManager).then((name) => {
      const manager = new Manager(name.managername);
      teamMembers.push(manager);
      id.push(name.manager);
      createTeam();
    });
  };
  const createTeam = () => {
    inquirer.prompt(questions).then((choice) => {
      switch (choice.role) {
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
    inquirer.prompt(questionsEngineer).then((name) => {
    const engineer = new Engineer(name);
    teamMembers.push(engineer);
    id.push(name.engineer);
    createEngineer();
    });
  };
  const createIntern = () => {
    inquirer.prompt(questionsIntern).then((name) => {
      const intern = new Intern(name);
      teamMembers.push(intern);
      id.push(name.intern);
          createIntern();
    });
  };
  const buildTeam = () => {
    inquirer.prompt(questionstTeam).then((choice) => {
        switch (choice.role) {
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
