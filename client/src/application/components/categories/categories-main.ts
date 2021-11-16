import Control from "../../../common/control";


export class CategoriesMain extends Control {
    surrealism: Control<HTMLElement>;
    settingsIcon: Control<HTMLElement>;
    headerLeft: Control<HTMLElement>;
    logoDoubleColor: Control<HTMLElement>;
    headerNavigation: Control<HTMLElement>;
    homeBtn: Control<HTMLAnchorElement>;
    categoriesBtn: Control<HTMLAnchorElement>;
    scoreBtn: Control<HTMLElement>;
    categoriesWrapper: Control<HTMLElement>;
    portrait: Control<HTMLElement>;
    heading: Control<HTMLElement>;
    
    title: Control<HTMLElement>;
    score: Control<HTMLElement>;
    image: Control<HTMLElement>;
    landscape: Control<HTMLElement>;
    stillLife: Control<HTMLElement>;
    impressionism: Control<HTMLElement>;
    expressionism: Control<HTMLElement>;
    avantGarde: Control<HTMLElement>;
    renaissance: Control<HTMLElement>;
    kitsch: Control<HTMLElement>;
    minimalism: Control<HTMLElement>;
    interior: Control<HTMLElement>;
    nude: Control<HTMLElement>;
    
    constructor(parentNode:HTMLElement){
        super(parentNode, "div", "categories-main", "");

        this.categoriesWrapper = new Control(this.node, "div", "categories-wrapper");

        this.portrait = new Control(this.categoriesWrapper.node, "div", "portrait card");
        this.heading = new Control(this.portrait.node, "div", "heading");
        this.title = new Control(this.heading.node, "div", "title", "Portrait");
        this.score = new Control(this.heading.node, "div", "score", "");
        this.image = new Control(this.portrait.node, "div", "image-categories");

        this.landscape  = new Control(this.categoriesWrapper.node, "div", "landscape card");
        this.heading = new Control(this.landscape.node, "div", "heading");
        this.title = new Control(this.heading.node, "div", "title", "Landscape");
        this.score = new Control(this.heading.node, "div", "score", "");
        this.image = new Control(this.landscape.node, "div", "image-categories");

        this.stillLife  = new Control(this.categoriesWrapper.node, "div", "still-life card");
        this.heading = new Control(this.stillLife.node, "div", "heading");
        this.title = new Control(this.heading.node, "div", "title", "Still life");
        this.score = new Control(this.heading.node, "div", "score", "");
        this.image = new Control(this.stillLife.node, "div", "image-categories")

        this.impressionism   = new Control(this.categoriesWrapper.node, "div", "impressionism card");
        this.heading = new Control(this.impressionism.node, "div", "heading");
        this.title = new Control(this.heading.node, "div", "title", "Impressionism");
        this.score = new Control(this.heading.node, "div", "score", "");
        this.image = new Control(this.impressionism.node, "div", "image-categories")

        this.expressionism  = new Control(this.categoriesWrapper.node, "div", "expressionism card");
        this.heading = new Control(this.expressionism.node, "div", "heading");
        this.title = new Control(this.heading.node, "div", "title", "Expressionism");
        this.score = new Control(this.heading.node, "div", "score", "");
        this.image = new Control(this.expressionism.node, "div", "image-categories")

        this.avantGarde = new Control(this.categoriesWrapper.node, "div", "avant-garde card");
        this.heading = new Control(this.avantGarde.node, "div", "heading");
        this.title = new Control(this.heading.node, "div", "title", "Avant-garde");
        this.score = new Control(this.heading.node, "div", "score", "");
        this.image = new Control(this.avantGarde.node, "div", "image-categories")

        this.renaissance = new Control(this.categoriesWrapper.node, "div", "renaissance card");
        this.heading = new Control(this.renaissance.node, "div", "heading");
        this.title = new Control(this.heading.node, "div", "title", "Renaissance");
        this.score = new Control(this.heading.node, "div", "score", "");
        this.image = new Control(this.renaissance.node, "div", "image-categories")

        this.surrealism = new Control(this.categoriesWrapper.node, "div", "surrealism card");
        this.heading = new Control(this.surrealism.node, "div", "heading");
        this.title = new Control(this.heading.node, "div", "title", "Surrealism");
        this.score = new Control(this.heading.node, "div", "score", "");
        this.image = new Control(this.surrealism.node, "div", "image-categories")

        this.kitsch = new Control(this.categoriesWrapper.node, "div", "kitsch card");
        this.heading = new Control(this.kitsch.node, "div", "heading");
        this.title = new Control(this.heading.node, "div", "title", "Kitsch");
        this.score = new Control(this.heading.node, "div", "score", "");
        this.image = new Control(this.kitsch.node, "div", "image-categories")

        this.minimalism = new Control(this.categoriesWrapper.node, "div", "minimalism card");
        this.heading = new Control(this.minimalism.node, "div", "heading");
        this.title = new Control(this.heading.node, "div", "title", "Minimalism");
        this.score = new Control(this.heading.node, "div", "score", "");
        this.image = new Control(this.minimalism.node, "div", "image-categories")

        this.interior  = new Control(this.categoriesWrapper.node, "div", "interior card");
        this.heading = new Control(this.interior.node, "div", "heading");
        this.title = new Control(this.heading.node, "div", "title", "Interior");
        this.score = new Control(this.heading.node, "div", "score", "");
        this.image = new Control(this.interior.node, "div", "image-categories")

        this.nude = new Control(this.categoriesWrapper.node, "div", "nude card");
        this.heading = new Control(this.nude.node, "div", "heading");
        this.title = new Control(this.heading.node, "div", "title", "Nude");
        this.score = new Control(this.heading.node, "div", "score", "");
        this.image = new Control(this.nude.node, "div", "image-categories")

    }
    }