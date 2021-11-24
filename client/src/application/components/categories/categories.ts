import Control from "../../../common/control";
import "../../../styles/categories.css";
import { Footer } from "../footer";
import { CategoriesHeader } from "./categories-header";
import { CategoriesMain } from "./categories-main";
import  {DataHolder, ICategoryData}  from "../../data-holder";
import { QuestionsArtists } from "../questions/artists-questions";

export class Categories extends Control {
  footer: Footer;
  categoriesHeader: CategoriesHeader;
  categoriesMain: CategoriesMain;
  
  onChooseCategory: (result: boolean) => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "categories-screen", "");

    this.categoriesHeader = new CategoriesHeader(this.node);
    this.categoriesMain = new CategoriesMain(this.node, );
    this.footer = new Footer(this.node);
    const dataHolder = new DataHolder();
    /* dataHolder.build().then(loadingResult =>{
      new QuestionsArtists(this.node, loadingResult.base.categories[2].cardsArr[1])
      console.log(loadingResult.base);
      let img = new Image();
      img.src = "../assets/" + loadingResult.base.categories[2].cardsArr[1].image;
      console.log(img);
      document.body.append(img);
    }
      ); */
    this.categoriesMain.categoriesWrapper.node.onclick = () => {
      this.onChooseCategory(true);
      
      
    };
  }
 
  
}


