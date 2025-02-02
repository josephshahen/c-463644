import { GoogleGenerativeAI } from "@google/generative-ai";

export const getChatResponse = async (message: string) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("الرجاء إدخال مفتاح Gemini API");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    // تحسين نص الطلب لتوجيه النموذج نحو إجابات أكثر ذكاءً
    const enhancedPrompt = `
      أنت مساعد ذكي ومفيد. يرجى الإجابة على السؤال التالي بشكل مفصل ودقيق، مع تقديم أمثلة عملية عند الحاجة:

      ${message}
    `;

    const result = await model.generateContent(enhancedPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("خطأ في الحصول على رد AI:", error);
    throw new Error("عذراً، حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى.");
  }
};