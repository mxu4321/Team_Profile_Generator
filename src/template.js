// Purpose: To create the HTML template for the generated HTML file
// Includes: name, id, email: getName(), getId(), getEmail(), getRole()

// --- manager card ---
const managerCard = (manager) => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager. getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
};

// --- engineer card --- 
const engineerCard = (engineer) => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
    `;
};

// --- intern card --- 
const internCard = (intern) => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `;
};

// add condition to create card on html accordingly
function teamCard (employee){
    switch(employee.getRole()){
        case "Manager": return managerCard(employee);
        case "Engineer": return engineerCard(employee);
        case "Intern": return internCard(employee);
        default: return "";
    }
}

// loop through data and create cards
function site(data){
    let template = ``
    data.forEach(datum =>{
        template += teamCard(datum)
    })
    return template
}

// generate HTML template
const generateHTML = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../dist/assets/reset.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="../dist/assets/style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center text-light">My Team</h1>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        ${site(data)}
                    </div>
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
};

// export functions
module.exports = generateHTML;
