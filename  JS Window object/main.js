// select element from dom

const width = document.querySelector("#window_Width");
const height = document.querySelector("#window_Height");
let newWindow;
// window.innerWidth

width.innerHTML = `Window Inner Width is ${window.innerWidth}`;

// window.innerHeight

height.innerHTML = `Window Inner Height is ${window.innerHeight}`;

// functions

const openWindow = () => {
  // window.open(URL, name, specs, replace)

  newWindow = window.open(
    "https://www.w3schools.com/jsref/met_win_open.asp",
    "_blank"
  );
};

const closeWindow = () => {
  // window.close(): no params, no return value

  newWindow.close();
};
