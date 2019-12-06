class MainPage {
    constructor() {

        this.init();
    }


    init() {
        let tmp;

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
        //Click on add Img
        tmp = $("#input_submit");
        tmp.on('click', () => {
            if ($("#input_value1").val() >= 400) {
                let val1 = parseInt($("#input_value2").val());
                let val2 = parseInt($("#input_value3").val());
                console.log(val1 + val2);
                if (val1 + val2 <= 10000) {
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
            if ($('#resp1').val() != this.profile.revenus) {
                $('#resp4444444444444444444).val()').text("redirect 404");
            }
        })
    }
}

var start = new MainPage;
