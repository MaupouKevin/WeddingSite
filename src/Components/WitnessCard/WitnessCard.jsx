import React, { useState, useEffect } from "react";

const WeddingWitnesses = () => {
  const [weddingWitnesses, setWeddingWitnesses] = useState([]);

  useEffect(() => {
    const fetchWeddingWitnesses = async () => {
      try {
        const response = await fetch(
          "http://localhost:4200/api/weddingwitness"
        );
        const data = await response.json();
        setWeddingWitnesses(data);
      } catch (error) {
        console.error("Error fetching wedding witnesses:", error);
      }
    };

    fetchWeddingWitnesses();
  }, []);

  return (
    <div className="wedding-witnesses-container">
      {weddingWitnesses.map((witness) => (
        <div key={witness._id} className="wedding-witnesses-container_cards">
          <div className="wedding-witnesses-container_cards_item">
            <img
              src={`assets-img/${witness._id}.jpg`}
              className="wedding-witnesses-container_cards_item_img"
              alt={witness.title}
            />
            <div className="wedding-witnesses-container_cards_item_description">
              <p className="wedding-witnesses-container_cards_item_roles">
                {witness.description}
              </p>
              <h2 className="wedding-witnesses-container_cards_item_names">
                {witness.title}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeddingWitnesses;
