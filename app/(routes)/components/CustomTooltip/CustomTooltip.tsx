import { Info } from "lucide-react";
import { CustomTooltipProps } from "./CustomTooltip.types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Customtooltip(props: CustomTooltipProps) {
  const { content } = props;
  return (
    <Tooltip>
      <TooltipTrigger>
        <Info strokeWidth={1} className="w-5 h-5" />
      </TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  );
}
