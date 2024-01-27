import { useParams } from "react-router-dom";

const StartQuizButton = () => {
  const { id } = useParams();
  return (
    <button onClick={() => (window.location.href = `/question/${id || 1}`)}>
      Start Quiz
    </button>
  );
};

export default StartQuizButton;
