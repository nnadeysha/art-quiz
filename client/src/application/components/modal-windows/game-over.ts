import Control from "../../../common/control"

export class GameOvertModalWindow extends Control{
    pictureGameOver: Control<HTMLElement>;
    titleGameOver: Control<HTMLElement>;
    subtitleGameOver: Control<HTMLElement>;
    gameOverNavigation: Control<HTMLElement>;
    noBtn: Control<HTMLElement>;
    yesBtn: Control<HTMLElement>;
    
    constructor(parentNode: HTMLElement){
        super(parentNode, "div", "modal-wrapper modal-window-short");
        this.pictureGameOver = new Control(this.node, "div", "img-congrat img-game-over");
       

        this.titleGameOver = new Control(this.node, "div", "title-game-over", "Game over");

        this.subtitleGameOver = new Control(this.node, "div", "subtitle-game-over", "Play again?");
      

        this.gameOverNavigation = new Control(this.node, "div", "navigation-game-over")
        this.noBtn = new Control(this.gameOverNavigation.node, "button", "no-button", "No")
        this.yesBtn = new Control(this.gameOverNavigation.node, "button", "yes-button", "Yes")
    }
}