import Control from "../../../common/control";
import {QuestionsHeader} from "./questions-header";
import { Footer } from "../footer";
import "../../../styles/questions.css";
import "../../../styles/pictures-questions.css";
import {SliderCircle} from "./slider-circle"
export class QuestionsPictures extends Control{
    questionsHeader: QuestionsHeader;
    footer: Footer;
    questionsWrapper: Control<HTMLElement>;
    questionsPicturesMain: Control<HTMLElement>;
    pisturesQuestion: Control<HTMLElement>;
    picturesAnswerSlider: Control<HTMLElement>;
    slider: SliderCircle;
    picture: Control<HTMLElement>;
    pictures: Control<HTMLElement>;
  questionsMainWrapper: Control<HTMLElement>;
    constructor(parentNode: HTMLElement){
        super(parentNode, "div", "questions-block");
        this.questionsWrapper = new Control(this.node, "div", "questions-wrapper")
        this.questionsHeader = new QuestionsHeader(this.questionsWrapper.node);
        this.questionsMainWrapper = new Control(this.questionsWrapper.node, "div", "question-main-wrapper")
        this.questionsPicturesMain = new Control(this.questionsMainWrapper.node, "div", "pictures-main");
        this.pisturesQuestion = new Control(this.questionsPicturesMain.node, "div", "pictures-question", "Тут будет ворос");
        this.picturesAnswerSlider = new Control(this.questionsPicturesMain.node, "div", "answer-slider");
        this.pictures = new Control(this.picturesAnswerSlider.node, "div", "pictures")
        this.picture = new Control(this.pictures.node, "div", "picture");
        this.picture = new Control(this.pictures.node, "div", "picture");
        this.picture = new Control(this.pictures.node, "div", "picture");
        this.picture = new Control(this.pictures.node, "div", "picture");
        this.slider = new SliderCircle(this.picturesAnswerSlider.node);
        
        this.footer = new Footer(this.node);
    }

    hide() {
        this.node.classList.remove("show");
        this.node.classList.add("hide");
      }
    
      show(){
        this.node.classList.remove("hide");
        this.node.classList.add("show");
      }
}