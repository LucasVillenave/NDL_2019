//faire page error en html + changement text

class MainPage {
    constructor ()
    {
        this.nom="Pelaise";
        this.prenom="Jon";
        this.init();
    }

    init()
    {
        let tmp;

        //Click on add Img
        tmp = $("#validerCrous");
        $("#nomCrous").val("");
        $("#prenomCrous").val("");
        tmp.on('click', () => {
            if($("#nomCrous").val()==this.nom && $("#prenomCrous").val()==this.prenom){
                $("#resultatCrous").text("Nom correct !");
                $("#resultatCrous").addClass("green");
                $("#resultatCrous").removeClass("red");
            }
            else{
                $("#resultatCrous").text("Nom et/ou Prenom incorrect !");
                $("#resultatCrous").addClass("red");
                $("#resultatCrous").removeClass("green");
            }
        });        
    }
}

var start = new MainPage;