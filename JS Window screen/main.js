// select element from Dom

let width = document.querySelector("#width");
let height = document.querySelector("#height");
let availWidth = document.querySelector("#availWidth");
let availHeight = document.querySelector("#availHeight");
let colorDepth = document.querySelector("#colorDepth");
let pixelDepth = document.querySelector("#pixelDepth");

width.innerHTML = `screen width is ${screen.width}`;

height.innerHTML = `screen height is ${screen.height}`;

availHeight.innerHTML = `screen availHeight is ${screen.availHeight}`;

availWidth.innerHTML = `screen availWidth is ${screen.availWidth}`;

colorDepth.innerHTML = `screen color depth is ${screen.colorDepth}`;

pixelDepth.innerHTML = `screen pixel depth is ${screen.pixelDepth}`;
