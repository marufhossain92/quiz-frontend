import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import Timer from "./Timer";

const Quiz = () => {
  const questions = [
    {
      id: 1,
      questionText: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      correctOptionIndex: "2",
    },
    {
      id: 2,
      questionText: "2+4?",
      options: ["5", "10", "6", "None of these"],
      correctOptionIndex: "3",
    },
    {
      id: 3,
      questionText: "10/2?",
      options: ["3", "5", "7", "None of these"],
      correctOptionIndex: "2",
    },
    // Add more questions as needed
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalTime = 100;

  const navigate = useNavigate();

  const totalQuestions = questions.length;

  const handleNextQuestion = () => {
    const nextQuestionId = questions[currentQuestion + 1]?.id;
    if (nextQuestionId !== undefined) {
      // Move to the next question if available
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      navigate(`/question/${nextQuestionId}`);
    } else {
      navigate(`/result`);
    }
  };

  return (
    <>
      <p>
        Question {currentQuestion + 1} of {totalQuestions}
      </p>
      <Timer totalTime={totalTime} />
      <Question
        question={questions[currentQuestion].questionText}
        options={questions[currentQuestion].options}
      />

      <button onClick={handleNextQuestion}>Next</button>
    </>
  );
};

export default Quiz;
