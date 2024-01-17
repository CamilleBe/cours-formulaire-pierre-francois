/*document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('devise-form').addEventListener('submit', function(e) {
        e.preventDefault();
        function apparait() {
            let typeConvert = document.getElementById('devise').value;

            if (typeConvert === 'euro-dollar') {
                document.getElementById("convert-form").style.display = "block";
            }
        }

        apparait();
    });



    document.getElementById('convert-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const tauxConversion = 1.13;
        const montantEuros = document.getElementById('euros').value;
        const montantDollars = montantEuros * tauxConversion;

        document.getElementById('dollars').value = montantDollars.toFixed(2);
    });
});*/

//SANS SUBMIT : correction
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('devise-form').addEventListener('submit', function(e) {
        e.preventDefault();
        function apparait() {
            let typeConvert = document.getElementById('devise').value;

            if (typeConvert === 'euro-dollar') {
                document.getElementById("convert-form").style.display = "block";
            }
        }

        apparait();
    });


    //lANCER LA CONVERTION DES QU'UNE TOUCHE EST PRESSEE
    let fields = document.querySelectorAll('input');

    fields.forEach(elt => {
        elt.addEventListener('keyup', conversion);
    })
});