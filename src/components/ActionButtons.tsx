import { ImagePlus, FileText, BarChart2, Code, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ActionButtonsProps = {
  onSend?: (message: string) => void;
};

const ActionButtons = ({ onSend }: ActionButtonsProps) => {
  const { toast } = useToast();
  
  const actions = [
    { 
      icon: <ImagePlus className="h-4 w-4 text-purple-400" />, 
      label: "Create image", 
      message: "يمكنك إنشاء صورة. ما هي الصورة التي تريد إنشاءها؟",
    },
    { 
      icon: <FileText className="h-4 w-4 text-blue-400" />, 
      label: "Summarize text", 
      message: "يمكنني تلخيص النص لك. يرجى مشاركة النص الذي تريد تلخيصه.",
    },
    { 
      icon: <BarChart2 className="h-4 w-4 text-green-400" />, 
      label: "Analyze data", 
      message: "يمكنني تحليل البيانات لك. ما هي البيانات التي تريد تحليلها؟",
    },
    { 
      icon: <Code className="h-4 w-4 text-yellow-400" />, 
      label: "Code", 
      message: "يمكنني مساعدتك في البرمجة. ما هو السؤال البرمجي الذي لديك؟",
    },
    { 
      icon: <HelpCircle className="h-4 w-4 text-red-400" />, 
      label: "Get advice", 
      message: "يمكنني تقديم النصيحة لك. ما هو الموضوع الذي تريد النصيحة فيه؟",
    },
  ];

  const handleAction = (message: string) => {
    if (onSend) {
      onSend(message);
    } else {
      toast({
        title: "تنبيه",
        description: "عذراً، حدث خطأ في معالجة طلبك",
      });
    }
  };

  return (
    <div className="flex gap-2 flex-wrap justify-center mt-4">
      {actions.map((action) => (
        <button 
          key={action.label} 
          onClick={() => handleAction(action.message)}
          className="relative flex h-[42px] items-center gap-1.5 rounded-full border border-[#383737] px-3 py-2 text-start text-[13px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed xl:gap-2 xl:text-[14px]"
        >
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;