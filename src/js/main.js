//faire page error en html + changement text

class MainPage {

    constructor ()
    {
        this.profil = {
            nom: "Nom",
            prenom: "Prenom",
            logement: "Sans",
            revenu: -1000,
            montantActuelCompte: 400,
            ratachementFiscal: "",
        };
        this.init();
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
    }
}

var start = new MainPage;