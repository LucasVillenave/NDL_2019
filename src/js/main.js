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