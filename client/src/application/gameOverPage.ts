import Control from '../common/control'

export class GameOverPage extends Control{
    onNext: ()=>void;
    onHome: ()=>void;
    constructor(parentNode: HTMLElement, results: any){
        super(parentNode)
        const resultIndicator = new Control(this.node, 'div', '', '')
        resultIndicator.node.textContent = results.map((it:boolean)=>
          it?'+':'-').join(' ');
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