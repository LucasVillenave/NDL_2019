//faire page error en html + changement text

class MainPage {

    constructor ()
    {
        this.profil = {
            Nom: "Pelaise",
            Prénom: "Jon",
            Age: 19,
            Logement: "Non Définit",
            Revenus: 18000,
            Montant_compte: 0,
            ratachement_fiscal: "parents",
            Travail: "aucun",
            Aides: 0
        };
        this.passsecu = "";
        this.passcode = "1021560043902";
        this.editmode = false;
        this.done = 0;
        this.init();
    }

    check_passcode()
    {
      if( this.passsecu.length == this.passcode.length){
        if( this.passsecu == this.passcode){
            $("#secret").fadeIn("fast");
            this.done += 1;
            $("#SecuHomeLink").addClass("green");
            $("#SecuHomeLink").removeClass("red-clickable");
        }else{
          this.passsecu = "";
        }
      }
    }

    toggle_content(page) {
        switch (page) {
            case "Home":
                $("#Home").fadeIn("fast");
                $("#Caf").hide();
                $("#Secu").hide();
                $("#Bank").hide();
                $("#Crous").hide();
                $("#Profil").hide();
                break;
            case "Caf":
                $("#Home").hide();
                $("#Caf").fadeIn("fast");
                $("#Secu").hide();
                $("#Bank").hide();
                $("#Crous").hide();
                $("#Profil").hide();
                break;
            case "Secu":
                $("#Home").hide();
                $("#Caf").hide();
                $("#Secu").fadeIn("fast");
                $("#Bank").hide();
                $("#Crous").hide();
                $("#Profil").hide();
                break;
            case "Bank":
                $("#Home").hide();
                $("#Caf").hide();
                $("#Secu").hide();
                $("#Bank").fadeIn("fast");
                $("#Profil").hide();
                $("#Crous").hide();
                break;
            case "Crous":
                $("#Home").hide();
                $("#Caf").hide();
                $("#Secu").hide();
                $("#Bank").hide();
                $("#Crous").fadeIn("fast");
                $("#Profil").hide();
                break;
            case "Profil":
                $("#Home").hide();
                $("#Caf").hide();
                $("#Secu").hide();
                $("#Bank").hide();
                $("#Crous").hide();
                $("#Profil").fadeIn("fast");
                break;
        }
    }

    init() {
        let tmp;

        this.toggle_content("Home");

        $("#secret").hide();
        $("#imgsecu1bis").hide();
        $("#imgsecu2bis").hide();
        $("#imgsecu3bis").hide();
        $("#imgsecu4bis").hide();
        $("#imgsecu5bis").hide();

        tmp = $("#CafHomeLink");
        tmp.on('click', () => {
            this.toggle_content("Caf");
        });
        tmp = $("#SecuHomeLink");
        tmp.on('click', () => {
            this.toggle_content("Secu");
        });
        tmp = $("#BankHomeLink");
        tmp.on('click', () => {
            this.toggle_content("Bank");
        });
        tmp = $("#CrousHomeLink");
        tmp.on('click', () => {
            this.toggle_content("Crous");
        });
        tmp = $("#toProfilHome");
        tmp.on('click', () => {
            this.toggle_content("Profil");
        });

        //Bank
        tmp = $("#toBankHome");
        tmp.on('click', () => {
            this.toggle_content("Home");
        });

        tmp = $("#input_value1").keypress(function (e) {
            //if the letter is not digit then display error and don't type anything
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                //display error message
                $("#errmsg").html("Digits Only").show().fadeOut("fast");
                return false;
            }
        });

