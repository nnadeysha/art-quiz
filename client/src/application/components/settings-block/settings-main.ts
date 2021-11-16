import Control from "../../../common/control";

export class SettingsMain extends Control{
    settigsBlock: Control<HTMLDivElement>;
    volumeBlock: Control<HTMLElement>;
    volumeSubtitle: Control<HTMLParagraphElement>;
    volumeInput:Control<HTMLElement>;
    volumeRange: Control<HTMLInputElement>;
    volumeIcons: Control<HTMLElement>;
    volumeMute: Control<HTMLElement>;
    volumeUp: Control<HTMLElement>;
    timeGameBlock: Control<HTMLElement>;
    timeGameSubtitle: Control<HTMLElement>;
    timeGameSwitch: Control<HTMLInputElement>;
    timeToAnswersBlock: Control<HTMLElement>;
    timeToAnswersSubtitle: Control<HTMLElement>;
    countRegulator: Control<HTMLElement>;
    minusBtn: Control<HTMLElement>;
    countInput: Control<HTMLElement>;
    plusBtn: Control<HTMLElement>;
    settigsAcceptBlock: Control<HTMLElement>;
    defaultBtn: Control<HTMLElement>;
    saveBtn: Control<HTMLElement>;
    settingsMain: Control<HTMLElement>;
    labelSwitch: Control<HTMLElement>;
    sliderSwitch: Control<HTMLElement>;
    onOff: Control<HTMLElement>;
    switchWrapper: Control<HTMLElement>;
    constructor(parentNode: HTMLElement){
        super(parentNode, "div", "settings-main");

        this.settigsBlock = new Control(this.node, "div", "settings-block");
        this.volumeBlock = new Control(this.settigsBlock.node, "div", "volume-block");
        this.volumeSubtitle = new Control(this.volumeBlock.node, "p", "volume-subtitle subtitle", "Volume");
        this.volumeInput = new Control(this.volumeBlock.node, "div", "volume-input");
        this.volumeRange = new Control(this.volumeInput.node, "input", "volume-range");
        this.volumeRange.node.type = "range";
        this.volumeRange.node.min = "0";
        this.volumeRange.node.max = "100";
        this.volumeRange.node.value = "20";
        this.volumeIcons = new Control(this.volumeInput.node, "div", "volume-icons");
        this.volumeMute = new Control(this.volumeIcons.node, "span", "mute");
        this.volumeUp= new Control(this.volumeIcons.node, "span", "volume-up");

        this.timeGameBlock = new Control(this.settigsBlock.node, "div", "timegame-block");
        this.timeGameSubtitle =  new Control(this.timeGameBlock.node, "p", "timegame-subtitle subtitle", "Time game");
        this.switchWrapper = new Control(this.timeGameBlock.node, "div", "switch-wrapper");
        this.onOff = new Control(this.switchWrapper.node, "span", "on-off-text", "Off")
        this.labelSwitch = new Control(this.switchWrapper.node, "label", "switch");
        
        this.timeGameSwitch = new Control(this.labelSwitch.node, "input", "timegame-switch");
        this.timeGameSwitch.node.type = "checkbox";
        this.sliderSwitch = new Control(this.labelSwitch.node, "span", "slider round");

        this.timeToAnswersBlock = new Control(this.settigsBlock.node, "div", "time-answer-block");
        this.timeToAnswersSubtitle = new Control(this.timeToAnswersBlock.node, "p", "time-answer-subtitle subtitle", "Time to answer");
        this.countRegulator = new Control(this.timeToAnswersBlock.node, "div", "count-regulator");
        this.minusBtn = new Control(this.countRegulator.node, 'button', 'minus-button', "-");
        this.countInput = new Control(this.countRegulator.node, 'div', 'count', "00");
        this.plusBtn = new Control(this.countRegulator.node, 'button', 'plus-button', "+");

        this.settigsAcceptBlock = new Control(this.node, "div", "settings-accept-block");
        this.defaultBtn = new Control(this.settigsAcceptBlock.node, 'button', 'default-settings-button', 'Default');
        this.saveBtn = new Control(this.settigsAcceptBlock.node, 'button', 'save-settings-button', 'Save');
    }
}