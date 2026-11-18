import "./Performance.css";

function Performance() {
  return (
    <section className="performance">

      <div className="performanceHeading">

        <span>WHAT AETHERA DELIVERS</span>

        <h2>
          Designed for Sustainable Performance
        </h2>

        <p>
          Every biodigester is engineered to transform organic waste into
          valuable resources while creating long-term environmental and
          economic benefits.
        </p>

      </div>

      <div className="performanceGrid">

        <div className="performanceCard">

          <h3>Biodigester Capacity</h3>

          <p>
            A 45,000 litre biodigester designed for continuous organic waste
            processing, ensuring reliable operation for communities and
            commercial applications.
          </p>

        </div>

        <div className="performanceCard">

          <h3>Energy Generation</h3>

          <p>
            Produces approximately 160 kWh of renewable energy every day
            through biomethane generation, creating an additional renewable
            energy source while reducing dependence on conventional fuels.
          </p>

        </div>

        <div className="performanceCard">

          <h3>Organic Biofertilizer</h3>

          <p>
            Generates nearly 400 kg of nutrient-rich biofertilizer each day,
            supporting healthier agricultural practices and reducing the need
            for chemical fertilizers.
          </p>

        </div>

        <div className="performanceCard">

          <h3>Environmental & Economic Value</h3>

          <p>
            By converting waste into clean energy, the system reduces carbon
            emissions while creating opportunities through renewable energy,
            biofertilizer production and carbon credit generation, making the
            solution environmentally responsible and economically sustainable.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Performance;