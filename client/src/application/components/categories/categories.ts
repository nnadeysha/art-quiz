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
        super(parentNode, "div", "categories-screen", "");

        this.categoriesHeader = new CategoriesHeader(this.node);
        this.categoriesMain = new CategoriesMain(this.node);
        this.footer = new Footer(this.node);
    }
}