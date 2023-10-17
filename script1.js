const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    // ...teised õpilased siin
];

function lisaTulemus() {
    const nimi = document.getElementById("nimi").value;
    const tulemus = parseFloat(document.getElementById("tulemus").value);

    if (nimi && !isNaN(tulemus)) {
        const õpilane = opilased.find(op => op.nimi === nimi);
        if (õpilane) {
            õpilane.tulemused.push(tulemus);
        } else {
            opilased.push({ nimi: nimi, tulemused: [tulemus] });
        }
        kuvaTulemused();
    } else {
        alert("Palun sisestage korrektne nimi ja tulemus.");
    }
}

function arvutaKeskmine(tulemused) {
    const summa = tulemused.reduce((acc, val) => acc + val, 0);
    const keskmine = summa / tulemused.length;
    return keskmine.toFixed(2);
}

function kuvaTulemused() {
    const tulemusedList = document.getElementById("tulemused-list");
    tulemusedList.innerHTML = "";
    opilased.forEach(õpilane => {
        const keskmineTulemus = arvutaKeskmine(õpilane.tulemused);
        const listItem = document.createElement("li");
        listItem.textContent = `${õpilane.nimi} - Tulemused: ${õpilane.tulemused.join(", ")}, Keskmine: ${keskmineTulemus}`;
        tulemusedList.appendChild(listItem);
    });
}
