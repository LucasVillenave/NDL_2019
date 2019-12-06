class MainPage {
    constructor() {
        this.caractéristiques = {
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

    init() {
        $('#resp_profile1').text(this.caractéristiques.Nom);
        $('#resp_profile2').text(this.caractéristiques.Prénom);
        $('#resp_profile3').text(this.caractéristiques.Logement);
        $('#resp_profile4').text(this.caractéristiques.Revenus);
        $('#resp_profile5').text(this.caractéristiques.Montant_compte);
        $('#resp_profile6').text(this.caractéristiques.ratachement_fiscal);
        $('#resp_profile12').text(this.caractéristiques.Age);
        $('#resp_profile42').text(this.caractéristiques.Travail);
        $('#resp_profilesss').text(this.caractéristiques.Aides);
        $('#resp_profile1').addClass("profile_class");
        $('#resp_profile2').addClass("profile_class");
        $('#resp_profile3').addClass("profile_class");
        $('#resp_profile4').addClass("profile_class");
        $('#resp_profile5').addClass("profile_class");
        $('#resp_profile6').addClass("profile_class");
        $('#resp_profile12').addClass("profile_class");
        $('#resp_profile42').addClass("profile_class");
        $('#resp_profilesss').addClass("profile_class");
    }
}

var start = new MainPage;