import React from 'react';
import { ChatOpenAI } from "@langchain/openai";

function AnswerModel({question}) {
    const llm = new ChatOpenAI({
        model: "gpt-4o",
        temperature: 0,
        // other params...
      });
      const answer=llm.invoke(question);
    return ( 
        <div className="answer">
            {answer}
        </div>
     );
}

export default AnswerModel;