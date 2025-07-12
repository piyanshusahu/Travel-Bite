import express from "express";
import cors from "cors"
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatDeepSeek } from "@langchain/deepseek";

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());

// const llm = new ChatDeepSeek({
//   apiKey: process.env.DEEPSEEK_API_KEY, // or your key here
//   model: "deepseek-chat",               // or another model
// });

async function findAnswer(question) {
  // const prompt = ChatPromptTemplate.fromMessages([
  //   ["system", "You are a helpful assistant that gives answers only related to the trips"],
  //   ["human", "{input}"],
  // ]);

  // const chain = prompt.pipe(llm);
  // const response = await chain.invoke({ input: question });

  // return response.content;

  return "This is a response!"
}

app.post("/ask", async (req, res) => {
  const question = req.body.query;
  console.log("Query:", question);

  try {
    const answer = await findAnswer(question);
    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate answer" });
  }
});

app.listen(PORT, () => {
  console.log(`Chatbot server running on http://localhost:${PORT}`);
});
