function searchClan() {

    const surname = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const result = document
        .getElementById("result");


    const clan = clans.find(
        clan => clan.name.toLowerCase() === surname
    );


    if (clan) {

        let praises = "";

        clan.izithakazelo.forEach(function(item) {

            praises += `<li>${item}</li>`;

        });


        result.innerHTML = `
        
        <h2>🦁 ${clan.name.toUpperCase()}</h2>

        <p><strong>Language:</strong> ${clan.language}</p>

        <p><strong>Region:</strong> ${clan.region}</p>

        <p><strong>Totem:</strong> ${clan.totem}</p>

        <br>

        <p><strong>History:</strong> ${clan.history}</p>

        <h3>Izithakazelo</h3>

        <ul>
        ${praises}
        </ul>

        `;

    }

    else {

        result.innerHTML = `
        
        <h2>Not Found</h2>

        <p>
        We could not find that surname.
        </p>

        `;

    }

}


document
.getElementById("searchInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        searchClan();

    }

});
