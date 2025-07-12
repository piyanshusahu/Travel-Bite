// // // import React, { useState } from 'react';
// // // import { ChatDeepSeek } from "@langchain/deepseek";

// // // function AnswerModel({question}) {
// // //     const API_Key="sk-ea6e1b98d6e84a10bf1a44796b44167f";
// // //     const [answer,setAnswer]=useState("");
// // //     const llm = new ChatDeepSeek({
// // //         model: "deepseek-reasoner",
// // //         temperature: 0.7,
// // //         max_tokens: 2048,
// // //         top_p: 0.9,
// // //         stop: ["\nHuman:"],
// // //         streaming: false,
// // //         apiKey: API_Key,
// // //       });
// // //       let getAnswer=async ()=>{
// // //         setAnswer(await llm.invoke(question));
// // //       }
// // //     return (
// // //         <div className="answer">
// // //             Your answer:
// // //             {getAnswer}
// // //         </div>
// // //      );
// // // }

// // // export default AnswerModel;

// // import React, { useState, useEffect } from 'react';
// // import { ChatDeepSeek } from "@langchain/deepseek";

// // function AnswerModel({ question }) {
// //   const [answer, setAnswer] = useState("");

// //   useEffect(() => {
// //     const fetchAnswer = async () => {
// //       const llm = new ChatDeepSeek({
// //         model: "deepseek-reasoner",
// //         temperature: 0.7,
// //         max_tokens: 2048,
// //         top_p: 0.9,
// //         stop: ["\nHuman:"],
// //         streaming: false,
// //         apiKey: "sk-ea6e1b98d6e84a10bf1a44796b44167f", // ⛔ Don't expose keys like this in production!
// //       });

// //       try {
// //         const res = await llm.invoke(question);
// //         setAnswer(res);
// //       } catch (err) {
// //         setAnswer("Something went wrong.");
// //         console.error("Error fetching answer:", err);
// //       }
// //     };

// //     if (question) {
// //       fetchAnswer();
// //     }
// //   }, [question]);

// //   return (
// //     <div className="answer">
// //       <strong>Your answer:</strong>
// //       <p>{answer}</p>
// //     </div>
// //   );
// // }

// // export default AnswerModel;
// import React, { useState, useEffect } from "react";
// import { ChatDeepSeek } from "@langchain/deepseek";

// function AnswerModel({ question }) {
//   const [answer, setAnswer] = useState("");

//   useEffect(() => {
//     const fetchAnswer = async () => {
//       console.log("Invoking DeepSeek with question:", question);

//       const llm = new ChatDeepSeek({
//         model: "deepseek-reasoner",
//         temperature: 0.7,
//         max_tokens: 2048,
//         top_p: 0.9,
//         stop: ["\nHuman:"],
//         streaming: false,
//         apiKey: "sk-ea6e1b98d6e84a10bf1a44796b44167f",
//       });

//       try {
//         const res = await llm.invoke(question);
//         console.log("LLM Response:", res);
//         setAnswer(res);
//         //console.log(llm.invoke("What is the capital of France?"));
//       } catch (err) {
//         console.error("Error getting response:", err);
//         setAnswer("Error occurred while generating the answer.");
//       }
//     };

//     if (question) {
//       fetchAnswer();
//     }
//   }, [question]);
//   return (
//     <div className="answer">
//       <strong>Your answer:</strong>
//       {/* <p>{answer || "Thinking..."}</p> */}
//     </div>
//   );
// }

// export default AnswerModel;


import React, { useState, useEffect } from "react";
import { FakeListChatModel } from "@langchain/core/utils/testing";
import { HumanMessage } from "@langchain/core/messages";

function AnswerModel({ question }) {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const fetchFakeAnswer = async () => {
      const fakeChat = new FakeListChatModel({
        responses: [
          "I'll callback later.",
          "You 'console' them!",
          "Because Oct 31 equals Dec 25",
        ],
      });

      try {
        const response = await fakeChat.invoke([
          new HumanMessage(question),
        ]);
        console.log("Fake response:", response);
        setAnswer(response.content);
      } catch (err) {
        console.error("Error in FakeChat:", err);
        setAnswer("Error occurred while generating the fake answer.");
      }
    };

    if (question) {
      fetchFakeAnswer();
    }
  }, [question]);

  return (
    <div className="answer">
      <strong>Your answer:</strong>
      <p>{answer || "Thinking..."}</p>
    </div>
  );
}

export default AnswerModel;
