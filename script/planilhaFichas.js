function enviar() {
    let codigoPassivo = document.getElementById("codigopassivo").value.toUpperCase().replace(" ", "-");
    let rodovia = document.getElementById("rodovia").value.toUpperCase().replace(" ", "-");
    let municipio = document.getElementById("municipio").value;
    let kminicial = document.getElementById("kminicial").value;
    let kmfinal = document.getElementById("kmfinal").value;
    let coordInicial = document.getElementById("coordInicial").value;
    let coordFinal = document.getElementById("coordFinal").value;
    let sentido = document.getElementById("sentido").value;
    let sentidons = document.getElementById("sentidons").value;
    let causageradora = document.getElementById("causageradora").value;
    let localpassivo = document.getElementById("localpassivo").value;
    let ambientalsocial = document.getElementById("ambientalsocial").value;
    let centrodeCusto = document.getElementById("centrodeCusto").value;
    let tipoDePassivo = document.getElementById("tipoDePassivo").value;
    let tipoOF = document.getElementById("tipoOF").value;
    let dinamicaAtual = document.getElementById("dinamicaAtual").value;
    let gravidadeRodovia = document.getElementById("gravidadeRodovia").value;
    let gravidadeAmbiental = document.getElementById("gravidadeAmbiental").value;
    let dimensoes = document.getElementById("dimensoes").value;
    let profundidade = document.getElementById("profundidade").value;
    let grupoPassivo = document.getElementById("grupoPassivo").value;
    let observacao = document.getElementById("obs").value;
    let diretrizesTecnicas = document.getElementById("diretrizesTecnicas").value;
    let registrofotografico = document.getElementById("registrofotografico").value;

    if (codigoPassivo == "" || rodovia == "") {
        erroPreenchimento();
    } else{
        alert(codigoPassivo + " " + rodovia + " " + municipio + " " + kminicial);   
    }
}

function erroPreenchimento() {
    alert("algum campo não foi preenchido");
}