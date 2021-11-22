import Control from "../../../common/control";
import "../../../styles/categories.css";
import { Footer } from "../footer";
import {CategoriesHeader} from "./categories-header";
import {CategoriesMain} from "./categories-main";
import { IGameFieldOptions } from "../../dto";

export class Categories extends Control {
  
    footer: Footer;
    categoriesHeader: CategoriesHeader;
    categoriesMain: CategoriesMain;
    img: Array<any>;
  onChooseCategory : (result: boolean) => void;

    constructor(parentNode:HTMLElement){
        super(parentNode, "div", "categories-screen", "");

        this.categoriesHeader = new CategoriesHeader(this.node);
        this.categoriesMain = new CategoriesMain(this.node);
        this.footer = new Footer(this.node);

        this.categoriesMain.categoriesWrapper.node.onclick = () =>{
          this.onChooseCategory(true);
          //this.getArtistCategory()
        }

    }
}
 
