import React, { useState } from "react";
import questions from "../../data/questions";
import Pagination from "../Pagination/Pagination";
import Question from "../Question/Question";

const MainPage = () => {
  const [currentQues, setCurrentQues] = useState(1);

  return (
    <div>
      <h1>Quiz</h1>

      <div>
        {questions.map(
          (e) => currentQues == e.id && <Question key={e.id} questionData={e} />
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <Pagination currentQues={currentQues} changeQues={setCurrentQues} />
    </div>
  );
};

export default MainPage;
