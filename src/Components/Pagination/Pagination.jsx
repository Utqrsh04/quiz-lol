import React from "react";

const Pagination = ({ currentQues, changeQues }) => {
  const nextQuest = () => {
    changeQues(currentQues + 1);
  };

  const PrevQuest = () => {
    changeQues(currentQues - 1);
  };
  return (
    <div>
      <div className="paginationButtonWrapper">
        <button
          disabled={currentQues === 1}
          className="paginationButtons"
          onClick={PrevQuest}
        >
          Prev{" "}
        </button>
        <br />
        <br />
        <button
          disabled={currentQues === 5}
          className="paginationButtons"
          onClick={nextQuest}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
