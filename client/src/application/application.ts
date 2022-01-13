import Control from "../common/control";
import { StartPage } from "./startPage";
import { SettingsPage } from "./settings";
import { Categories } from "./categories";
import { GameFieldPage } from "./gameFieldPage";
import { GameOverPage} from "./gameOverPage"
export class Application extends Control {
  wrapper: Control<HTMLElement>;

  startPage: StartPage;
  audio: HTMLAudioElement;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "div", "");
    this.mainCycle();

    //this.wrapper = new Control(this.node, "main", "wrapper");

    const preloader = new Control(this.node, "div", "", "LOADING");

    /* this.dataHolder.loadQuestionsInfo().then((data) => {
      preloader.destroy();
      
    });   */
    //this.buildMainPage();
    /* this.mainScreen = new MainScreen(this.wrapper.node);
    this.settingsScreen = new SettingsScreen(this.wrapper.node);
    this.categoriesBlock = new Categories(this.wrapper.node);
    this.questionsArtists = new QuestionsArtists(this.wrapper.node);
    this.questionsPictures = new QuestionsPictures(this.wrapper.node);
    this.modalWindow = new ModalWindow(this.wrapper.node); */
    this.audio = new Audio();
  }
  private gameCycle(gameName: string, categoriesIndex: number){
    const gameField = new GameFieldPage(this.node, {
      gameName: gameName,
      categoriesIndex: categoriesIndex,
    });
    gameField.onHome = () => {
      gameField.destroy();
      this.mainCycle();
    };
    gameField.onBack= ()=>{
      gameField.destroy();
      this.categoriesCycle(gameName)
    }
    gameField.onFinish = (result) =>{
      gameField.destroy();
      const gameOverPage = new GameOverPage(this.node, result);
      gameOverPage.onHome = ()=>{
        gameOverPage.destroy();
        this.mainCycle()
      }
      gameOverPage.onNext = ()=>{
        gameOverPage.destroy();
        this.gameCycle(gameName, categoriesIndex+1)
      }
    }
  }
private categoriesCycle(gameName: string){
  const categories = new Categories(this.node, gameName);
      categories.onBack = () => {
        categories.destroy();
        this.mainCycle();
      };
      categories.onSelect = (index) => {
        categories.destroy();
        this.gameCycle(gameName, index)
      };
}
  private mainCycle() {
    const startPage = new StartPage(this.node); //wrapper.node
    startPage.onGameSelect = (gameName) => {
      startPage.destroy();
      this.categoriesCycle(gameName)
    };
    startPage.onSettings = () => {
      startPage.destroy();
      const settingsPage = new SettingsPage(this.node);
      settingsPage.onBack = () => {
        settingsPage.destroy();
        this.mainCycle();
      };
      settingsPage.onSave = (settings) => {
        console.log(settings);
        settingsPage.destroy();
        this.mainCycle();
      };
    };
  }
  /* buildMainPage() {
    console.log("m");
    const main = new StartPage(this.wrapper.node);

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
            console.log('f')
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
    const sett = new SettingsPage(this.wrapper.node);

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
 */
}
