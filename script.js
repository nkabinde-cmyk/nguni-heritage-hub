function searchClan() {

    const surname =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const result =
        document.getElementById("result");

    if (surname === "judah") {

        result.innerHTML = `
            <h2>🦁 JUDAH</h2>
            <p><em>"The Lion of Praise"</em></p>

            <p><strong>Language:</strong> IsiZulu</p>
            <p><strong>Region:</strong> South Africa</p>
            <p><strong>Totem:</strong> Lion</p>

            <h3>Izithakazelo</h3>

            <ul>
                <li>Makhosini!</li>
                <li>Gagashe!</li>
                <li>Ndabezitha!</li>
                <li>Mbongambi!</li>
                <li>Mvelase!</li>
                <li>Makhwesi!</li>
                <li>Dlabazitha!</li>
                <li>Nzwakele!</li>
                <li>Mkhonto ongaguqi!</li>
                <li>Zwide!</li>
                <li>Ntenge'ngafuqwa!</li>
                <li>Ibhubesi elingehlulwa!</li>
                <li>Owagezela esizibeni sobungwele nesobukhosi!</li>
            </ul>
        `;

    } else {

        result.innerHTML = `
            <h2>Not Found</h2>
            <p>We could not find that surname.</p>
        `;
    }
}
document
    .getElementById("searchInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            searchClan();
        }

    });