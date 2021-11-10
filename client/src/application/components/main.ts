import Control from "../../common/control";
import "../../styles/main.css"
export class MainScreen extends Control{
    logo: Control<HTMLDivElement>;
    artistBtn: Control<HTMLButtonElement>;
    picturesBtn: Control<HTMLButtonElement>;
    mainHeader: Control<HTMLDivElement>;
    mainMain: Control<HTMLDivElement>;
    mainFooter: Control<HTMLDivElement>;
    settingsIcon: Control<HTMLButtonElement>;
    logoRSS: Control<HTMLAnchorElement>;
    developer: Control<HTMLAnchorElement>;
    yearOfCreation: Control<HTMLParagraphElement>;
    kindOfGame: Control<HTMLDivElement>;
    

    constructor(parentNode:HTMLElement){
        super(parentNode, "div", "main-screen", "")

        this.mainHeader = new Control(this.node, "div", "main-header");
        this.settingsIcon = new Control(this.mainHeader.node, "button", "settings-icon")

        this.mainMain = new Control(this.node, "div", "main-main");
        this.logo = new Control(this.mainMain.node, "div", "logo");
        this.kindOfGame = new Control(this.mainMain.node, "div", "kind-of-game-buttons")
        this.artistBtn = new Control(this.kindOfGame.node, "button", "artist-btn", "Artist quiz");
        this.picturesBtn = new Control(this.kindOfGame.node, "button", "pictures-btn", "Pictures quiz")

        this.mainFooter = new Control(this.node, "div", "main-footer");
        this.logoRSS = new Control(this.mainFooter.node, "a", "logo-footer-rss");
        this.logoRSS.node.href = "https://rs.school/js/";
        this.logoRSS.node.target = "_blank";
        this.yearOfCreation = new Control(this.mainFooter.node, "p", "year-of-creation", "© 2021")
        this.developer = new Control(this.mainFooter.node, "a", "developer-github", "nnadeysha");
        this.developer.node.href = "https://github.com/nnadeysha";
        this.developer.node.target = "_blank";
        
        
        
    }
}