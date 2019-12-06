class MainPage {
    constructor() {
        this.profile = {
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
            case "1_1":
                this.profile.Travail = "aucun";
                this.profile.ratachement_fiscal = "parents";
                break;
            case "2_1":
                this.profile.Travail = "job etudiant";
                this.profile.ratachement_fiscal = "parents";
                break;
            case "1_2":
                this.profile.Travail = "job etudiant";
                this.profile.ratachement_fiscal = "seul";
                break;
            case "2_2":
                this.profile.Travail = "aucun";
                this.profile.ratachement_fiscal = "seul";
                break;
        }
    }


    init() {
        let tmp;

        tmp = $('#resp_profile42');
        tmp.on('click', () => {
            this.profile.Travail = "job etudiant";
            $('#resp_profile42').text("job etudiant");
        });

        tmp = $('#resp_profile6');
        tmp.on('click', () => {
            this.profile.ratachement_fiscal = "seul";
            $('#resp_profile6').text("seul");
        });

        $('#resp_profile1').text(this.profile.Nom);
        $('#resp_profile2').text(this.profile.Prénom);
        $('#resp_profile3').text(this.profile.Logement);
        $('#resp_profile4').text(this.profile.Revenus);
        $('#resp_profile5').text(this.profile.Montant_compte);
        $('#resp_profile6').text(this.profile.ratachement_fiscal);
        $('#resp_profile12').text(this.profile.Age);
        $('#resp_profile42').text(this.profile.Travail);
        $('#resp_profilesss').text(this.profile.Aides);
        $('#resp_profile1').addClass("profile_class");
        $('#resp_profile2').addClass("profile_class");
        $('#resp_profile3').addClass("profile_class");
        $('#resp_profile4').addClass("profile_class");
        $('#resp_profile5').addClass("profile_class");
        $('#resp_profile6').addClass("kabla");
        $('#resp_profile12').addClass("profile_class");
        $('#resp_profile42').addClass("BLYAT");
        $('#resp_profilesss').addClass("profile_class");
    }
}

var start = new MainPage;