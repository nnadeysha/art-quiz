import Control from "../common/control"

interface IQuizOptions{
  gameName: string,
  categoriesIndex: number
}

interface IQuizResults{

}
export class GameFieldPage extends Control{
  onBack: ()=> void;
  onHome: ()=> void;
  onFinish: (result: IQuizResults)=> void;
  constructor(parentNode: HTMLElement, gameOptions: IQuizOptions){
    super(parentNode);
    console.log(gameOptions);
    const header = new Control(this.node, 'h1', '', `${gameOptions.gameName} - ${gameOptions.categoriesIndex}`)
    const backBtn = new Control(
      this.node,
      "a",
      "back",
      "back"
    );
    backBtn.node.onclick = () => {
      this.onBack();
    };
    const homeBtn = new Control(
      this.node,
      "a",
      "back-home",
      "Home"
    );
    homeBtn.node.onclick = () => {
      this.onHome();
    };
    const finishBtn = new Control(
      this.node,
      "a",
      "finish",
      "Finish"
    );
    finishBtn.node.onclick = () => {
      this.onFinish({});
    };



  }
}