import imagesJSON from "../assets/images.json";

console.log(imagesJSON)
//import image from '../assets/img/0.webp';

export interface IAnswer {
  answer_text: string;
  is_correct: boolean;
}


export interface IQuestionInfo {
  /* title: string;
  ticket_number: string; */
  imageNum: string;
  question: string;
  image: string;
  answers: Array<IAnswer>;
  correct_answer: string;
  /* answer_tip: string;
  topic: string; */
}

export class DataHolder {
  public questionsInfo: IQuestionInfo[];

  constructor() {
    
  }

  loadQuestionsInfo(): Promise<IQuestionInfo[]> {
    
    return fetch(imagesJSON)
      .then((res) => {
        
        return res.json();
       

      })
      .then((data) => {
        
        this.questionsInfo = data;
        console.log(this.questionsInfo)
        return data;
      });
      
  }

  getQuestionsTicketInfo(imageNum: number) {
    
    const ticketQuestions = this.questionsInfo.filter((question) => {
      return (
        Number.parseInt(question.imageNum.split(' ')[1]) === imageNum
      );
    });

    return ticketQuestions;
  }
}


