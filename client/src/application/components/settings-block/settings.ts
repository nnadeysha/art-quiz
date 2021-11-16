import Control from "../../../common/control";
import "../../../styles/settings.css";
import { Footer } from "../footer";
import { SettingsHeader } from "./settings-header";
import { SettingsMain } from "./settings-main";

export class SettingsScreen extends Control {
  settingsHeader: SettingsHeader;

  settingsMain: SettingsMain;
  footer: Footer;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "settings-screen", "");

    this.settingsHeader = new SettingsHeader(this.node);

    this.settingsMain = new SettingsMain(this.node);

    this.footer = new Footer(this.node);
  }
}
