import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = "AIzaSyC6UjjDG1ACQV6aN7_Ab3CNGUDzaHY1LfI";

export const getChatResponse = async (message: string) => {
  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const enhancedPrompt = `
      أنت مساعد ذكي ومفيد. يرجى الإجابة على السؤال التالي بشكل مفصل ودقيق، مع تقديم أمثلة عملية عند الحاجة:

      ${message}
    `;

    const result = await model.generateContent(enhancedPrompt);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("خطأ في الحصول على رد AI:", error);
    throw new Error(error.message || "عذراً، حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى.");
  }
};