import Control from "../common/control";
import {MainScreen} from "./components/main";

export class Application extends Control{
    mainScreen: MainScreen;
    wrapper: Control<HTMLElement>;
    constructor(parentNode:HTMLElement){
    super(parentNode, "div", "div", "");
this.wrapper = new Control(parentNode,"main", "wrapper")
    this.mainScreen = new MainScreen(this.wrapper.node)
    }


}