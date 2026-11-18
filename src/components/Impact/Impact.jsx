import "./Impact.css";

import {
    FaSeedling,
    FaGlobeAmericas,
    FaRecycle,
    FaSolarPanel
} from "react-icons/fa";

function Impact() {

    const cards = [

        {
            icon: <FaRecycle className="impactIcon" />,
            title: "Circular Waste Management",
            text: "Organic waste is transformed into valuable energy and nutrient-rich fertilizer instead of ending up in landfills."
        },

        {
            icon: <FaSolarPanel className="impactIcon" />,
            title: "Renewable Energy",
            text: "Clean biogas offers a sustainable alternative that reduces dependence on fossil fuels."
        },

        {
            icon: <FaSeedling className="impactIcon" />,
            title: "Sustainable Agriculture",
            text: "The remaining digestate becomes organic fertilizer, improving soil quality while reducing chemical usage."
        },

        {
            icon: <FaGlobeAmericas className="impactIcon" />,
            title: "Lower Environmental Impact",
            text: "Capturing methane before it reaches the atmosphere contributes to cleaner air and a healthier planet."
        }

    ];

    return (

        <section className="impact" id="impact">

            <div className="impactHeading">

                <span>OUR IMPACT</span>

                <h2>
                    Building a Cleaner Future,
                    One Biodigester at a Time.
                </h2>

                <p>
                    Aethera transforms organic waste into renewable resources,
                    helping communities reduce emissions, generate clean energy,
                    and create a more circular economy.
                </p>

            </div>

            <div className="marqueeContainer">

                {/* TOP ROW */}

                <div className="marquee">

                    <div className="track left">

                        {[...cards, ...cards].map((card, index) => (

                            <div className="impactCard" key={`top-${index}`}>

                                {card.icon}

                                <h3>{card.title}</h3>

                                <p>{card.text}</p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    )

}

export default Impact;