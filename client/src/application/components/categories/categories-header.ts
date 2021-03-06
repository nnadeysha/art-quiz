import Control from "../../../common/control";

export class CategoriesHeader extends Control {
    settingsIcon: Control<HTMLElement>;
    headerLeft: Control<HTMLElement>;
    logoDoubleColor: Control<HTMLElement>;
    headerNavigation: Control<HTMLElement>;
    homeBtn: Control<HTMLAnchorElement>;
    categoriesBtn: Control<HTMLAnchorElement>;
    scoreBtn: Control<HTMLElement>;
    public onSelect: (result: boolean) => void;
    public onSelectHome: (result: boolean) => void;
    onBack: () => void;
    constructor(parentNode:HTMLElement){
        super(parentNode, "div", "categories-header", "");
        this.headerLeft = new Control(this.node, "div", "header-left");
        this.logoDoubleColor = new Control(this.headerLeft.node, "div", 'header-logo-dcolor');
        this.headerNavigation = new Control(this.headerLeft.node, "div", "header-navigation");
        const homeBtn = new Control(this.headerNavigation.node, "a", "home", "Home");
        
        const categoriesBtn= new Control(this.headerNavigation.node, "a", "categories", "Categories")
        this.scoreBtn= new Control(this.headerNavigation.node, "a", "score", "Score")
        this.settingsIcon = new Control(this.node, "button", "settings-icon")

        
    }
    
}