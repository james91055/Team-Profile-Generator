const makeTeam = (team) => {
  const generateManagerCard = (manager) => {
    return `
        <div class="card" style="width: 18rem">
        <div class="card- body">
        <h5 class="card-title">${manager.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.id}</li>  
        <a href="mailto:${manager.email}">
          <li class="list-group-item">${manager.email}</li></a>
        <li class="list-group-item">${manager.offiecNum}</li>
      </ul>
    </div>
        
        `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManagerCard(manager))
  );

  return html.join("");

  module.exports = (teamHtml) => {
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
    <title>Document</title>
     </head>
    <body>
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
};