
import OpenAI from 'openai';

const OPENAI_API_KEY = "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";

export const getChatResponse = async (message: string) => {
  try {
    const openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
      dangerouslyAllowBrowser: true // Note: In production, use server-side API calls
    });

    const enhancedPrompt = `
      You are an intelligent and helpful assistant. Please answer the following question with detailed and accurate information, providing practical examples when necessary:

      ${message}
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that provides accurate, informative responses."
        },
        {
          role: "user",
          content: enhancedPrompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });
    
    if (!response.choices[0].message.content) {
      throw new Error("We couldn't get a response from the service");
    }
    
    return response.choices[0].message.content;
  } catch (error: any) {
    console.error("Error getting AI response:", error);
    
    // Improved error message for the user
    const errorMessage = error.message || "Sorry, an error occurred while processing your request. Please try again.";
    throw new Error(errorMessage);
  }
};
