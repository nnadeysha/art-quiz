import Control from "../common/control";
import "../styles/categories.css";
import { Footer } from "../application/components/footer";
import { CategoriesHeader } from "../application/components/categories/categories-header";
import { CategoriesMain } from "../application/components/categories/categories-main";
import { DataHolder, ICategoryData } from "./data-holder";
import { QuestionsArtists } from "../application/components/questions/artists-questions";

export class Categories extends Control {
  footer: Footer;
  categoriesHeader: Control<HTMLElement>;
  categoriesMain: CategoriesMain;
  settingsIcon: Control<HTMLElement>;
  headerLeft: Control<HTMLElement>;
  logoDoubleColor: Control<HTMLElement>;
  headerNavigation: Control<HTMLElement>;
  homeBtn: Control<HTMLAnchorElement>;
  categoriesBtn: Control<HTMLAnchorElement>;
  scoreBtn: Control<HTMLElement>;
  onChooseCategory: (result: boolean) => void;
  public onCategorySelect: (index: number) => void;
  onBack: () => void;
  onSelect: (index: number) => void;
  //gameName: string;

  constructor(parentNode: HTMLElement, gameName: string) {
    super(parentNode, "div", "categories-screen", "");
//this.gameName = gameName;
    const categoriesHeader = new Control(
      this.node,
      "div",
      "categories-header",
      gameName
    );
    this.headerLeft = new Control(categoriesHeader.node, "div", "header-left");
    this.logoDoubleColor = new Control(
      this.headerLeft.node,
      "div",
      "header-logo-dcolor"
    );
    this.headerNavigation = new Control(
      this.headerLeft.node,
      "div",
      "header-navigation"
    );
    const backBtn = new Control(
      this.headerNavigation.node,
      "a",
      "home",
      "Home"
    );
    backBtn.node.onclick = () => {
      this.onBack();
    };

    const categoriesBtn = new Control(
      this.headerNavigation.node,
      "a",
      "categories",
      "Categories"
    );
    this.scoreBtn = new Control(
      this.headerNavigation.node,
      "a",
      "score",
      "Score"
    );
    this.settingsIcon = new Control(this.node, "button", "settings-icon");
    

    const categoriesList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const categoriesButton = categoriesList.map((it, i)=>{
      const button = new Control(this.node, 'button', '', it.toString());
      button.node.onclick = () =>{
        this.onSelect(i)
      }
      return button
    })


    /*!!!!!!!!!!!!!!!!!!!!!!!!!! const dataHolder = new DataHolder();
    dataHolder.build().then((loadingResult) => {
      const categoriesMain = new CategoriesMain(
        this.node,
        loadingResult.base.categories
      );
      //categoriesMain.title.node.textContent= `${1}`
      categoriesMain.categoriesWrapper.node.onclick = () => {
        this.onChooseCategory(true);
        this.onCategorySelect(1);
      };
    }) */;
    /* this.categoriesMain = new CategoriesMain(this.node, dataHolder.base.categories); */
   /*  setTimeout(() => {
      this.footer = new Footer(this.node);
    }, 1000);
 */
    /* dataHolder.build().then(loadingResult =>{
      new QuestionsArtists(this.node, loadingResult.base.categories[2].cardsArr[1])
      console.log(loadingResult.base);
      let img = new Image();
      img.src = "../assets/" + loadingResult.base.categories[2].cardsArr[1].image;
      console.log(img);
      document.body.append(img);
    }
      ); */
  }
}


