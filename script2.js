const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

function suureAlgustähega(nimi) {
    return nimi.charAt(0).toUpperCase() + nimi.slice(1).toLowerCase();
}

function looEmail(nimi) {
    const [eesnimi, perenimi] = nimi.split(" ");
    const email = `${perenimi.toLowerCase()}@tthk.ee`;
    return email;
}

function otsiNimed() {
    const otsitavNimi = document.getElementById("otsiNimeInput").value.toLowerCase();
    const otsitudNimed = nimed.filter(nimi => nimi.toLowerCase().includes(otsitavNimi));

    const leitudNimedElement = document.getElementById("leitudNimed");
    leitudNimedElement.innerHTML = "";

    if (otsitudNimed.length > 0) {
        otsitudNimed.forEach(nimi => {
            const täisnimi = suureAlgustähega(nimi);
            const email = looEmail(täisnimi);

            const listItem = document.createElement("li");
            listItem.className = "list-group-item";
            listItem.textContent = `${täisnimi} - Email: ${email}`;

            leitudNimedElement.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = "Nime ei leitud.";
        leitudNimedElement.appendChild(listItem);
    }
}
