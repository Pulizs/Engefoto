

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
    
    
    if (codigoPassivo == "" || rodovia == "" || kminicial == "" || coordInicial == "" || sentido == "" || sentidons == "") {
        erroPreenchimento();
    } else{
        var style = "<style>";
        style += "table {width: 100%;font: 20px Calibri;}";
        style += "table, td {border: solid 1px #DDD; border-collapse: collapse;";
        style += "padding: 2px 3px;text-align: center;}";
        style += "th {}"
        style += "</style>";

        var win = window.open();

        win.document.write('<html><head>');
        win.document.write('<title>Ficha ', codigoPassivo , '</title>');
        win.document.write(style);
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write('<table>');
        win.document.write('<tr>');
        win.document.write('<th>Codigo passivo: ', codigoPassivo , '</th>');
        win.document.write('</tr>');

        win.document.write('<tr>');
        win.document.write('<td>Rodovia: ', rodovia, '</td>');
        win.document.write('<td>Município: ', municipio, '</td>');
        win.document.write('</tr>');

        win.document.write('<tr>');
        win.document.write('<th>Localização do Passivo Ambiental</th>');
        win.document.write('</tr>');

        win.document.write('<tr>');
        win.document.write('<td>Km Inicial: ', kminicial, '</td>');
        win.document.write('<td>Km Final: ', kmfinal, '</td>');
        win.document.write('</tr>');

        win.document.write('<tr>');
        win.document.write('<td>Coordenada Inicial: ', coordInicial, '</td>');
        win.document.write('<td>Sentido: ', sentido, '</td>');
        win.document.write('</tr>');
        
        win.document.write('<tr>');
        win.document.write('<td>Coordenada Final: ', coordFinal, '</td>');
        win.document.write('<td>Sentido: ', sentidons, '</td>');
        win.document.write('</tr>');

        win.document.write('<tr>');
        win.document.write('<th>Causa Gerador: ', causageradora, '</th>');
        win.document.write('<th>Local do Passivo Ambiental: ', localpassivo, '</th>');
        win.document.write('</tr>');

        win.document.write('</table>');
        win.document.write('</body></html>');

        win.print();
        win.document.close();

    }
}

function erroPreenchimento() {
    alert("algum campo não foi preenchido");
}

function testando( codigoPassivo){
    alert(enviar(codigoPassivo));
}