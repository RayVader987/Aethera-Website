import "./Business.css";

import {
    FaLeaf,
    FaIndustry,
    FaLightbulb,
    FaRecycle,
    FaSeedling,
    FaGlobe
} from "react-icons/fa";

function Business() {

    return (

        <section className="business">

            <div className="businessHeading">

                <span>WHY AETHERA</span>

                <h2>
                    More Than A Biodigester.
                    <br />
                    A Sustainable Ecosystem.
                </h2>

                <p>

                    We believe sustainability should become part of everyday life.
                    Aethera is designed to make waste management cleaner,
                    simpler and more valuable for communities,
                    institutions and businesses.

                </p>

            </div>

            <div className="businessGrid">

                <div className="feature">
                    <FaRecycle />
                    <h3>Circular Economy</h3>
                    <p>
                        Waste is transformed into energy and fertilizer instead of becoming pollution.
                    </p>
                </div>

                <div className="feature">
                    <FaLeaf />
                    <h3>Cleaner Environment</h3>
                    <p>
                        Reduce greenhouse gas emissions through responsible organic waste treatment.
                    </p>
                </div>

                <div className="feature">
                    <FaIndustry />
                    <h3>Scalable Solution</h3>
                    <p>
                        Suitable for communities, farms, campuses and commercial facilities.
                    </p>
                </div>

                <div className="feature">
                    <FaLightbulb />
                    <h3>Smart Operation</h3>
                    <p>
                        Designed to simplify waste management while improving operational efficiency.
                    </p>
                </div>

                <div className="feature">
                    <FaSeedling />
                    <h3>Organic Fertilizer</h3>
                    <p>
                        Produce nutrient-rich fertilizer that supports healthier agricultural practices.
                    </p>
                </div>

                <div className="feature">
                    <FaGlobe />
                    <h3>Future Ready</h3>
                    <p>
                        Built to support cleaner cities and a more sustainable future.
                    </p>
                </div>

            </div>

        </section>

    )

}

export default Business;