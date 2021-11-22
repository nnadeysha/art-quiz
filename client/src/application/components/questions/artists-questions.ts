import Control from "../../../common/control";
import {QuestionsHeader} from "./questions-header";
import { Footer } from "../footer";
import "../../../styles/questions.css"
import "../../../styles/artists-questions.css";
import {SliderCircle} from "./slider-circle"
import { IGameFieldOptions, IGameResult } from "../../dto";
import imagesJSON from "../../../assets/images.json"
import { IQuestionInfo } from "../../data-holder";


export interface IAnswersInfo{
  
/* question: string;
image: string;
answers: string;
correct_answer: string; */
author: string;
    name: string;
    year: string;
    imageNum: string;


}
//import image from '../assets/img/0.webp';


export class DataHolder {
  public answersInfo: IAnswersInfo[];
  

  constructor() {
    console.log(imagesJSON)
  }

  loadQuestionsInfo(): Promise<IAnswersInfo[]> {
    
    return fetch(imagesJSON)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.answersInfo = data;
        console.log(this.answersInfo)
        return data;
      });
  }

  getQuestionsTicketInfo(imageNum: number) {
    
    const ticketQuestions = this.answersInfo.filter((answer) => {
      return (
        Number.parseInt(answer.imageNum.split(' ')[1]) === imageNum
      );
    });

    return ticketQuestions;
  } 
}


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
public onChooseCategory: (options: IGameFieldOptions) => void;
    onFinish: (result: IGameResult) => void;
  questionsMainWrapper: Control<HTMLElement>;
    constructor(parentNode: HTMLElement, answers: IAnswersInfo[]){
        super(parentNode, "div", "questions-block");

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
        //this.artistAnswer.node.textContent = answers.values.toString
        
        this.footer = new Footer(this.node);

        this.onChooseCategory = () =>{
          const categories = answers.filter((answers) =>{
            answers.imageNum.slice(1, 10)
            console.log(answers)
          })
        }
        
    }
    onSelectedArtist(){
      
    }
    getAtristsQuestions(){

   }

   /* async getData(){
    const dataURL = "../assets/images.json";
    let response = await fetch(dataURL);
    console.log(response)

    if(response.ok){
      let jsonData = response.json();
      console.log(jsonData)
      return jsonData;
    }
    else{
      return new Error
    }
    
  }
 
  getArtistPicture(data: any ){
    let name = data[0].author;
    console.log(name)
  }
 */
}