// DEPENDENCIES ===============================
// built in node packages
const fs = require("fs");
// npm packages
const inquirer = require("inquirer");
// FUNCTIONS ==================================
// GIVE a command-line application that accepts user input
const writeUserInput = (res) => {
  console.log(res.username);
  // build a string with user responses
  const managerObj = `# ${res.role}
//   id="employee-role" 
    
  
// <li class="list-group-item">Id:</li>
    ${res.id}

    // <li class="list-group-item">Email:</li>
    ${res.email}

    // <li class="list-group-item">Office No.</li>
    ${res.office}
   
  
  
    ${res.questionsManager}
    `;
  // write it to a file
  fs.writeFile("manager.html", managerObj, (err) =>
    err ? console.error(err) : console.log("success")
  );
};

// USER INTERACTIONS ==========================
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

function initial() {
  inquirer.prompt(questionsManager).then((res) => {
    console.log("generating markdown");
    writeUserInput(res);
    console.log(res);
  });
}
initial();
