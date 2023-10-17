function arvutaSunniaeg(isikukood) {
    const aasta = "19" + isikukood.slice(1, 3);
    const kuu = isikukood.slice(3, 5);
    const päev = isikukood.slice(5, 7);
    const sünniaeg = new Date(`${aasta}-${kuu}-${päev}`);
    return sünniaeg;
}

function arvutaVanus(sünniaeg) {
    const täna = new Date();
    const vanus = täna.getFullYear() - sünniaeg.getFullYear();
    return vanus;
}

function lisaInimene() {
    const nimi = document.getElementById("nimi").value;
    const isikukood = document.getElementById("isikukood").value;

    if (nimi && isikukood && isikukood.length === 11) {
        const sünniaeg = arvutaSunniaeg(isikukood);
        const vanus = arvutaVanus(sünniaeg);
        const listItem = document.createElement("li");
        listItem.textContent = `${nimi} - Sünniaeg: ${sünniaeg.toLocaleDateString()}, Vanus: ${vanus} aastat`;
        document.getElementById("inimesed-list").appendChild(listItem);
    } else {
        alert("Palun sisestage korrektne nimi ja isikukood (11 numbrit).");
    }
}
