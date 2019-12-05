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
            case "coucou":
                $("#rip").hide();
                $("#nicu").hide();
                break;
            case "click":
                if ($("#input_value").val() < 1500) {
                    $('#resp').text("eligible");
                    $('#resp').addClass("green");
                } else {
                    $('#resp').text("non eligible");
                    $('#resp').addClass("red");

                }
                break;
        }
    }

    init() {
        let tmp;
        this.toggle_content("coucou");
        tmp = $("#input_value").keypress(function (e) {
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
