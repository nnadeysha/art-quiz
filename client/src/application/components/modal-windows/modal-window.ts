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
        super(parentNode, "div", "modal-screen", "Бесплатный сервис Google позволяет мгновенно переводить слова, фразы и веб-страницы с английского более чем на 100 языков и обратно.");

        this.overlay = new Control(this.node, "div", "overlay");
        this.modalWindow = new Control(this.overlay.node, "div", "modal-window");

        //this.modalContent = new CorrectOrWrongAnswerModal(this.modalWindow.node)
        //this.modalCongrat = new CongratModalWindow(this.modalWindow.node)
        //this.modalGrand = new GrandModalWindow(this.modalWindow.node)
        this.modalGameOver= new GameOvertModalWindow(this.modalWindow.node)
    }
}