const links = document.querySelectorAll('link[rel="import"]');
console.log(links);
links.forEach((link) => {
    let template = link.import.querySelector('template');
    let clone = document.importNode(template.content, true);
    let target = clone.querySelector(".template").dataset.tab;
    document.getElementById(target).appendChild(clone);
});

window.$ = window.jquery = require("jquery");
window.popper = require("popper.js");
require("bootstrap");