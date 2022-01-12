/* import Control from "../common/control"

interface IArtistQuestionData{
answers: Array<any>
}

export class PicturesQuestionView extends Control{
  onAnswer: (index: number)=>void;
 
  constructor(parentNode: HTMLElement, questionData: IArtistQuestionData){
    super(parentNode);
    const question = new Control(this.node, 'div', '', 'Вопрос?');
    const answeButton =  questionData.answers.map((it,i) =>{
        const button = new Control(
            this.node,
            "a",
            "",
            i.toString()
          );
          button .node.onclick = () => {
            this.onAnswer(i);
          };
    }
        )
}}
 */