import Control from "../../../common/control";
import {QuestionsHeader} from "./questions-header";
import { Footer } from "../footer";
import "../../../styles/questions.css"
import "../../../styles/artists-questions.css";
import {SliderCircle} from "./slider-circle"
import { IGameFieldOptions, IGameResult } from "../../dto";
import { Categories} from "../../categories";
import {ModalWindow} from "../modal-windows/modal-window";
import {GameDataModel} from "../loaders/img-loader";
import  {DataHolder, ICardData, ICategoryData}  from "../../data-holder";

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
  gameModel: GameDataModel;
  public onNextQuestion: ()=> void;
  onNextClick: () => void;
    constructor(parentNode: HTMLElement, data: ICardData){
        super(parentNode, "div", "questions-block");

        this.questionsWrapper = new Control(this.node, "div", "questions-wrapper")
        this.questionsHeader = new QuestionsHeader(this.questionsWrapper.node);
        this.questionsMainWrapper = new Control(this.questionsWrapper.node, "div", "question-main-wrapper")
        this.questionsArtistMain = new Control(this.questionsMainWrapper.node, "div", "artist-main");
        this.artistQuestion = new Control(this.questionsArtistMain.node, "div", "artist-question", "WHO IS THE AUTHOR OF THIS PICTURE?");
        this.artistAnswerSlider = new Control(this.questionsArtistMain.node, "div", "answer-slider");
        this.artistPicture = new Control(this.artistAnswerSlider.node, "div", "artist-picture");
        this.artistPicture.node.style.background = `url(${data.image})` //!!!!!!!!!!!!
        this.artistPicture.node.style.backgroundPosition = "center";
        this.artistPicture.node.style.backgroundRepeat = "no-repeat";
        this.artistPicture.node.style.backgroundSize =  "cover";
        this.slider = new SliderCircle(this.artistAnswerSlider.node)
        this.artistAnswers = new Control(this.questionsArtistMain.node, "div", "artist-answers");
        this.artistAnswer = new Control(this.artistAnswers.node, "button", "artist-answer");
        this.artistAnswer.node.textContent = data.author;//!!!!!!!!!!!!
        this.artistAnswer = new Control(this.artistAnswers.node, "button", "artist-answer");
        this.artistAnswer.node.textContent = data.author;//!!!!!!!!!!!!
        this.artistAnswer = new Control(this.artistAnswers.node, "button", "artist-answer");
        this.artistAnswer.node.textContent = data.author;//!!!!!!!!!!!!
        this.artistAnswer = new Control(this.artistAnswers.node, "button", "artist-answer");
        this.artistAnswer.node.textContent = data.author;//!!!!!!!!!!!!
        
        this.footer = new Footer(this.node);
       /*  const dataHolder = new DataHolder();
        dataHolder.build().then(loadingResult =>{
          new QuestionsArtists(this.node, loadingResult.base.categories[2].cardsArr[1])
          console.log(loadingResult.base);
          let img = new Image();
          img.src = "../assets/" + loadingResult.base.categories[2].cardsArr[1].image;
          console.log(img);
          document.body.append(img);
        }
          ); */

        
        this.artistAnswers.node.onclick = () => {
          this.onNextQuestion()
          //const modal = new ModalWindow(parentNode)
        }
        this.onSelectedArtist()
        
        
    }
    onSelectedArtist(){
     console.log()
    }
    getAtristsQuestions(){
      const dataHolder = new DataHolder();
      dataHolder.build().then(loadingResult =>{
        new QuestionsArtists(this.node, loadingResult.base.categories[2].cardsArr[1])
        console.log(loadingResult.base);
        let img = new Image();
        img.src = "../assets/" + loadingResult.base.categories[2].cardsArr[1].image;
        console.log(img);
        document.body.append(img);
      }
        ); 
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
