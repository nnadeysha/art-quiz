import Control from "../../../common/control"

export class CorrectOrWrongAnswerModal extends Control{
    pictureAnswer: Control<HTMLElement>;
    answerIcon: Control<HTMLElement>;
    answerBlock: Control<HTMLElement>;
    answerTitle: Control<HTMLElement>;
    answerSubtitle: Control<HTMLElement>;
    nextQuestionBtn: Control<HTMLButtonElement>;
    constructor(parentNode: HTMLElement){
        super(parentNode, "div", "modal-wrapper");

        this.pictureAnswer = new Control(this.node, "div", "img-answer");
        this.answerIcon = new Control(this.pictureAnswer.node, "div", "answer-icon wrong");

        this.answerBlock = new Control(this.node, "div", "answer-block");
        this.answerTitle = new Control(this.answerBlock.node, "div", "answer-title", "Girl with a Pearl Earring");
        this.answerSubtitle = new Control(this.answerBlock.node, "div", "answer-subtitle", "Johannes Vermeer, 1665");
        this.nextQuestionBtn = new Control(this.node, "button", "next-question-button", "Next")

    }
}