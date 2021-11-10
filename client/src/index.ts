import {Application} from "./application/app";
import "./styles/wrapper.css"
const app = new Application(document.body);

(window as any).app = app;