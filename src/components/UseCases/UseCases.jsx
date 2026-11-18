import "./UseCases.css";

import {
  FaBuilding,
  FaLeaf,
  FaUniversity,
  FaHome
} from "react-icons/fa";

function UseCases() {
  return (
    <section className="usecases" id="usecases">

      <span className="sectionTag">
        USE CASES
      </span>

      <h2>
        Designed for Every Scale
      </h2>

      <p className="sectionText">
        Aethera adapts seamlessly across residential,
        agricultural, educational, and commercial
        environments, making sustainable waste
        management accessible wherever organic waste
        is generated.
      </p>

      <div className="useGrid">

        <div className="useCard">

          <FaHome className="useIcon"/>

          <h3>Residential Communities</h3>

          <p>
            Convert household organic waste into
            renewable energy while reducing landfill
            dependency.
          </p>

        </div>

        <div className="useCard">

          <FaLeaf className="useIcon"/>

          <h3>Date Palm Farms</h3>

          <p>
            Transform agricultural waste into valuable
            biogas and nutrient-rich organic fertilizer.
          </p>

        </div>

        <div className="useCard">

          <FaUniversity className="useIcon"/>

          <h3>Universities & Campuses</h3>

          <p>
            Manage cafeteria waste responsibly while
            demonstrating sustainable innovation.
          </p>

        </div>

        <div className="useCard">

          <FaBuilding className="useIcon"/>

          <h3>Commercial Buildings</h3>

          <p>
            Improve waste management practices while
            supporting long-term environmental goals.
          </p>

        </div>

      </div>

    </section>
  );
}

export default UseCases;