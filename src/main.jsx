import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Lenis from "lenis";

import "lenis/dist/lenis.css";

const lenis = new Lenis({

    duration:1.3,

    smoothWheel:true,

});

function raf(time){

lenis.raf(time);

requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(

<React.StrictMode>

<App/>

</React.StrictMode>

);