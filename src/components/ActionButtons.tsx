import { ImagePlus, FileText, BarChart2, Code, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ActionButtons = () => {
  const { toast } = useToast();
  
  const actions = [
    { icon: <ImagePlus className="h-4 w-4 text-purple-400" />, label: "Create image", action: () => handleAction("image") },
    { icon: <FileText className="h-4 w-4 text-blue-400" />, label: "Summarize text", action: () => handleAction("summarize") },
    { icon: <BarChart2 className="h-4 w-4 text-green-400" />, label: "Analyze data", action: () => handleAction("analyze") },
    { icon: <Code className="h-4 w-4 text-yellow-400" />, label: "Code", action: () => handleAction("code") },
    { icon: <HelpCircle className="h-4 w-4 text-red-400" />, label: "Get advice", action: () => handleAction("advice") },
  ];

  const handleAction = (type: string) => {
    toast({
      title: "Action triggered",
      description: `${type} action was clicked. This is a placeholder response.`,
    });
  };

  return (
    <div className="flex gap-2 flex-wrap justify-center mt-4">
      {actions.map((action) => (
        <button 
          key={action.label} 
          onClick={action.action}
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