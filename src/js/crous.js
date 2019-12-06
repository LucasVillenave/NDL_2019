//faire page error en html + changement text

class MainPage {
    constructor ()
    {
        this.option = {
            favorite: false,
            Recent: true
        };
        this.init();
    }

    toggle_content(page)
    {
        switch (page) {
            case "step1":
                break;
            case "bye":
                $("#elemClic").hide();
                $("#affichage").fadeIn("fast");
                break;
        }
    }

    init()
    {
        let tmp;
        
        this.toggle_content("step1");

        //Click on add Img
        tmp = $("#valider");
        tmp.on('click', () => {
            console.log($("#nomCrous").val());
            console.log($("#prenomCrous").val());
        });
        tmp = $("#affichage");
        tmp.on('click', () => {
            this.toggle_content("coucou");
        });
        
    }
}

var start = new MainPage;