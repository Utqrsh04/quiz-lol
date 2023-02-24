import React from "react";

const Question = ({ questionData }) => {
  return (
    <div>
      <h3>Question No : {questionData?.id}</h3>
      <h5>{questionData.ques}</h5>
      <div>
        
      </div>
    </div>
  );
};

export default Question;
