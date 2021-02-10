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
    inquirer.prompt("questions").then((answers) => {
      const manager = new Manager(answers.managername);
      teamMembers.push(manager);
      id.push(answers.manager);
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
  const createEngineer = () => {};
  const createIntern = () => {};
  const buildTeam = () => {
    //
  };
}

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
