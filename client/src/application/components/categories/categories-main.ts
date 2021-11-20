import Control from "../../../common/control";

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

  constructor(parentNode: HTMLElement) {
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

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "portrait card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "Portrait");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "landscape card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "Landscape");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "still-life card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "Still life");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "impressionism card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(
      this.heading.node,
      "div",
      "title",
      "Impressionism"
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
      "expressionism card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(
      this.heading.node,
      "div",
      "title",
      "Expressionism"
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
      "avant-garde card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "Avant-garde");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "renaissance card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "Renaissance");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "surrealism card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "Surrealism");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "kitsch card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "Kitsch");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "minimalism card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "Minimalism");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(
      this.categoriesWrapper.node,
      "div",
      "interior card"
    );
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "Interior");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");

    this.cover = new Control(this.categoriesWrapper.node, "div", "nude card");
    this.heading = new Control(this.cover.node, "div", "heading");
    this.title = new Control(this.heading.node, "div", "title", "Nude");
    this.score = new Control(this.heading.node, "div", "score-categories", "");
    this.image = new Control(this.cover.node, "div", "image-categories");
  }
}
