import Control from "../../../common/control";
import "../../../styles/modal-windows.css";
import {CorrectOrWrongAnswerModal} from "./correct-wrong";
import {CongratModalWindow} from "./congratulations";
import {GrandModalWindow} from "./grand-result";
import {GameOvertModalWindow} from "./game-over"

export class ModalWindow extends Control {
    overlay: Control<HTMLElement>;
    modalWindow: Control<HTMLElement>;
    modalContent: CorrectOrWrongAnswerModal;
    modalCongrat: CongratModalWindow;
    modalGrand: GrandModalWindow;
    modalGameOver: GameOvertModalWindow;
    constructor(parentNode: HTMLElement){
        super(parentNode, "div", "modal-screen");

        this.overlay = new Control(this.node, "div", "overlay");
        this.modalWindow = new Control(this.overlay.node, "div", "modal-window");
        this.modalContent = new CorrectOrWrongAnswerModal(this.modalWindow.node)
        this.modalCongrat = new CongratModalWindow(this.modalWindow.node)
        this.modalGrand = new GrandModalWindow(this.modalWindow.node)
        this.modalGameOver= new GameOvertModalWindow(this.modalWindow.node)
    }

   /*  getModalForAnswer(){
      if(correct){
        const correct = new CorrectOrWrongAnswerModal(this.modalWindow.node);
        correct.node.classList.remove('wrong');
        correct.node.classList.add('correct');
      }
      if(incorrect){
        const wrong = new CorrectOrWrongAnswerModal(this.modalWindow.node);
        wrong.node.classList.add('correct');
        wrong.node.classList.add('wrong');
      }
    } */

   /*  getModalForWinOrGameOver(){
      if(correctAnswer >= 8 &&correctAnswer < 10){
        const congrat = new CongratModalWindow(this.modalWindow.node)
        congrat.scoreCongrat = `${correctAnswer}/10`
      }
      if(correctAnswer < 8){
        const gameover = new GameOvertModalWindow(this.modalWindow.node);
      }
      if(correctAnswer == 10){
        const grandgame = new GrandModalWindow(this.modalWindow.node)
      }
    } */
}