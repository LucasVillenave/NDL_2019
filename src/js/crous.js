//faire page error en html + changement text

class MainPage {
    constructor ()
    {
        this.nom="Pelaise";
        this.prenom="Jon";
        this.age=19;
        this.revenus=0;
        this.init();
    }

    init()
    {
        let tmp;
        let aide=0;

        //Click on add Img
        tmp = $("#validerCrous");
        $("#nomCrous").val("");
        $("#prenomCrous").val("");
        $("#ageCrous").val(18);
        $("#revenusCrous").val("");
        tmp.on('click', () => {
            if($("#nomCrous").val()==this.nom && $("#prenomCrous").val()==this.prenom && $("#ageCrous").val()==this.age && $("#revenusCrous").val()==this.revenus){
                if(this.revenus==0){
                    aide+=100;
                }
                else{
                    aide+=200;
                }
                $("#resultatCrous").text("Nom correct !");
                $("#resultatCrous").addClass("green");
                $("#resultatCrous").removeClass("red");
            }
            else{
                $("#resultatCrous").text("Redirection fausse déclaration");
                $("#resultatCrous").addClass("red");
                $("#resultatCrous").removeClass("green");
            }
        });        
    }
}

var start = new MainPage;