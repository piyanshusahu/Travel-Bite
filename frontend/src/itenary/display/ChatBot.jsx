import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [responses, setResponses] = useState([]);
  const bottomRef = useRef(null);

  const handleQuestion = async () => {
    if (question.trim() === "") return;

    setResponses((prev) => [...prev, question]);

    try {
      const res = await fetch("http://localhost:3003/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: question }),
      });
      const data = await res.json();
      setResponses((prev) => [...prev, data.answer]);
    } catch (e) {
      setResponses((prev) => [
        ...prev,
        "Network issues being faced. Please make sure you are connected to a stable internet connection",
      ]);
    }

    setQuestion("");
  };

  // Auto-scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [responses]);

  return (
    <div
      className="chatContainer"
      style={{
        height: "600px",
        width: "800px",
        border: "1px solid #ccc",
        margin: "3% auto",
        borderRadius: "10px",
        position: "relative",
        backgroundColor: "#f0f2f5",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "70px",
      }}
    >
      {/* Messages */}
      <div
        className="questionAndAnswers"
        style={{
          overflowY: "auto",
          flexGrow: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {responses.map((res, index) => {
          const isUser = index % 2 === 0;
          const isNetworkError =
            res ===
            "Network issues being faced. Please make sure you are connected to a stable internet connection";

          return (
            <div
              key={index}
              style={{
                alignSelf: isNetworkError
                  ? "flex-start"
                  : isUser
                  ? "flex-end"
                  : "flex-start",
                maxWidth: "60%",
                padding: "10px 15px",
                borderRadius: "20px",
                backgroundColor: isNetworkError
                  ? "#ffe5e5"
                  : isUser
                  ? "#0b93f6"
                  : "#e5e5ea",
                color: isNetworkError ? "red" : isUser ? "white" : "black",
                fontSize: "16px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {res}
            </div>
          );
        })}

        <div ref={bottomRef}></div>
      </div>

      {/* Fixed Input Area */}
      <div
        className="enterQuestions"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          borderTop: "1px solid #ccc",
          backgroundColor: "white",
        }}
      >
        <input
          style={{
            flex: 1,
            padding: "10px 15px",
            fontSize: "16px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            outline: "none",
          }}
          placeholder="Enter your Query..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleQuestion()}
        />
        <Button
          variant="contained"
          onClick={handleQuestion}
          style={{
            marginLeft: "10px",
            height: "40px",
            borderRadius: "20px",
            padding: "0 20px",
          }}
        >
          Ask
        </Button>
      </div>
    </div>
  );
}

export default ChatBot;
