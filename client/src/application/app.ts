import Control from "../common/control";
import { MainScreen } from "./components/main";
import { SettingsScreen } from "./components/settings-block/settings";
import { Categories } from "./components/categories/categories";
import { QuestionsArtists } from "./components/questions/artists-questions";
import { QuestionsPictures } from "./components/questions/pictures-questions";
import { ModalWindow } from "./components/modal-windows/modal-window";

export class Application extends Control {
  wrapper: Control<HTMLElement>;
  questionsArtists: QuestionsArtists;
  questionsPictures: QuestionsPictures;
  mainScreen: MainScreen;
  categoriesBlock: Categories;
  settingsScreen: SettingsScreen;
  modalWindow: ModalWindow;
  audio: HTMLAudioElement

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "div", "");
    this.wrapper = new Control(this.node, "main", "wrapper");
    /* this.mainScreen = new MainScreen(this.wrapper.node);
    this.settingsScreen = new SettingsScreen(this.wrapper.node);
    this.categoriesBlock = new Categories(this.wrapper.node);
    this.questionsArtists = new QuestionsArtists(this.wrapper.node);
    this.questionsPictures = new QuestionsPictures(this.wrapper.node);
    this.modalWindow = new ModalWindow(this.wrapper.node); */
    this.audio = new Audio();

    this.buildMainPage();
    
  }
 

  buildMainPage() {
    console.log("m");
    const main = new MainScreen(this.wrapper.node);

    main.onSelect = () => {
      this.onPlayClick();

      setTimeout(() => {
        main.destroy();
        this.onCloseOpenSettings();
      }, 200);
    };
    main.picturesBtn.node.onclick = () => {
      this.onPlayClick();

      setTimeout(() => {
        main.destroy();
        const category = new Categories(this.wrapper.node);
        category.categoriesMain.categoriesWrapper.node.onclick = () => {
          this.onPlayClick();
          setTimeout(() => {
            category.destroy();
            const pictQwest = new QuestionsPictures(this.wrapper.node);
          }, 200);
        };
      }, 200);
    };
    main.onArtist = () => {
      this.onPlayClick();
      setTimeout(() => {
        main.destroy();
        const category = new Categories(this.wrapper.node);
        category.getArtistCategory();
        category.onChooseCategory = () => {
          this.onPlayClick();
          setTimeout(() => {
            category.destroy();
            const artQwest = new QuestionsArtists(this.wrapper.node);
          }, 200);
        };
      }, 200);
    };
  }

  onCloseOpenSettings() {
    const sett = new SettingsScreen(this.wrapper.node);

    sett.onSelect = () => {
      this.onPlayClick();
      setTimeout(() => {
        sett.destroy();
        this.buildMainPage();
      }, 200);
    };
    /* sett.settingsHeader.closeBtn.node.onclick = () => {
      this.onPlayClick();
      setTimeout(() => {
        sett.destroy();
        this.buildMainPage();
      }, 200);
    }; */
  }

  onPlayClick() {
    this.audio.src = "../assets/audio/click.mp3";
    this.audio.play();
  }

  onBuildCategories() {
    const categories = new Categories(this.wrapper.node);
  }
}
