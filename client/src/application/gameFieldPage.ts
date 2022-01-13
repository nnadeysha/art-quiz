import Control from "../common/control";
import { ArtistQuestionView } from "./artistQuestionView";
import { IArtistQuestionData } from "./IArtistQuestionData";
interface IQuizOptions {
  gameName: string;
  categoriesIndex: number;
}

type IQuizResults = Array<boolean>;
export class GameFieldPage extends Control {
  onBack: () => void;
  onHome: () => void;
  onFinish: (result: IQuizResults) => void;
  progressIndicator: Control<HTMLElement>;
  results: IQuizResults;
  answersIndicator: Control<HTMLElement>;
  constructor(parentNode: HTMLElement, gameOptions: IQuizOptions) {
    super(parentNode);
    console.log(gameOptions);
    const header = new Control(
      this.node,
      "h1",
      "",
      `${gameOptions.gameName} - ${gameOptions.categoriesIndex}`
    );
    const backBtn = new Control(this.node, "a", "back", "back");
    backBtn.node.onclick = () => {
      this.onBack();
    };
    const homeBtn = new Control(this.node, "a", "back-home", "Home");
    homeBtn.node.onclick = () => {
      this.onHome();
    };

    this.progressIndicator = new Control(this.node, 'div', '', '');
    this.answersIndicator = new Control(this.node, 'div', '', '');

    const questions: Array<IArtistQuestionData> = [
      { answers: [1, 2, 3, 4], correctAnswerIndex:1 },
      { answers: [1, 2, 3, 4], correctAnswerIndex:0 },
      { answers: [1, 2, 3, 4], correctAnswerIndex:3 }
    ];
    this.results = [];
    this.questionCycle(questions, 0, ()=>{
      this.onFinish(this.results);
    });
   
  }

  questionCycle(
    questions: Array<IArtistQuestionData>,
    index: number,
    onFinish: () => void
  ) {
    if (index >= questions.length) {
      onFinish();
      return;
    }
    this.progressIndicator.node.textContent = `${index+1} / ${questions.length}`;
    this.answersIndicator.node.textContent = this.results.map(it=>
      it?'+':'-').join(' ');
    const question = new ArtistQuestionView(this.node, questions[index]);
    question.onAnswer = answerIndex => {
      question.destroy();
      this.results.push(answerIndex === questions[index].correctAnswerIndex)
      this.questionCycle(questions, index + 1, onFinish);
    };
  }
}
