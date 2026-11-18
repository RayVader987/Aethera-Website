import "./Hero.css";
import { motion } from "framer-motion";

function Hero(){

return(

<section className="hero" id="hero">

<div className="overlay"></div>

<div className="heroContent">

<motion.h1

initial={{opacity:0,y:60}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

>

Fueling the Future


</motion.h1>

<motion.p

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:.5}}

>

Aethera transforms organic waste into clean renewable energy,
creating a future where sustainability becomes effortless.

</motion.p>

<motion.div

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:1}}

>

<a href="#solution">

<button>

Explore Solution

</button>

</a>

</motion.div>

</div>

<div className="scroll">

Scroll ↓

</div>

</section>

)

}

export default Hero;