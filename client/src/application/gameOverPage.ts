import Control from '../common/control'

export class GameOverPage extends Control{
    onNext: ()=>void;
    onHome: ()=>void;
    constructor(parentNode: HTMLElement, result: any){
        super(parentNode)


        const nextBtn = new Control(
            this.node,
            "a",
            "next",
            "Next"
          );
          nextBtn.node.onclick = () => {
            this.onNext();
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
    }
}