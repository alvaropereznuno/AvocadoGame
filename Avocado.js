var name = '';
var correct = 0;

function Initialize(){
    this.name = GetParameterByName('name');

    if (this.name == ""){
        $("#Wellcome").text("Bienvenido/a a este juego, en el que formarás parte de algo muy importante para Verena y Álvaro. " +
        "Tendréis que participar en equipo para llegar a resolver este juego.");
        
        $("#Title1").text("El juego del Aguacate");
    } else {
        $("#Wellcome").text("¡Hola " + this.name + "! Hemos diseñado este juego para tí, en el que formarás parte de algo muy importante para Verena y Álvaro. " +
        "Tendrás que participar en equipo para llegar a resolver este juego.");

        $("#Name").text(this.name);
        $("#Title1").text("¡¡Hola " + this.name + "!!");
        $("#Title2").text("El juego del Aguacate");
    }

    $('#Panel1').show();
    $('#Panel2').hide();
    $('#Panel3').hide(); 
    $('#Panel4').hide();
    $('#Panel5').hide();
    $('#Panel6').hide();
    $('#Panel7').hide();
    $('#Panel8').hide();
    $('#Panel9').hide();
    $('#Panel10').hide();
    $('#Panel11').hide();
    $('#Panel12').hide();
    $('#Panel13').hide();
    $('#Panel14').hide();

    $('#p3next').hide();
}

function CustomNextPageInit(){
    if (this.name == '')
        NextPage('#Panel1', '#Panel2', false);
    else
        NextPage('#Panel1', '#Panel3', false);
}

function SelectName (panelFrom, panelTo, name){
    this.name = name;

    $(panelFrom).fadeOut('slow', function() { $(panelTo).fadeIn('slow') });
    $("#Title2").text("¡¡Hola " + this.name + "!!");
}

function NextPage (panelFrom, panelTo, isOk){
    if (isOk) this.correct = this.correct + 1;

    $(panelFrom).fadeOut('slow', function() { $(panelTo).fadeIn('slow') });
}

function LastPage (panelFrom, isOk){
    if (isOk) this.correct = this.correct + 1;

    $("#Oks").text(this.correct);
    $("#Kos").text(10 - this.correct);

    switch (this.name){
        case 'Regina':  $("#Letter").text('P'); break;
        case 'Isa':     $("#Letter").text('A'); break;
        case 'Paco':    $("#Letter").text('B'); break;
        case 'Marta':   $("#Letter").text('L'); break;
        case 'Rebeca':  $("#Letter").text('O'); break;
        default:        $("#Letter").text('X'); break;
    }
    
    if (this.correct < 7)
        this.NextPage(panelFrom, '#Panel13', false)
    else
        this.NextPage(panelFrom, '#Panel14', false)
}

function Restart (panelFrom, panelTo){
    this.correct = 0;
    this.name = GetParameterByName('name');

    $(panelFrom).hide();
    $(panelTo).show();
}

function GetParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}