function buildTeam(team) {
  console.log(team);
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Employee Contact Management</title>
  
      <!-- Bootstrap CSS -->
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid" id="title-bar">
        <div class="container">
          <h1 class="display-4">Welcome to my Team.</h1>
          <p class="lead">
            Contact our employees using the cards below.
          </p>
        </div>
      </div>
      <div class="row my-row">
      <div class="card my-card-body" style="width: 18rem">
        <div class="card-body my-card-top">
          <h5 class="card-title"> ${team[0].name}</h5>
          <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush my-list">
          <li class="list-group-item my-card-bottom"><b>ID: </b>${team[0].id}</li>
          <li class="list-group-item my-card-bottom">
            <b>Email: </b>
            <a href="mailto:${team[0].email}" class="card-link">${team[0].email}</a>
          </li>
          <li class="list-group-item my-card-bottom">
            <b>Office: </b>${team[0].officeNumber}
          </li>
        </ul>
      </div>
      <div class="card my-card-body" style="width: 18rem">
      <div class="card-body my-card-top">
        <h5 class="card-title"> ${team[1].name}</h5>
        <p class="card-text">Engineer</p>
      </div>
      <ul class="list-group list-group-flush my-list">
        <li class="list-group-item my-card-bottom"><b>ID: </b>${team[1].id}</li>
        <li class="list-group-item my-card-bottom">
          <b>Email: </b>
          <a href="mailto:${team[1].email}" class="card-link">${team[1].email}</a>
        </li>
        <li class="list-group-item my-card-bottom">
          <b>Github: </b><a href="https://github.com/${team[1].github}" class="card-link">${team[1].github}</a>
        </li>
      </ul>
    
    </div>
      <div class="card my-card-body" style="width: 18rem">
      <div class="card-body my-card-top">
        <h5 class="card-title"> ${team[2].name}</h5>
        <p class="card-text">Intern</p>
      </div>
      <ul class="list-group list-group-flush my-list">
        <li class="list-group-item my-card-bottom"><b>ID: </b>${team[2].id}</li>
        <li class="list-group-item my-card-bottom">
          <b>Email: </b>
          <a href="mailto:${team[2].email}" class="card-link">${team[2].email}</a>
        </li>
        <li class="list-group-item my-card-bottom">
          <b>School: </b>${team[2].school}
        </li>
      </ul>
    </div>
    </div>
    </div>
  
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
}

module.exports = buildTeam;
