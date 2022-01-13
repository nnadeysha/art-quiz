import Control from "../common/control";
import "../styles/startPage.css";
import { Footer } from "./components/footer";
export class StartPage extends Control {
  
  logo: Control<HTMLDivElement>;
  artistBtn: Control<HTMLButtonElement>;
  picturesBtn: Control<HTMLButtonElement>;
  mainHeader: Control<HTMLDivElement>;
  mainMain: Control<HTMLDivElement>;
  mainFooter: Control<HTMLDivElement>;
  //settingsIcon: Control<HTMLButtonElement>;
  logoRSS: Control<HTMLAnchorElement>;
  developer: Control<HTMLAnchorElement>;
  yearOfCreation: Control<HTMLParagraphElement>;
  kindOfGame: Control<HTMLDivElement>;
  footer: Footer;
  public onSelect: (result: boolean) => void;
  public onArtist: (result: boolean) => void;
  public onPictures: (result: boolean) => void;
  onSettings: () => void;
  onGameSelect: (gameName: string) => void;
  //public answersInfo: IAnswersInfo[];
  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "main-screen", "");

    this.mainHeader = new Control(this.node, "div", "main-header");
    const settingsIcon = new Control(
      this.mainHeader.node,
      "button",
      "settings-icon"
    );
    settingsIcon.node.onclick = () => this.onSettings();

    this.mainMain = new Control(this.node, "div", "main-main");
    this.logo = new Control(this.mainMain.node, "div", "logo");
    this.kindOfGame = new Control(
      this.mainMain.node,
      "div",
      "kind-of-game-buttons"
    );
    const artistBtn = new Control(
      this.kindOfGame.node,
      "button",
      "artist-btn",
      "Artist quiz"
    );
    artistBtn.node.onclick = () => this.onGameSelect('artist');


    const picturesBtn = new Control(
      this.kindOfGame.node,
      "button",
      "pictures-btn",
      "Pictures quiz"
    );
    picturesBtn.node.onclick = () => this.onGameSelect('pictures');

    this.footer = new Footer(this.node);

    /* this.settingsIcon.node.onclick = () => {
      this.onSelect(true);
    }; */
    /* this.artistBtn.node.onclick = () => {
      this.onArtist(true); */
      /* const categories = new Categories(parentNode, this.answersInfo);
      console.log(categories) */


    /* };
    this.picturesBtn.node.onclick = () => {
      this.onPictures(true);
    }; */
  }


 
  
}
