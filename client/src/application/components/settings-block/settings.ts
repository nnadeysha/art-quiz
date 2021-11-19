import Control from "../../../common/control";
import "../../../styles/settings.css";
import { Footer } from "../footer";
import { SettingsHeader } from "./settings-header";
import { SettingsMain } from "./settings-main";

export class SettingsScreen extends Control {
  settingsHeader: SettingsHeader;

  settingsMain: SettingsMain;
  footer: Footer;
  settingWrapper: Control<HTMLElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "settings-screen hide", "");
    this.settingWrapper = new Control(this.node, "div", "setting-wrapper")

    this.settingsHeader = new SettingsHeader(this.settingWrapper.node);

    this.settingsMain = new SettingsMain(this.settingWrapper.node);

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
