let userChoice = document.querySelector('#choix');
let fields = document.querySelectorAll('input');

userChoice.addEventListener('change', selectionDevise);
userChoice.addEventListener('change', function () {
    fields.forEach(elt => {
        elt.value = 0;
    });
});
fields.forEach(elt => {
    elt.addEventListener('keyup', conversion);
});

function selectionDevise() {
    let choixDevise = this.selectedIndex;
    let devises = [6.56, 1.2];
    switch (choixDevise) {
        case 0:
            taux = devises[choixDevise];
            document.querySelector('h1').textContent = "Convertisseur Euros - Francs";
            document.querySelector('#champs2').previousElementSibling.textContent = "Somme en francs";
            document.querySelector('#champs2').setAttribute('name', 'fancs');
            break;
        case 1:
            taux = devises[choixDevise];
            document.querySelector('h1').textContent = "Convertisseur Euros - dollars";
            document.querySelector('#champs2').previousElementSibling.textContent = "Somme en dollars";
            document.querySelector('#champs2').setAttribute('name', 'dollars');

            break;
    }
}

function sommeValid(somme) {
    if (somme < 0 || isNaN(somme)) {
        alert("Somme invalide!");
        return false;
    }
    return true;
}

function conversion() {
    let aConvertir = this.value;
    aConvertir = aConvertir.replace(",", ".");
    if (aConvertir == "") {
        aConvertir = 0.00;
    }
    aConvertir = parseFloat(aConvertir);
    let choixDevise = document.querySelector('#choix').selectedIndex;
    let devises = [6.56, 1.2];
    let taux = devises[choixDevise];
    if (sommeValid(aConvertir)) {
        let resultat;
        if (this.id == "champs1") {
            resultat = aConvertir * taux;
            resultat = resultat.toFixed(2);
            document.querySelector('#champs2').value = resultat;
        } else {
            resultat = aConvertir / taux;
            resultat = resultat.toFixed(2);
            document.querySelector('#champs1').value = resultat;
        }
    }
}