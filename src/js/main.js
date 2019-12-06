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
        this.init();
    }

    toggle_content(page) {
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
            case "":
                break;
        }
    }

    init() {
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