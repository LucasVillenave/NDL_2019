class MainPage {
    constructor() {
        this.profil = {
            Revenus: 0
        }
        this.init();
    }

    init() {
        let tmp;
        //this.toggle_content("coucou");
        tmp = $("#input_value").keypress(function (e) {
            //if the letter is not digit then display error and don't type anything
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                //display error message
                $("#errmsg").html("Digits Only").show().fadeOut("fast");
                return false;
            }
        });
        //Click on add Img
        tmp = $("#input_submittt");
        tmp.on('click', () => {
            $('#raspoutine').text("");
            if ($("#bonjour").val() == this.profil.Revenus) {
                if ($("#au_revoir").val() == "Logement CROUS") {
                    $('#resp').text("eligible");
                    $('#resp').removeClass("red");
                    $('#resp').addClass("green");
                } else {
                    $('#resp').text("non eligible");
                    $('#resp').removeClass("green");
                    $('#resp').addClass("red");
                    $('#raspoutine').text("redirect 404");
                }
            } else {
                $('#resp').text("non eligible");
                $('#resp').removeClass("green");
                $('#resp').addClass("red");
                $('#raspoutine').text("redirect 404");
            }
        });


    }
}

var start = new MainPage;
