import Control from "../../common/control";

export class Footer extends Control {
  footer: Control<HTMLElement>;
  logoRSS: Control<HTMLAnchorElement>;
  developer: Control<HTMLAnchorElement>;
  yearOfCreation: Control<HTMLElement>;
  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "footer");
    this.logoRSS = new Control(this.node, "a", "logo-footer-rss");
    this.logoRSS.node.href = "https://rs.school/js/";
    this.logoRSS.node.target = "_blank";
    this.yearOfCreation = new Control(
      this.node,
      "p",
      "year-of-creation",
      "© 2021"
    );
    this.developer = new Control(
      this.node,
      "a",
      "developer-github",
      "nnadeysha"
    );
    this.developer.node.href = "https://github.com/nnadeysha";
    this.developer.node.target = "_blank";
  }
}
