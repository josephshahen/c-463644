
import OpenAI from 'openai';

// Instead of hardcoding the API key, we'll create a way for users to input it
let openaiApiKey: string | null = null;

// Function to set the API key
export const setApiKey = (key: string) => {
  openaiApiKey = key;
  localStorage.setItem('openai_api_key', key); // Store key in localStorage
  return true;
};

// Function to get the API key (either from memory or localStorage)
export const getApiKey = (): string | null => {
  if (openaiApiKey) return openaiApiKey;
  
  const storedKey = localStorage.getItem('openai_api_key');
  if (storedKey) {
    openaiApiKey = storedKey;
    return storedKey;
  }
  
  return null;
};

// Function to clear the API key
export const clearApiKey = () => {
  openaiApiKey = null;
  localStorage.removeItem('openai_api_key');
};

export const getChatResponse = async (message: string) => {
  try {
    const apiKey = getApiKey();
    
    if (!apiKey) {
      throw new Error("Please set your OpenAI API key first");
    }
    
    const openai = new OpenAI({
      apiKey: apiKey,
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
