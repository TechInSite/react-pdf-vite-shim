import process from "process";
import { Buffer } from "buffer";
import EventEmitter from "events";

window.global = window;
window.Buffer = Buffer;
window.process = process;
window.EventEmitter = EventEmitter;

export * from "./react-pdf.browser.es";
import ReactPDF from "./react-pdf.browser.es";
export default ReactPDF;
