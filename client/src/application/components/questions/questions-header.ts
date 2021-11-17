
import Control from "../../../common/control";
import "../../../styles/questions.css";


export class QuestionsHeader extends Control{
    questionHeader: Control<HTMLElement>;
    closeQuestionBtn: Control<HTMLElement>;
    progressQuestions: Control<HTMLInputElement>;
    timeRound: Control<HTMLElement>;
    constructor(parentNode: HTMLElement){
        super(parentNode, "div", "questions-header-wrapper");

        this.questionHeader = new Control(this.node, "div", "questions-header");
        this.closeQuestionBtn = new Control(this.questionHeader.node, "button", "close-auestion-button close-button");

        this.progressQuestions = new Control(this.questionHeader.node, "input", "progress-questions");
        this.progressQuestions.node.type = "range";
        this.progressQuestions.node.max = "10";
        this.progressQuestions.node.min = "0";
        this.progressQuestions.node.step = "1";
        this.progressQuestions.node.value = "1";

        this.timeRound = new Control(this.questionHeader.node, "div", "time-round", "0:00")
    }
}