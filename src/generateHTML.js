function generateHTML(profileCards) {
    let totalCardHTML = '';

    const createCardHTML = (card, icon, uniqueListItem) => {
        return `
            < div class="card mx-2 my-3 px-0 col-12 col-sm-6 col-md-4 col-xl-3" >
                    <div class="card-header">
                        <h2>${card.name}</h2>
                        <h3>${card.role} ${icon}</h3>
                    </div>
                    <div class="card-body text-dark">
                        <div class="card-text">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: <span>${card.id}</span></li>
                                <li class="list-group-item">Email: <a href="mailto:${card.email}" target="_blank" rel="noopener noreferrer">${card.email}</a></li>
                                <li class="list-group-item">${uniqueListItem}</li>
                            </ul>
                        </div>
                    </div>
                </div > `;
};
    profileCards.forEach(card => {
        let icon = '';
        let uniqueListItem = '';
        
        if (card.role === 'Manager') {
            icon = '💡';
            uniqueListItem = `Office number: ${ card.officeNumber } `;
        } else if (card.role === 'Engineer') {
            icon = '🛠';
            uniqueListItem = `GitHub: <a href="https://github.com/${card.github}" target="_blank" rel="noopener noreferrer">${card.github}</a>`;
        } else {
            icon = '📚';
            uniqueListItem = `School: ${ card.school } `;
        }
        let cardHTML = createCardHTML(card, icon, uniqueListItem);
        totalCardHTML = totalCardHTML.concat(cardHTML);
    });
       
    return `< !DOCTYPE html >
        <html lang="en-US">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <!--Bootstrap-->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <!--Custom styling-->
                <link rel="stylesheet" href="./style.css" />
                <title>My Team</title>
            </head>
            <body>
                <!--Header-->
                <header class="jumbotron">
                    <h1>My Team</h1>
                </header>
                <!--Profile cards-->
                <div class="container-fluid">
                    <div class="row d-flex flex-wrap justify-content-around">${totalCardHTML}
                    </div>
                </div>
                <!--Bootstrap-->
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
            </body>
        </html>`
}

module.exports = generateHTML;