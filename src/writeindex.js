const generateTeam = (team) => {
  const generateManager = (manager) => {
    console.log(manager);
    // build a string with user managerponses
    return `
    <div class="card">
    <h5 id="employee-name">${manager.getName()}</h5>
    <li class="id">${manager.getId()}</li>
    <li class="email">${manager.getEmail()}</li>
    <li class="office-no">${manager.getOfficeNumber()}</li>
 </div>
    `;
  };
  const html = [];
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  const generateEngineer = (engineer) => {
    console.log(engineer);
    // build a string with user engineer responses
    return `
    <div class="card">
    <h5 id="employee-name">${engineer.getName()}</h5>
    <li class="id">${engineer.getId()}</li>
    <li class="email">${engineer.getEmail()}</li>
    <li class="gitHub">${engineer.getGithub()}</li>
 </div>
    `;
  };

  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  const generateIntern = (intern) => {
    console.log(intern);
    // build a string with user internponses
    return `
    <div class="card">
    <h5 id="employee-name">${intern.getName()}</h5>
    <li class="id">${intern.getId()}</li>
    <li class="email">${intern.getEmail()}</li>
    <li class="school">${intern.getSchool()}</li>
 </div>
    `;
  };

  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );
  return html.join("");
};

module.exports = (team) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
  <div class="container-fluid">
      <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading">
              <h1 class="text-center">My Team</h1>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="row">
          <div class="team-area col-12 d-flex justify-content-center">
           ${generateTeam(team)}
          </div>
      </div>
  </div>
</body>
</html>
  `;
};
