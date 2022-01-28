// GENERATE MAIN HTML FOR THE PAGE ------------------------------------------------------------
const renderPage = function (employeeCards) {   
    return`        
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3 team-heading jumbotron bg-info text-white">
          <h1 class="text-center">MEET THE TEAM!</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
          ${employeeCards}
        </div>
      </div>
    </div>
  </body>
</html>

    `;
}

// GENERATE HTML FOR INDIVIDUAL CARDS ---------------------------------------------------------
// MANAGER CARD
const renderManager = function (manager) {
    return `
    <div class="card m-2">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Manager </h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office number: ${manager.office}</li>
            </ul>
        </div>
    </div>
    `;
}

// ENGINEER CARD
const renderEngineer = function (engineer) {
    return `
    <div class="card m-2">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
    `;
}

// INTERN CARD
const renderIntern = function (intern) {
    return `
    <div class="card m-2">
        <div class="card-header">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i> Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `;
}

// CONVERT ARRAY TO CARDS AND APPEND TO PAGE --------------------------------------------------
generatePage = (data) => {

    // CARD ARRAY
    cardArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employeeData = data[i];
        const role = employeeData.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = renderManager(employeeData);

            cardArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = renderEngineer(employeeData);

            cardArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = renderIntern(employeeData);

            cardArray.push(internCard);
        }
        
    }

    // JOIN THE CARDS AND PUSH TO GENERATETEAMPAGE
    const employeeCards = cardArray.join('')

    // PUSH EVERYTHING TO THE PAGE 
    const generateFinal = renderPage(employeeCards); 
    return generateFinal;

}


module.exports = generatePage