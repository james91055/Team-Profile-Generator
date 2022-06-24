const makeTeam = (team) => {
  const generateManagerCard = (manager) => {
    return `

    <div class="col-lg d-flex justify-content-center ">
    <div class="card mb-4 rounded-4 shadow" style="width: 20rem">
      <div class="card-body bg-primary text-white">
        <h3 class="card-title">${manager.name}</h3>
        <h3 class="card-title ">🧑‍💼 Manager</h3>
      </div>
      <div class = "bg-light p-2">
      <ul class="list-group list-group-flush m-3 border bg-secondary">
        <li class="list-group-item">ID:${manager.id}</li>
       
          <li class="list-group-item"> Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office number:${manager.officeNumber}
        </li>
      </ul>
    </div>
    </div>
  </div>

        `;
  };
  const generateEngineerCard = (engineer) => {
    return `

    <div class="col-lg d-flex justify-content-center ">
    <div class="card mb-4 rounded-3 shadow" style="width: 20rem">
      <div class="card-body bg-primary text-white">
        <h3 class="card-title">${engineer.name}</h3>
        <h3 class="card-title">🤖 Engineer</h3>
      </div>
      <div class = "bg-light p-2">
        <ul class="list-group list-group-flush m-3 border bg-secondary">
        <li class="list-group-item">ID:${engineer.id}</li>
       
        <li class="list-group-item"> Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item"> Github:<a href="https://github.com/${engineer.github}"
          >${engineer.github}</a></li>
      </ul>
      </div>
    </div>
  </div>
        `;
  };
  const generateInternCard = (intern) => {
    return `

    <div class="col-lg d-flex justify-content-center ">
    <div class="card mb-4 rounded-3 shadow" style="width: 20rem">
      <div class="card-body bg-primary text-white ">
        <h3 class="card-title">${intern.name}</h3>
        <h3 class="card-title">🧑‍🎓 Intern</h3>
      </div>
      <div class = "bg-light p-2">
        <ul class="list-group list-group-flush m-3 border bg-secondary">
        <li class="list-group-item">ID:${intern.id}</li>       
          <li class="list-group-item"> Email:<a href="mailto:${intern.email}" >${intern.email}</a></li>
        <li class="list-group-item"> School:${intern.school}</li>
      </ul>
      </div>
    </div>
  </div>

  

        `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManagerCard(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineerCard(engineer))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateInternCard(intern))
  );

  return html.join("");
};
module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.
        0"
        />
    
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
        <link href="./style.css" rel="stylesheet" />
        <title>Document</title>
      </head>
      <header>
        <div class="display-4 fs-2 col-fluid bg-danger container-fluid p-4 mx-auto">
          <p class="text-center text-white">My Team</p>
        </div>
      </header>
      <body>
      <div class="p-5 row row-cols-1 row-cols-md-3 d-flex justify-content-center">
   
   
   
   
      ${makeTeam(team)}
   
   
   
   
        <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
      crossorigin="anonymous"
    ></script>
  </body>
</html>

    
    `;
};
