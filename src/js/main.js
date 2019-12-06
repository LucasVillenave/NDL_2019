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

    toggle_content(page)
    {
        switch (page) {
            case "Home":
                $("#elemClic").fadeIn("fast");
                $("#affichage").hide();
                break;
            case "CAF":
                $("#elemClic").hide();
                $("#affichage").fadeIn("fast");
                break;
            case "Secu":
                break;
            case ""
        }
    }

    init()
    {
        let tmp;

        this.toggle_content("coucou");

        //Click on add Img
        tmp = $("#elemClic");
        tmp.on('click', () => {
            this.toggle_content("bye");
        });
        tmp = $("#affichage");
        tmp.on('click', () => {
            this.toggle_content("coucou");
        });
        
    }
}

var start = new MainPage;