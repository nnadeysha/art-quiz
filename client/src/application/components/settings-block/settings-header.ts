import Control from "../../../common/control";


export class SettingsHeader extends Control{
    settingsHeader: Control<HTMLDivElement>;
    backBtn: Control<HTMLParagraphElement>;
    closeBtn: Control<HTMLButtonElement>;
    backIcon: Control<HTMLElement>;
    backInscription: Control<HTMLElement>;
    constructor(parentNode: HTMLElement){
        super(parentNode, "div", "settings-header")
        this.backBtn = new Control(this.node, 'div', 'back-button', '');
        this.backIcon = new Control(this.backBtn.node, "span", 'back-icon');
        this.backInscription = new Control(this.backBtn.node, "span", 'back-inscription', 'Settings');
        this.closeBtn = new Control(this.node, 'button', 'close-button', '');
    }
}
