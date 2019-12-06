//faire page error en html + changement text

class MainPage {
    constructor ()
    {
        this.passsecu = "";
        this.passcode = "1021560043902";
        this.editmode = false;
        this.init();
    }

    toggle_content(page)
    {
        switch (page) {
            case "coucou":
                $("#elemClic").fadeIn("fast");
                $("#affichage").hide();
                break;
            case "bye":
                $("#elemClic").hide();
                $("#affichage").fadeIn("fast");
                break;
        }
    }

    check_passcode()
    {
      if( this.passsecu.length == this.passcode.length){
        if( this.passsecu == this.passcode){
          $("#secret").fadeIn("fast");
        }else{
          this.passsecu = "";
        }
      }
    }

    init()
    {
        let tmp;

        this.toggle_content("coucou");
        $("#secret").hide();
        $("#imgsecu1bis").hide();
        $("#imgsecu2bis").hide();
        $("#imgsecu3bis").hide();
        $("#imgsecu4bis").hide();
        $("#imgsecu5bis").hide();

        //Click on add Img
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

    }
}

var start = new MainPage;
