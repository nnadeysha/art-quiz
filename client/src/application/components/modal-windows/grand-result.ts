import Control from "../../../common/control"

export class GrandModalWindow extends Control{
    pictureGrand: Control<HTMLElement>;
    titleGrand: Control<HTMLElement>;
    subtitleGrand: Control<HTMLElement>;
    nextGrandtBtn: Control<HTMLButtonElement>;
    
    constructor(parentNode: HTMLElement){
        super(parentNode, "div", "modal-wrapper modal-window-short");
        this.pictureGrand = new Control(this.node, "div", "img-grand");
       

        this.titleGrand = new Control(this.node, "div", "title-grand", "Grand result");
        this.subtitleGrand = new Control(this.node, "div", "subtitle-grand", "Congratulations!");

        
        this.nextGrandtBtn  = new Control(this.node, "button", "next-question-button", "Next")
    }
}