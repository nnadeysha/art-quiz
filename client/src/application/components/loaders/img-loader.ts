interface IGameData {
    questions: Array<IQuestion>
}
interface IQuestion{
    variants: Array<IAnswer>,
    correctAnswerIndex: number
}
interface IAnswer{
    author: string,
    image?: Blob,
    imageURL: string,
    name: string,
    year: number
}
interface IQuestionData{
    author: string,
    category: string,
    imageNum?: string,
    name: string,
    year: string
}
export class GameDataModel implements IGameData{
    public questions: Array<IQuestion>;
    private _data: IQuestionData[];
    private _category: number;
    private cache: Map<string, Blob> = new Map();

    constructor(data: IQuestionData[], category:number){

        const categoryQuestionsData = data.slice(category*10,10)
    const categoryQuestions: Array<IQuestion> = [];
    for(let i = 0; i < categoryQuestionsData.length; i++){
        const item = categoryQuestionsData[i];
        const variant: IAnswer = {
            imageURL: `https://raw.githubusercontent.com/nnadeysha/image-data/master/img/.jpg`,  //${imageNum}
            author: "",
            name: "",
            year: 0
        }
         //const loadResponse = (`https://raw.githubusercontent.com/nnadeysha/image-data/master/img/${item.imageNum}.jpg`)
        //const imgBlob = await loadResponse.blob();
        const question: IQuestion = {
            variants: [],
            correctAnswerIndex:0
        }
        categoryQuestions.push(question)
    }
    this.questions = categoryQuestions;
    }
    
    async preload(index: number){
        const qustion = this.questions[index];
        for(let i = 0; i < this.questions.length; i++){
            const imgBlob = await this.loadImage(qustion.variants[i].imageURL)
            qustion.variants[i].image = imgBlob;
        }
         
    }

    async loadImage(imageNum: string){
        if(this.cache.has(imageNum)){
            return this.cache.get(imageNum)
        }else{
            const loadResponse = await fetch(`https://raw.githubusercontent.com/nnadeysha/image-data/master/img/${imageNum}.jpg`)
            const imgBlob = await loadResponse.blob();
            this.cache.set(imageNum, imgBlob)
            return imgBlob;
        }
        
    }

    /* destroy(){
        for(let blob of this.cache.values()){

        }
    } */
}

//URL.createObjectURL(blob);
/* class GameData implements IGameData{
    public questions: Array<IQuestion>;
    constructor(){

    }*/
/*
    async buildFromJason(data: IQuestionData[], category: number){
        const categoryQuestionsData = data.slice(category*10,10)
        const categoryQuestions: Array<IQuestion> = [];
        for(let i = 0; i < categoryQuestionsData.length; i++){
            const item = categoryQuestionsData[i];
            const loadResponse = await fetch(`https://raw.githubusercontent.com/nnadeysha/image-data/master/img/${item.imageNum}.jpg`)
            const imgBlob = await loadResponse.blob();
            const question: IQuestion = {
                variants: [],
                correctAnswerIndex:0
            }
            categoryQuestions.push(question)
        }
        this.questions = categoryQuestions;
    }
} */

/* import { COUNT_CATEGORIES, COUNT_QUESTION } from '../const.js';

export default class PhotoLoader {
  constructor() {
    this._allQuestions = [];
    this._cache = new Map();
  }

  setQuestion(questions) {
    this._allQuestions = questions;
  }

  setType(type) {
    this._type = type;
  }

  async getPhotoForArtists(indexCategory, indexQuestion) {
    const num = this._allQuestions[indexCategory * 10 + indexQuestion].imageNum;
    const imgBlob = await this.loadImage(num);
    return imgBlob;
  }

  async getPhotoForPaintings(photos) {
    const photosBlob = [];
    for (let i = 0; i < photos.length; i++) {
      const num = photos[i].imageNum;
      const imgBlob = await this.loadImage(num);
      photosBlob.push(imgBlob);
    }
    return photosBlob;
  }

  async getAllPhoto(questions) {
    const allPhoto = [];
    for (let i = 0; i < questions.length; i++) {
      const num = questions[i].imageNum;
      const imgBlob = await this.loadImage(num);
      allPhoto.push(imgBlob);
    }
    return allPhoto;
  }

  async getCategoryPhoto() {
    const categoryPhotos = [];
    const typeCount = this._type === 'artists' ? 0 : 120;
    for (let i = 0; i < COUNT_CATEGORIES; i++) {
      const num = this._allQuestions[i * COUNT_QUESTION + typeCount].imageNum;

      const imgBlob = await this.loadImage(num);
      categoryPhotos.push(imgBlob);
    }
    return categoryPhotos;
  }

  async getPhotoForScore(indexCategory) {
    const scorePhotos = [];
    const typeCount = this._type === 'artists' ? 0 : 120;
    for (let i = 0; i < COUNT_QUESTION; i++) {
      const num = this._allQuestions[indexCategory * 10 + i + typeCount].imageNum;
      const imgBlob = await this.loadImage(num);
      scorePhotos.push(imgBlob);
    }
    return scorePhotos;
  }

  async loadImage(imageNum) {
    if (this._cache.has(imageNum)) {
      return this._cache.get(imageNum);
    }
    const loadResponse = await fetch(`./assets/img/paintings/${imageNum}.jpg`);
    const imgBlob = await loadResponse.blob();
    this._cache.set(imageNum, imgBlob);
    return imgBlob;
  }
}
 */