import Control from "../common/control";
import { MainScreen } from "./components/main";
import { SettingsScreen } from "./components/settings-block/settings";
import { Categories } from "./components/categories/categories";
import { QuestionsArtists } from "./components/questions/artists-questions";
import { QuestionsPictures } from "./components/questions/pictures-questions";
import { ModalWindow } from "./components/modal-windows/modal-window";
import Signal from "../common/signal";
import  {DataHolder, ICardData, ICategoryData}  from "./data-holder";
export class Application extends Control {
  wrapper: Control<HTMLElement>;
  questionsArtists: QuestionsArtists;
  questionsPictures: QuestionsPictures;
  mainScreen: MainScreen;
  categoriesBlock: Categories;
  settingsScreen: SettingsScreen;
  modalWindow: ModalWindow;
  audio: HTMLAudioElement;
  
  onNextClick: () => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "div", "");
    this.wrapper = new Control(this.node, "main", "wrapper");
    
    const preloader = new Control(this.node, "div", "", "LOADING");

    console.log(`Уважаемые проверяющие, к сожалению я не успела выполнить работу, если у вас есть такая возможность, проверьте её пожалуйста в четверг вечером. Буду очень признательна))`)
    /* this.dataHolder.loadQuestionsInfo().then((data) => {
      preloader.destroy();
      
    });   */
    this.buildMainPage();
    /* this.mainScreen = new MainScreen(this.wrapper.node);
    this.settingsScreen = new SettingsScreen(this.wrapper.node);
    this.categoriesBlock = new Categories(this.wrapper.node);
    this.questionsArtists = new QuestionsArtists(this.wrapper.node);
    this.questionsPictures = new QuestionsPictures(this.wrapper.node);
    this.modalWindow = new ModalWindow(this.wrapper.node); */
    this.audio = new Audio();
    
  }

  buildMainPage() {
    console.log("m");
    const main = new MainScreen(this.wrapper.node);

    main.onSelect = () => {
      this.onPlayClick();

      setTimeout(() => {
        main.destroy();
        this.onCloseOpenSettings();
      }, 200);
    };
    main.onPictures = () => {
      this.onPlayClick();

      setTimeout(() => {
        main.destroy();
        const category = new Categories(
          this.wrapper.node
        );
        category.onChooseCategory = () => {
          this.onPlayClick();
          setTimeout(() => {
            category.destroy();
            const pictQwest = new QuestionsPictures(this.wrapper.node);
          }, 200);
        };
        category.categoriesHeader.onSelect = ()=> {
          this.onPlayClick();
          setTimeout(() => {
            category.destroy();
            this.onCloseOpenSettings();
          }, 200);
        };
        category.categoriesHeader.onSelectHome = () => {
          this.onPlayClick();
          category.destroy();
          this.buildMainPage();
        }
      }, 200);
    };
    main.onArtist = () => {
      this.onPlayClick();
      setTimeout(() => {
        main.destroy();
        const category = new Categories(
          this.wrapper.node); 

        category.onChooseCategory = () => {
          this.onPlayClick();
          setTimeout(() => {
            category.destroy();
            const dataHolder = new DataHolder();
            dataHolder.build().then(loadingResult =>{
              const showQuestion = (categoryIndex: number,questionIndex: number, onFinish:()=>void)=>{
                const currentImageView = new QuestionsArtists(this.wrapper.node, loadingResult.base.categories[categoryIndex].cardsArr[questionIndex]);
               
                currentImageView.onNextQuestion = () => {
                  if(questionIndex < loadingResult.base.categories[0].cardsArr.length -1){
                    currentImageView.destroy();
                    showQuestion(categoryIndex, questionIndex + 1, onFinish);

                  }
                  }
                 
              }
              
               
              
              
            }
              );
          }, 200);
        };
        category.categoriesHeader.onSelect = ()=> {
          this.onPlayClick();
          setTimeout(() => {
            category.destroy();
            this.onCloseOpenSettings();
          }, 200);
        };
        category.categoriesHeader.onSelectHome = () => {
          this.onPlayClick();
          category.destroy();
          this.buildMainPage();
        }
      }, 200);
    };
  }

  onCloseOpenSettings() {
    const sett = new SettingsScreen(this.wrapper.node);

    sett.onSelect = () => {
      this.onPlayClick();
      setTimeout(() => {
        sett.destroy();
        this.buildMainPage();
      }, 200);
    };
    
  }

  onPlayClick() {
    this.audio.src = "./assets/audio/click.mp3";
    this.audio.play();
  }

}
