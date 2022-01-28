// generate the main html for the page 
const generatePage = function (data) {   
    return`

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <!-- FONT AWESOME ICONS -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <!-- BOOTSTRAP -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>
        <body>

            <header>
                <nav class="navbar navbar-dark bg-dark">
                    <span class="navbar-brand mb-0 h1 w-100 text-center">MEET THE TEAM</span>
                </nav>
            </header>

            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <!--Team Cards-->
                        ${data}
                    </div>
                </div>
            </main>
            
        </body>
        <script src="https://code.jquery.com/jquery-3.6.0.slim.js" integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY=" crossorigin="anonymous"></script>
        </html>

    `;
}

module.exports = generatePage