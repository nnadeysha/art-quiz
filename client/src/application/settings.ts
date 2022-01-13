import Control from "../common/control";
import "../styles/settings.css";
import { Footer } from "../application/components/footer";
import { SettingsHeader } from "../application/components/settings-block/settings-header";
import { SettingsMain } from "../application/components/settings-block/settings-main";


interface IQuizSettings{
  
}
export class SettingsPage extends Control {
  settingsHeader: SettingsHeader;

  settingsMain: SettingsMain;
  footer: Footer;
  settingWrapper: Control<HTMLElement>;
  public onSelect: (result: boolean) => void;
  onBack: () => void;
  onSave: (settings: IQuizSettings) => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "settings-screen ", "");
    this.settingWrapper = new Control(this.node, "div", "setting-wrapper");
    const backButton = new Control(this.node, 'div', 'back-button', 'back');
    backButton.node.onclick = () =>{
      this.onBack();
    };
const settings: IQuizSettings = {

}
    const saveButton = new Control(this.node, 'button', 'save-settings-button', 'Save');
    saveButton.node.onclick = () =>{
      this.onSave(settings);
    }

   /*  this.settingsHeader = new SettingsHeader(this.settingWrapper.node);

    this.settingsMain = new SettingsMain(this.settingWrapper.node);

    this.footer = new Footer(this.node);

    this.settingsMain.saveBtn.node.onclick = () => {
      this.onSelect(true);
    };

    this.settingsMain.defaultBtn.node.onclick = () => {
      this.onSelect(true);
    };
    this.settingsHeader.backBtn.node.onclick = () => {
      this.onSelect(true);
    };
    this.settingsHeader.closeBtn.node.onclick = () => {
      this.onSelect(true);
    }; */
  }


  
  
}
