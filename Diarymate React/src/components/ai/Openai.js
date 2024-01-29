import OpenAI from "openai";

const openai = new OpenAI({apiKey: "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" ,dangerouslyAllowBrowser: true });

export async function sendMsgToOpenAI(message) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: message }],
    model: "gpt-3.5-turbo",
  });

  //console.log("CHAT CEVAP : ",completion.choices[0]);

  return completion.choices[0];
}
