import React, { useState, useEffect } from "react";

const Quiz = ({ quizData }) => {
  // Déclaration des états avec useState
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Index de la question actuelle
  const [selectedAnswers, setSelectedAnswers] = useState([]); // Réponses sélectionnées par l'utilisateur
  const [score, setScore] = useState(0); // Score de l'utilisateur
  const [timer, setTimer] = useState(10); // Temps restant pour répondre à la question
  const [timerRunning, setTimerRunning] = useState(false); // Indique si le timer est en cours
  const [quizStarted, setQuizStarted] = useState(false); // Indique si le quiz a commencé
  const { questions, appLocale } = quizData; // Extraction des données du quiz

  // Sélection de la question actuelle
  const currentQuestion = questions[currentQuestionIndex];

  // Fonction pour gérer la sélection d'une réponse par l'utilisateur
  const handleAnswerSelection = (answerIndex) => {
    // Vérifier le type de sélection de réponse
    if (currentQuestion.answerSelectionType === "single") {
      setSelectedAnswers([answerIndex]); // Pour les réponses uniques, remplacer la sélection
    } else if (currentQuestion.answerSelectionType === "multiple") {
      // Pour les réponses multiples, ajouter ou supprimer la sélection
      if (selectedAnswers.includes(answerIndex)) {
        setSelectedAnswers(
          selectedAnswers.filter((index) => index !== answerIndex)
        );
      } else {
        setSelectedAnswers([...selectedAnswers, answerIndex]);
      }
    }
  };

  // Fonction pour gérer une réponse incorrecte
  const handleIncorrectAnswer = () => {
    setSelectedAnswers([]);
    setTimerRunning(false);
    setTimer(10);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      checkAnswer();
      setTimerRunning(true); // Démarrer le timer pour la nouvelle question
    } else {
      checkAnswer();
      setQuizStarted(false);
    }
  };

  // Fonction pour passer à la prochaine question
  const handleNextQuestion = () => {
    if (selectedAnswers.length === 0) {
      // Si aucune réponse n'est sélectionnée, gérer comme une réponse incorrecte
      handleIncorrectAnswer();
    } else {
      checkAnswer(); // Vérifier la réponse sélectionnée
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1); // Passer à la prochaine question

    if (currentQuestionIndex === questions.length - 1) {
      // Si c'est la dernière question, arrêter le quiz et le timer
      setQuizStarted(false);
      setTimerRunning(false);
    }
  };

  // Fonction pour vérifier la réponse sélectionnée
  const checkAnswer = () => {
    // Récupérer les réponses correctes
    let correctAnswers = [];
    if (Array.isArray(currentQuestion.correctAnswer)) {
      correctAnswers = currentQuestion.correctAnswer.map((answer) =>
        parseInt(answer)
      );
    } else {
      correctAnswers = [parseInt(currentQuestion.correctAnswer)];
    }

    console.log("Correct Answers:", correctAnswers);
    console.log("Selected Answers:", selectedAnswers);

    // Vérifier si la réponse est correcte en fonction du type de sélection de réponse
    let isCorrect = false;
    if (currentQuestion.answerSelectionType === "single") {
      isCorrect =
        selectedAnswers.length === 1 &&
        selectedAnswers[0] === correctAnswers[0];
    } else if (currentQuestion.answerSelectionType === "multiple") {
      isCorrect = arraysEqual(
        selectedAnswers.map((answer) => parseInt(answer)).sort(),
        correctAnswers.sort()
      );
    }

    console.log("Is Correct:", isCorrect);

    if (isCorrect) {
      // Si la réponse est correcte, incrémenter le score
      console.log("Is Correct: true");
      setScore(score + 1);
    } else {
      // Si la réponse est incorrecte
      console.log("Is Correct: false");
    }

    // Réinitialiser les réponses sélectionnées
    setSelectedAnswers([]);

    // Passer à la prochaine question ou terminer le quiz si c'est la dernière question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizStarted(false);
    }

    // Réinitialiser le timer et démarrer le timer pour la prochaine question
    setTimer(10);
    setTimerRunning(true);
  };

  // Fonction pour comparer deux tableaux
  const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  // Effet pour gérer le timer
  useEffect(() => {
    let intervalId;
    if (timerRunning) {
      intervalId = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          clearInterval(intervalId);
          handleIncorrectAnswer(); // Si le temps est écoulé, gérer comme une réponse incorrecte
          console.log();
        }
      }, 1000);
    }
    return () => clearInterval(intervalId); // Nettoyage de l'intervalle à la désactivation de l'effet
  });

  // Fonction pour démarrer le quiz
  const handleStartQuiz = () => {
    setQuizStarted(true);
    setTimerRunning(true);
  };

  return (
    <div className="quizContainer">
      {!quizStarted && (
        <div>
          <h1>{quizData.quizTitle}</h1>
          <p>{quizData.quizSynopsis}</p>
          <button onClick={handleStartQuiz}>{appLocale.startQuizBtn}</button>
        </div>
      )}
      {quizStarted && currentQuestionIndex < questions.length && (
        <div>
          <h2>
            {appLocale.question} {currentQuestionIndex + 1}
          </h2>
          <div className="wrapper_timer">
            <span className="timer">{timer}</span>
            <div className="wrapper_loader">
              <div class="loader">
                <svg viewBox="0 0 80 80">
                  <circle id="test" cx="40" cy="40" r="32"></circle>
                </svg>
              </div>

              <div class="loader triangle">
                <svg viewBox="0 0 86 80">
                  <polygon points="43 8 79 72 7 72"></polygon>
                </svg>
              </div>

              <div class="loader">
                <svg viewBox="0 0 80 80">
                  <rect x="8" y="8" width="64" height="64"></rect>
                </svg>
              </div>
            </div>
          </div>
          <p>{currentQuestion.question}</p>
          {currentQuestion.answers.map((answer, index) => (
            <div key={index}>
              <input
                type={
                  currentQuestion.answerSelectionType === "single"
                    ? "radio"
                    : "checkbox"
                }
                id={`answer_${index}`}
                checked={selectedAnswers.includes(index)}
                onChange={() => handleAnswerSelection(index)}
              />
              <label htmlFor={`answer_${index}`}>{answer}</label>
            </div>
          ))}
          <button onClick={handleNextQuestion}>
            {appLocale.nextQuestionBtn}
          </button>
        </div>
      )}
      {currentQuestionIndex === questions.length && (
        <div>
          <h2>
            {appLocale.resultPageHeaderText
              .replace("<correctIndexLength>", score)
              .replace("<questionLength>", questions.length)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
