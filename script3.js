class Toode {
    constructor(nimetus, hind, kogus) {
        this.nimetus = nimetus;
        this.hind = hind;
        this.kogus = kogus;
    }

    koguHind() {
        return this.hind * this.kogus;
    }
}

class Ostukorv {
    constructor() {
        this.tooted = [];
    }

    lisaToode(nimetus, hind, kogus) {
        const toode = new Toode(nimetus, hind, kogus);
        this.tooted.push(toode);
        this.kuvaOstukorviSisu();
    }

    koguSumma() {
        let summa = 0;
        this.tooted.forEach(toode => {
            summa += toode.koguHind();
        });
        return summa.toFixed(2);
    }

    kuvaOstukorviSisu() {
        const ostukorviSisuElement = document.getElementById("ostukorviSisu");
        ostukorviSisuElement.innerHTML = "";
        this.tooted.forEach(toode => {
            const listItem = document.createElement("li");
            listItem.className = "list-group-item";
            listItem.textContent = `${toode.nimetus} - Hind: ${toode.hind} EUR - Kogus: ${toode.kogus}`;
            ostukorviSisuElement.appendChild(listItem);
        });
        document.getElementById("koguSumma").textContent = this.koguSumma();
    }
}

function lisaToode() {
    const nimetus = document.getElementById("nimetus").value;
    const hind = parseFloat(document.getElementById("hind").value);
    const kogus = parseInt(document.getElementById("kogus").value);

    if (nimetus && !isNaN(hind) && !isNaN(kogus)) {
        ostukorv.lisaToode(nimetus, hind, kogus);
    } else {
        alert("Palun täitke kõik väljad õigesti.");
    }
}

const ostukorv = new Ostukorv();
