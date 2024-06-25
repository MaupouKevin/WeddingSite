import React from "react";
import Quiz from "../../Components/Quizz/Quizz.jsx";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary.jsx";
import quizData from "./QuizData.js";

const Quizz = () => {
  return (
    <ErrorBoundary>
      <Quiz quizData={quizData}/>
    </ErrorBoundary>
  );
};

export default Quizz;
