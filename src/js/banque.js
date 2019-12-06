class MainPage {
    constructor() {
        this.option = {
            favorite: false,
            Recent: true
        };
        this.init();
    }

    toggle_content(page) {
        switch (page) {
            case "click":
                if ($("#input_value1").val() * 10 < $("#input_value2").val()) {
                    $('#resp1').text("revenus trop faibles");
                    $('#resp1').addClass("red");
                    $('#resp1').removeClass("green");
                    $('#resp2').text("demande trop élevée");
                    $('#resp2').addClass("red");
                    $('#resp2').removeClass("green");
                } else {
                    $('#resp1').text("revenus suffisant");
                    $('#resp1').addClass("green");
                    $('#resp1').removeClass("red");
                    $('#resp2').text("demande raisonable");
                    $('#resp2').addClass("green");
                    $('#resp2').removeClass("red");

                }
                break;
        }
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
            this.toggle_content("click");
        });


    }
}

var start = new MainPage;
