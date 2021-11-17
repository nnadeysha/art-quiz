import Control from "../common/control";
import { MainScreen } from "./components/main";
import {SettingsScreen} from "./components/settings-block/settings"
import {Categories} from "./components/categories/categories"
import {QuestionsArtists} from "./components/questions/artists-questions";
import {QuestionsPictures} from "./components/questions/pictures-questions";
import {ModalWindow} from "./components/modal-windows/modal-window"
export class Application extends Control {
  
  wrapper: Control<HTMLElement>;
  questionsArtists: QuestionsArtists;
  questionsPictures: any;
  mainScreen: MainScreen;
  categoriesBlock: Categories;
  settingsScreen: SettingsScreen;
  modalWindow: ModalWindow;
  
  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "div", "");
    this.wrapper = new Control(this.node, "main", "wrapper");
    //this.mainScreen = new MainScreen(this.wrapper.node);
    //this.settingsScreen = new SettingsScreen(this.wrapper.node);
    //this.categoriesBlock = new Categories(this.wrapper.node);
    //this.questionsArtists = new QuestionsArtists(this.wrapper.node)
    //this.questionsPictures = new QuestionsPictures(this.wrapper.node)
   this.modalWindow = new ModalWindow(this.wrapper.node)
  }
}
