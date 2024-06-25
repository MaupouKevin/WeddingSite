import React, { useState, useEffect } from "react";
import countdown_bckground from "../../assets-img/Vallery2.jpg";

function CountdownTimer() {
  const targetDate = new Date("2025-04-23T23:59:59");
  // Fonction pour calculer le temps restant jusqu'à la date cible
  const calculateTimeLeft = () => {
    // Calcul de la différence entre la date cible et la date actuelle
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    // Si la différence est positive (la date cible est dans le futur)
    if (difference > 0) {
      // Calcul du nombre de mois restants
      timeLeft = {
        months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
        // Calcul du nombre de jours restants
        days: Math.floor(difference / (1000 * 60 * 60 * 24)) % 30,
        // Calcul du nombre d'heures restantes
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        // Calcul du nombre de minutes restantes
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };

      if (difference < 60000) {
        timeLeft.seconds = 0;
      }
    }

    return timeLeft;
  };

  // État local pour stocker le temps restant
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Effet pour mettre à jour le temps restant toutes les secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Tableau pour stocker les composants du compte à rebours
  const timerComponents = [];

  // Parcourir les clés du temps restant et construire les composants du compte à rebours
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]&& interval !== "seconds") {
      return;
    }

    timerComponents.push(
<div className="countdown_block_item" key={interval}>
        <div className="countdown_block_item_number">
        {interval === "seconds" ? timeLeft[interval].toString().padStart(1, '0') : timeLeft[interval]} {/*Verif des secondes pour rendu même lorsque la valeur est a zéro*/}
        </div>  
        <div className="countdown_block_item_label">{interval}</div>
      </div>
    );
  });

  // Rendu du composant de compte à rebours
           // Verif des secondes pour rendu même lorsque la valeur est a zéro
  return (
    <section className="countdown">
      <img className="countdown_image" src={countdown_bckground} alt='ChateauValery'></img>
      {" "}
      <div className="countdown_block">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Le compte à rebours est terminé !</span>
        )}
      </div>
    </section>
  );
}

export default CountdownTimer;
