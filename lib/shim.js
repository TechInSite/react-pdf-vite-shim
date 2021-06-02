const process = require("process");
const { Buffer } = require("buffer");
const EventEmitter = require("events");

window.global = window;
window.Buffer = Buffer;
window.process = process;
window.EventEmitter = EventEmitter;

module.exports = require("./react-pdf.browser.cjs");
