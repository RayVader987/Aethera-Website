import "./Solution.css";
import solutionImage from "../../assets/images/digester.jpg";
import { FaArrowRight } from "react-icons/fa";

function Solution() {

    return (

        <section
            className="solution"
            id="solution"
        >

            <div className="solutionTop">

                <div className="solutionImage">

                    <img
                        src={solutionImage}
                        alt="Biodigester"
                    />

                </div>

                <div className="solutionText">

                    <span>

                        OUR SOLUTION

                    </span>

                    <h2>

                        Organic Waste = Clean Energy

                    </h2>

                    <p>

                        Aethera provides an intelligent biodigestion system that converts
                        organic waste into renewable biogas and nutrient-rich fertilizer.
                        Instead of allowing waste to become an environmental burden,
                        we unlock its potential as a valuable energy resource.

                    </p>

                </div>

            </div>

            <div className="steps">

                <div className="stepCard">

                    <h3>Collect</h3>

                    <p>

                        Organic waste from homes,
                        farms and communities.

                    </p>

                </div>

                <FaArrowRight className="flowArrow" />

                <div className="stepCard">

                    <h3>Convert</h3>

                    <p>

                        The biodigester naturally
                        breaks down waste.

                    </p>

                </div>

                <FaArrowRight className="flowArrow" />

                <div className="stepCard">

                    <h3>Generate</h3>

                    <p>

                        Clean biogas for energy
                        and organic fertilizer.

                    </p>

                </div>

            </div>

        </section>

    )

}

export default Solution;