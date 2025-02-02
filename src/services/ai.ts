import { GoogleGenerativeAI } from "@google/generative-ai";
import { supabase } from "@/integrations/supabase/client";

export const getChatResponse = async (message: string) => {
  try {
    // الحصول على مفتاح API من Supabase
    const { data: secrets, error } = await supabase
      .from('secrets')
      .select('value')
      .eq('name', 'GEMINI_API_KEY')
      .single();

    if (error || !secrets?.value) {
      throw new Error("الرجاء إدخال مفتاح Gemini API في إعدادات المشروع");
    }

    const genAI = new GoogleGenerativeAI(secrets.value);
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