import KM_img from "../../assets-img/header_gettingmarried.avif";
import flower_btn from "../../assets-img/flower_btn.png";
import React, { useState } from "react";

const Rsvp = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegistrationToggle = () => {
    // Inverser l'état de l'affichage du formulaire d'enregistrement
    setShowRegistration(!showRegistration);
  };

  const handleSubmit = (event) => {
    // Empêcher le rechargement de la page lors de la soumission du formulaire
    event.preventDefault();
    // Ajouter ici la logique pour traiter les données du formulaire d'enregistrement
    // (envoi à un serveur, validation, etc.)
  };

  return (
    <div className="rsvp">
      <section className="rsvp_title">
        <span className="rsvp_title_names">Kévin & Margaux</span>
        <h1 className="rsvp_title_text">se disent Oui !</h1>
      </section>
      <img src={KM_img} alt="K&M se disent oui"></img>

      {/* Bouton pour ouvrir/fermer le formulaire d'enregistrement */}
      <button onClick={handleRegistrationToggle} className="rsvp_btn">
        {showRegistration ? "Fermer" : "RSVP"}
        <img src={flower_btn} alt="flower_img"></img>
      </button>
      {/* Afficher le formulaire d'enregistrement si showRegistration est true */}
      {showRegistration && (
        <form onSubmit={handleSubmit} className="rsvp_form">
          {/* Ajouter ici les champs du formulaire d'enregistrement */}
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Prénom" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Nb d'invités" />
          <button type="submit">Soumettre</button>
        </form>
      )}
    </div>
  );
};

export default Rsvp;
