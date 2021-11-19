import Control from "../../common/control";
import "../../styles/main.css";
import { Footer } from "../components/footer";
import { SettingsScreen } from "../components/settings-block/settings";
export class MainScreen extends Control {
  init() {
    throw new Error("Method not implemented.");
  }
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
  footer: Footer;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "main-screen show", "");

    this.mainHeader = new Control(this.node, "div", "main-header");
    this.settingsIcon = new Control(
      this.mainHeader.node,
      "button",
      "settings-icon"
    );

    this.mainMain = new Control(this.node, "div", "main-main");
    this.logo = new Control(this.mainMain.node, "div", "logo");
    this.kindOfGame = new Control(
      this.mainMain.node,
      "div",
      "kind-of-game-buttons"
    );
    this.artistBtn = new Control(
      this.kindOfGame.node,
      "button",
      "artist-btn",
      "Artist quiz"
    );
    this.picturesBtn = new Control(
      this.kindOfGame.node,
      "button",
      "pictures-btn",
      "Pictures quiz"
    );

    this.footer = new Footer(this.node);
  }

  show(){
    
    this.node.classList.remove("hide");
    
    this.node.classList.add("show");
  }
  hide() {
    this.node.classList.remove("show");
    
      this.node.classList.add("hide");
     
     
     
    
  }
}
