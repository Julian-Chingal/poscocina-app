import { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export type ModuleItem = {
  id: string | number;
  name: string;
  tooltip: string;
  icon: LucideIcon;
  href: string;
};

type Props = {
  modules: ModuleItem[];
};

export default function ModuleGrid({ modules }: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4">
      {modules.map((mod) => {
        const Icon = mod.icon;

        return (
          <div key={mod.id} className="flex flex-col items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={mod.href}
                  className="group relative w-full max-w-30 aspect-square rounded-2xl shadow-sm hover:shadow-md active:scale-95 transition flex items-center justify-center bg-base-300"
                >
                  <Icon className="w-12 h-12" />
                </Link>
              </TooltipTrigger>

              <TooltipContent side="top">{mod.tooltip}</TooltipContent>
            </Tooltip>

            <span className="mt-2 text-xs text-center font-medium">
              {mod.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
