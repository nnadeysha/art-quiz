import Control from "../../../common/control";
import { DataHolder, ICategoryData } from '../../data-holder';
import {IGameFieldOptions} from '../../dto'
import { QuestionsArtists } from "../questions/artists-questions";
export class CategoriesMain extends Control {
  surrealism: Control<HTMLElement>;
  settingsIcon: Control<HTMLElement>;
  headerLeft: Control<HTMLElement>;
  logoDoubleColor: Control<HTMLElement>;
  headerNavigation: Control<HTMLElement>;
  homeBtn: Control<HTMLAnchorElement>;
  categoriesBtn: Control<HTMLAnchorElement>;
  scoreBtn: Control<HTMLElement>;
  categoriesWrapper: Control<HTMLElement>;
  portrait: Control<HTMLElement>;
  heading: Control<HTMLElement>;
  title: Control<HTMLElement>;
  score: Control<HTMLElement>;
  image: Control<HTMLElement>;
  landscape: Control<HTMLElement>;
  stillLife: Control<HTMLElement>;
  impressionism: Control<HTMLElement>;
  expressionism: Control<HTMLElement>;
  avantGarde: Control<HTMLElement>;
  renaissance: Control<HTMLElement>;
  kitsch: Control<HTMLElement>;
  minimalism: Control<HTMLElement>;
  interior: Control<HTMLElement>;
  nude: Control<HTMLElement>;
  categoriesTitle: Control<HTMLElement>;
  cover: Control<HTMLElement>;
  cattegory: Control<HTMLElement>;

  categories: Array<HTMLElement>
 public onStartButtonClick: (options: IGameFieldOptions) => void;
 public onCategorySelect: (index: number)=>void;
  constructor(parentNode: HTMLElement, data: Array<ICategoryData>) {
    super(parentNode, "div", "categories-main", "");
    this.categoriesTitle = new Control(
      this.node,
      "div",
      "categories-title",
      "Categories"
    );
    
  
    this.categoriesWrapper = new Control(
      this.node,
      "div",
      "categories-wrapper"
    );
    this.cattegory = this.categoriesWrapper
    
    //this.heading = new Control(this.cattegory.node, "div", "heading"); 

    data.forEach((item, index)=>{
      const categoryName = new Control(this.categoriesWrapper.node);
      this.heading = new Control(categoryName.node, "div", "heading"); 
      this.title = new Control(this.heading.node, "div", "category-title")
      this.title.node.textContent = item.name;
      this.score = new Control(this.heading.node, "div", "score-categories", "");
      this.image = new Control(categoryName.node, "div", "image-categories");
      this.image.node.onclick = ()=>{
        this.onCategorySelect(index);
       this.getImgForCategoryArtistCard()
      }});
      
   
    this.getImgForCategoryArtistCard();
    this.getImgForCategoryPisturestCard()
  }

  getImgForCategoryArtistCard(){
    let cat = this.categories;
  //  this.image.node.style.background = url
  const allSubMenus : NodeListOf<Element> = document.querySelectorAll('.image-categories');
  for (const sub of allSubMenus as any){ // then will pass compiler
  
    let count = this.getrandomNumber(0, 120)
     let url = `url(https://raw.githubusercontent.com/nnadeysha/image-data/master/img/${count}.jpg)`;
     sub.style.background = url;
     sub.style.backgroundPosition = "center";
     sub.style.backgroundRepeat = "no-repeat";
     sub.style.backgroundSize =  "cover";
    
  }  
 }

 getImgForCategoryPisturestCard(){
  const allSubMenus : NodeListOf<Element> = document.querySelectorAll('.image-categories');
  for (const sub of allSubMenus as any){ // then will pass compiler
    let count = this.getrandomNumber(121, 140)
     let url = `url(https://raw.githubusercontent.com/nnadeysha/image-data/master/img/${count}.jpg)`;
     sub.style.background = url;
     sub.style.backgroundPosition = "center";
     sub.style.backgroundRepeat = "no-repeat";
     sub.style.backgroundSize =  "cover";
    
  }  
 }
 
 getrandomNumber(min: number, max: number) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
}
/*   



answers.forEach(el => {
        const artistsQuest = [];
        if(Number(el.imageNum) < 120){
          
          return artistsQuest.push(el)
        }











export class Lobby extends Control {
  public onStartButtonClick: (options: IGameFieldOptions) => void;

  constructor(parentNode: HTMLElement, questionCount: number) {
    super(parentNode);

    const ticketNumberInput = new Control<HTMLInputElement>(
      this.node,
      'div',
      '',
      'Ticket number'
    );

    const ticketNum = new Control<HTMLInputElement>(this.node, 'input');
    ticketNum.node.type = 'number';
    ticketNum.node.min = '1';
    ticketNum.node.max = questionCount.toString();
    ticketNum.node.step = '1';
    ticketNum.node.value = '1';

    const startButton = new Control(this.node, 'button', '', 'start game');
    startButton.node.onclick = () => {
      this.onStartButtonClick({
        ticketNum: ticketNum.node.valueAsNumber,
      });
    };
  } */

   //this.title = new Control(this.heading.node, "div", "title", "1");
    
    
   /*  
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "2-round  card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "2");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "3-round  card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "3");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "4-round  card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(
      this.heading.node,
      "div",
      "title",
      "4"
    );
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(
      this.cover.node,
      "div",
      "image-categories"
    );

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "5-round  card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(
      this.heading.node,
      "div",
      "title",
      "5"
    );
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(
      this.cover.node,
      "div",
      "image-categories"
    );

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "6-round  card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "6");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "7-round  card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "7");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "8-round  card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "8");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "9-round  card"
    );
    
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "9");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "10-round  card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "10");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");
   
    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "11-round  card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "11");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");
    
    this.cover = new Control(this.categoriesWrapper.node, "div", "nude card");
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "12");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories"); */