import Control from "../../../common/control";
import "../../../styles/questions.css";

export class SliderCircle extends Control{
    slideCircle: Control<HTMLElement>;
    constructor(parentNode: HTMLElement){
        super(parentNode, "div", "slider");
        this.slideCircle = new Control(this.node, "span", "slide-circle");
        this.slideCircle = new Control(this.node, "span", "slide-circle");
        this.slideCircle = new Control(this.node, "span", "slide-circle");
        this.slideCircle = new Control(this.node, "span", "slide-circle");
        this.slideCircle = new Control(this.node, "span", "slide-circle");
        this.slideCircle = new Control(this.node, "span", "slide-circle");
        this.slideCircle = new Control(this.node, "span", "slide-circle");
        this.slideCircle = new Control(this.node, "span", "slide-circle");
        this.slideCircle = new Control(this.node, "span", "slide-circle");
        this.slideCircle = new Control(this.node, "span", "slide-circle");
    }
}