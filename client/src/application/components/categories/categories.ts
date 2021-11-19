import Control from "../../../common/control";
import "../../../styles/categories.css";
import { Footer } from "../footer";
import {CategoriesHeader} from "./categories-header";
import {CategoriesMain} from "./categories-main"
export class Categories extends Control {
    footer: Footer;
    categoriesHeader: CategoriesHeader;
    categoriesMain: CategoriesMain;
    constructor(parentNode:HTMLElement){
        super(parentNode, "div", "categories-screen hide", "");

        this.categoriesHeader = new CategoriesHeader(this.node);
        this.categoriesMain = new CategoriesMain(this.node);
        this.footer = new Footer(this.node);
    }

    show(){
      
      this.node.classList.remove("hide");
      
      this.node.classList.add("show");
    }
    hide() {
      this.node.classList.remove("show");
      
        this.node.classList.add("hide");
       
        
       
      
    }
}