const generatePage = (teamData, idArr) => {
    if(!teamData) {
        return '';
    }

    for(let i = 0; i <= idArr.length; i++){
        return `
            <section class="card" id="teamMemberCard">
                <div class="card-header" id="memberHeader">
                    <h1>${teamData[i].name}</h1>
                    <h2>${idArr[i]}</h2>
                </div>
            </section>
        `}

    module.exports = templateData => {
        const { data } = templateData;
    return `
 
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
        ${data}
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3"></h1>
          <nav class="flex-row">
            
          </nav>
        </div>
      </header>
      <main class="container my-5">
        
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by </h3>
      </footer>
    </body>
    </html>
    `;
    }
}
