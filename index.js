//  DEPENDECIES

// DATA
const todos = [
  { text: "milk", complete: true },
  { text: "go jog", complete: false },
  { text: "coffee", complete: true },
];

// FUNCTIONS
const renderPage = () => {
  const page = fs.readFileSync("./templates/page.html");
  //
  todos.forEach((todo) => {});
  fs.writeFileSync("./output/page.html", page);
};

// USER INTERACTIONS
renderPage();
