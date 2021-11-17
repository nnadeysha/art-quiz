import Control from "../../../common/control"

export class CongratModalWindow extends Control{
    pictureCongrat: Control<HTMLElement>;
    titleCongrat: Control<HTMLElement>;
    scoreCongrat: Control<HTMLElement>;
    congratNavigation: Control<HTMLElement>;
    homeCongratBtn: Control<HTMLElement>;
    nextCongratBtn: Control<HTMLElement>;
    constructor(parentNode: HTMLElement){
        super(parentNode, "div", "modal-wrapper modal-window-short");
        this.pictureCongrat = new Control(this.node, "div", "img-congrat");
       

        this.titleCongrat = new Control(this.node, "div", "title-congrat", "Congratulations!");
        this.scoreCongrat = new Control(this.node, "div", "score-congrat", "00/00");

        this.congratNavigation = new Control(this.node, "div", "navigation-congrat")
        this.homeCongratBtn = new Control(this.congratNavigation.node, "button", "home-congrat-button", "Home")
        this.nextCongratBtn = new Control(this.congratNavigation.node, "button", "next-congrat-button", "Next")
    }
}