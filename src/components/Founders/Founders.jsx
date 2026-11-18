import "./Founders.css";

import aditImage from "../../assets/images/Adit.png";
import radhikaImage from "../../assets/images/Radhika.png";

function Founders() {

  const founders = [
    {
      image: aditImage,
      name: "Adit Tewari",
      role: "Co-Founder",
      quote:
        "Building practical climate solutions that transform waste into opportunity."
    },
    {
      image: radhikaImage,
      name: "Radhika Khatri",
      role: "Co-Founder",
      quote:
        "Creating a future where sustainability becomes a part of everyday life."
    }
  ];

  return (
    <section className="founders" id="founders">

      <div className="founderHeading">

        <span>OUR FOUNDERS</span>

        <h2>The Minds Behind Aethera</h2>

        <p>
          Aethera was founded with a shared vision of transforming organic waste
          into valuable resources through sustainable innovation. Our mission is
          to create solutions that contribute to a cleaner, greener and more
          sustainable future.
        </p>

      </div>

      <div className="founderGrid">

        {founders.map((person, index) => (

          <div className="founderCard" key={index}>

            <div className="founderImage">

              <img
                src={person.image}
                alt={person.name}
                className={person.name === "Radhika Khatri" ? "radhikaImage" : ""}
              />

            </div>

            <h3>{person.name}</h3>

            <h4>{person.role}</h4>

            <p>{person.quote}</p>

          </div>

        ))}

      </div>

    </section>
  );

}

export default Founders;