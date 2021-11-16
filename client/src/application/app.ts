import Control from "../common/control";
//import { MainScreen } from "./components/main";
//import {SettingsScreen} from "./components/settings-block/settings"
import {Categories} from "./components/categories/categories"

export class Application extends Control {
  
  wrapper: Control<HTMLElement>;
  //mainScreen: MainScreen;
  categoriesBlock: Categories;
    //settingsScreen: SettingsScreen;
  
  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "div", "");
    this.wrapper = new Control(this.node, "main", "wrapper");
    //this.mainScreen = new MainScreen(this.wrapper.node);
    //this.settingsScreen = new SettingsScreen(this.wrapper.node);
    this.categoriesBlock = new Categories(this.wrapper.node);
   
  }
}
