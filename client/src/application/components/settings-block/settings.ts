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
  public onSelect: (result: boolean) => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "settings-screen ", "");
    this.settingWrapper = new Control(this.node, "div", "setting-wrapper")

    this.settingsHeader = new SettingsHeader(this.settingWrapper.node);

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
    };
  }


  
  
}
