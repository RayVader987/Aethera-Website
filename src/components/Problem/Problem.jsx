import "./Problem.css";
import { FaLeaf, FaBolt, FaTrash } from "react-icons/fa";
import problemImage from "../../assets/images/problem.jpg";

function Problem() {

    return (

        <section className="problem" id="problem">

            <div className="problemTop">

                <div className="problemLeft">

                    <span className="smallTitle">

                        THE CHALLENGE

                    </span>

                    <h2>

                        Waste shouldn't end up in landfills.

                    </h2>

                    <p>

                        Every day, enormous amounts of organic waste are discarded while
                        communities continue relying on non-renewable energy.
                        Valuable resources are lost, methane escapes into the atmosphere,
                        and sustainable opportunities remain untapped.

                    </p>

                </div>

                <div className="problemRight">

                    <img
                        src={problemImage}
                        alt="Organic Waste"
                    />

                </div>

            </div>

            <div className="problemCards">

                <div className="card">

                    <FaTrash className="icon"/>

                    <h3>Organic Waste</h3>

                    <p>

                        Food waste and agricultural residue continue to accumulate instead
                        of being transformed into valuable resources.

                    </p>

                </div>

                <div className="card">

                    <FaBolt className="icon"/>

                    <h3>Energy Dependence</h3>

                    <p>

                        Communities still depend heavily on fossil fuels despite the
                        availability of renewable alternatives.

                    </p>

                </div>

                <div className="card">

                    <FaLeaf className="icon"/>

                    <h3>Environmental Impact</h3>

                    <p>

                        Organic waste releases greenhouse gases while degrading our
                        environment and contributing to climate change.

                    </p>

                </div>

            </div>

        </section>

    );

}

export default Problem;