import { all } from "axios";
import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import AnswerModel from "./AnswerModel";

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [allQuestions, setAllQuestions] = useState([]);
  const [submit, setSubmit] = useState(false);
  const[getAnswer,setGetAnswer]=useState(false);

  return (
    <>
      <div
        style={{
          marginLeft: "60%",
          display: "flex",
          flexWrap: "wrap",
        }}
        className="displayQuestions"
      >
        <p
          style={{
            backgroundColor: "white",
            borderRadius: "1rem",
            paddingLeft: "2%",
            paddingRight: "2%",
          }}
        >
          {allQuestions[allQuestions.length - 1]}
        </p>
        {getAnswer && <div className="answer">
            <AnswerModel question={question} />
        </div>}
      </div>
      <div className="chatbot" style={{ marginBottom: "5%" }}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            height: "7vh",
            width: "50vw",
            marginLeft: "25%",
            borderRadius: "2rem",
            padding: "0.7rem",
          }}
          placeholder="Enter your question"
        ></input>
        <br />
        <button
          onClick={() => {
            setAllQuestions([...allQuestions, question]);
            setQuestion("");
            setGetAnswer(true)
          }}
          style={{ marginLeft: "48%" }}
        >
          Submit
        </button>

      </div>
    </>
  );
}

export default ChatBot;
