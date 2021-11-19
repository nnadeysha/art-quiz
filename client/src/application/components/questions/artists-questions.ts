import Control from "../../../common/control";
import {QuestionsHeader} from "./questions-header";
import { Footer } from "../footer";
import "../../../styles/questions.css"
import "../../../styles/artists-questions.css";
import {SliderCircle} from "./slider-circle"

export class QuestionsArtists extends Control{
    questionsHeader: QuestionsHeader;
    footer: Footer;
    questionsWrapper: Control<HTMLElement>;
    questionsArtistMain: Control<HTMLElement>;
    artistTitle: Control<HTMLElement>;
    artistPicture: Control<HTMLElement>;
    artistQuestions: Control<HTMLElement>;
    artistQuestion: Control<HTMLElement>;
    artistAnswers: Control<HTMLElement>;
    artistAnswer: Control<HTMLButtonElement>;
    artistAnswerSlider: Control<HTMLElement>;
    artistSlider: Control<HTMLElement>;
    slideCircle: Control<HTMLElement>;
    slider: SliderCircle;
  questionsMainWrapper: Control<HTMLElement>;
    constructor(parentNode: HTMLElement){
        super(parentNode, "div", "questions-block hide");

        this.questionsWrapper = new Control(this.node, "div", "questions-wrapper")
        this.questionsHeader = new QuestionsHeader(this.questionsWrapper.node);
        this.questionsMainWrapper = new Control(this.questionsWrapper.node, "div", "question-main-wrapper")
        this.questionsArtistMain = new Control(this.questionsMainWrapper.node, "div", "artist-main");
        this.artistQuestion = new Control(this.questionsArtistMain.node, "div", "artist-question", "WHO IS THE AUTHOR OF THIS PICTURE?");
        this.artistAnswerSlider = new Control(this.questionsArtistMain.node, "div", "answer-slider");
        this.artistPicture = new Control(this.artistAnswerSlider.node, "div", "artist-picture");
        this.slider = new SliderCircle(this.artistAnswerSlider.node)
        this.artistAnswers = new Control(this.questionsArtistMain.node, "div", "artist-answers");
        this.artistAnswer = new Control(this.artistAnswers.node, "button", "artist-answer");
        this.artistAnswer = new Control(this.artistAnswers.node, "button", "artist-answer");
        this.artistAnswer = new Control(this.artistAnswers.node, "button", "artist-answer");
        this.artistAnswer = new Control(this.artistAnswers.node, "button", "artist-answer");

        
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