        tmp = $("#input_value2").keypress(function (e) {
            //if the letter is not digit then display error and don't type anything
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                //display error message
                $("#errmsg").html("Digits Only").show().fadeOut("fast");
                return false;
            }
        });

        tmp = $("#input_submit");
        tmp.on('click', () => {
            if ($("#input_value1").val() >= 400) {
                let val1 = parseInt($("#input_value2").val());
                let val2 = parseInt($("#input_value3").val());
                if (val1 + val2 <= 10000) {
                    if ($('#resp1').val() != this.profil.Revenus) {
                        $('#resp4444444444444444444').text("Error 404");
                        //Redirect 404
                    } else {
                        this.profil.Montant_compte =+ val1;
                        $("#BankHomeLink").addClass("green");
                        $("#BankHomeLink").removeClass("red-clickable");
                    }
                    $('#resp1').text("revenus suffisant");
                    $('#resp1').addClass("green");
                    $('#resp1').removeClass("red");
                    $('#resp2').text("demande raisonable");
                    $('#resp2').addClass("green");
                    $('#resp2').removeClass("red");
                    $('#resp3').text("en prenant en compte le solde actuel");
                    $('#resp3').addClass("green");
                    $('#resp3').removeClass("red");
                } else {
                    $('#resp1').text("revenus trop faibles ou");
                    $('#resp1').addClass("red");
                    $('#resp1').removeClass("green");
                    $('#resp2').text("demande trop élevée");
                    $('#resp2').addClass("red");
                    $('#resp2').removeClass("green");
                    $('#resp3').text("en prenant en compte le solde actuel");
                    $('#resp3').addClass("red");
                    $('#resp3').removeClass("green");
                }
            } else {
                $('#resp1').text("revenus trop faibles ou");
                $('#resp1').addClass("red");
                $('#resp1').removeClass("green");
                $('#resp2').text("demande trop élevée");
                $('#resp2').addClass("red");
                $('#resp2').removeClass("green");
                $('#resp3').text("en prenant en compte le solde actuel");
                $('#resp3').addClass("red");
                $('#resp3').removeClass("green");
            }
        })
        //Bank--

        //secu
        tmp = $("#secuToHome");
        tmp.on('click', () => {
            this.toggle_content("Home");
        });

        tmp = $("#btn1");
        tmp.on('click', () => {
            this.passsecu = this.passsecu + '1';
            this.check_passcode();
            console.log(this.passsecu);
        });
        tmp = $("#btn2");
        tmp.on('click', () => {
            this.passsecu = this.passsecu + '2';
            this.check_passcode();
            console.log(this.passsecu);
        });
        tmp = $("#btn3");
        tmp.on('click', () => {
            this.passsecu = this.passsecu + '3';
            this.check_passcode();
            console.log(this.passsecu);
        });
        tmp = $("#btn4");
        tmp.on('click', () => {
            this.passsecu = this.passsecu + '4';
            this.check_passcode();
            console.log(this.passsecu);
        });
        tmp = $("#btn5");
        tmp.on('click', () => {
            this.passsecu = this.passsecu + '5';
            this.check_passcode();
            console.log(this.passsecu);
        });
        tmp = $("#btn6");
        tmp.on('click', () => {
            this.passsecu = this.passsecu + '6';
            this.check_passcode();
            console.log(this.passsecu);
        });
        tmp = $("#btn7");
        tmp.on('click', () => {
            this.passsecu = this.passsecu + '7';
            this.check_passcode();
            console.log(this.passsecu);
        });
        tmp = $("#btn8");
        tmp.on('click', () => {
            this.passsecu = this.passsecu + '8';
            this.check_passcode();
            console.log(this.passsecu);
        });
        tmp = $("#btn9");
        tmp.on('click', () => {
            this.passsecu = this.passsecu + '9';
            this.check_passcode();
            console.log(this.passsecu);
        });
        tmp = $("#btn0");
        tmp.on('click', () => {
            this.passsecu = this.passsecu + '0';
            this.check_passcode();
            console.log(this.passsecu);
        });
        tmp = $("#clean");
        tmp.on('click', () => {
            this.passsecu = "";
        });
        tmp = $("#edit");
        tmp.on('click', () => {
            this.editmode = true;
            $("#edit").attr("disabled", true);
        });
        tmp = $("#imgsecu1");
        tmp.on('click', () => {
            if(this.editmode == true){
              $("#imgsecu1").hide();
              $("#imgsecu1bis").fadeIn("fast");
            }
        });
        tmp = $("#imgsecu2");
        tmp.on('click', () => {
            if(this.editmode == true){
              $("#imgsecu2").hide();
              $("#imgsecu2bis").fadeIn("fast");
            }
        });
        tmp = $("#imgsecu3");
        tmp.on('click', () => {
            if(this.editmode == true){
              $("#imgsecu3").hide();
              $("#imgsecu3bis").fadeIn("fast");
            }
        });
        tmp = $("#imgsecu4");
        tmp.on('click', () => {
            if(this.editmode == true){
              $("#imgsecu4").hide();
              $("#imgsecu4bis").fadeIn("fast");
            }
        });
        tmp = $("#imgsecu5");
        tmp.on('click', () => {
            if(this.editmode == true){
              $("#imgsecu5").hide();
              $("#imgsecu5bis").fadeIn("fast");
            }
        });
        //secu--
    }
}

var start = new MainPage;