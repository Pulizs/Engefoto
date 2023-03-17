function enviar() {
    let codigoPassivo = document.getElementById("codigopassivo");
    let rodovia = document.getElementById("rodovia");
    let municipio = document.getElementById("municipio")

    codigoPassivo = codigoPassivo.value.toUpperCase().replace(" ", "-");
    rodovia = rodovia.value.toUpperCase().replace(" ", "-");
    municipio = municipio.value;

    if (codigoPassivo == "" || rodovia == "") {
        erroPreenchimento();
    } else{
        alert(codigoPassivo + " " + rodovia + " " + municipio);   
    }
}

function erroPreenchimento() {
    alert("algum campo não foi preenchido");
}