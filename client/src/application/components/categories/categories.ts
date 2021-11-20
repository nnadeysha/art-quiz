import Control from "../../../common/control";
import "../../../styles/categories.css";
import { Footer } from "../footer";
import {CategoriesHeader} from "./categories-header";
import {CategoriesMain} from "./categories-main";

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


     getArtistCategory(){
       
      const img = [];
      img.push(this.categoriesMain.image);
      for(let k = 0; k < img.length; k++){
        console.log(img)
        let count = 0;
        for(let i = 0; i < 20; i++){
         count = Math.floor(Math.random() * i + 1);
        }
        let url = `url(https://raw.githubusercontent.com/nnadeysha/image-data/master/img/${count}.jpg)`;
        //this.categoriesMain.cover.image.node.style.background = url;
  
        img[k].node.style.background = url;
      }
      
      
       console.log('dfd')
      
    }



}