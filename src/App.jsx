import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartQuizButton from "./components/StartQuizButton";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {
  return (
    <Router>
      <h2>Quiz App</h2>
      <Routes>
        <Route path="/" element={<StartQuizButton />} />
        <Route path="/question/:id" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
