import { LucideIcon } from "lucide-react";
import Link from "next/link";

export type ModuleItem = {
  id: string | number;
  name: string;
  icon: LucideIcon;
  href: string;
  color?: string;
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
            <Link
              href={mod.href}
              className={`group relative w-full max-w-30 aspect-square rounded-2xl shadow-sm hover:shadow-md active:scale-95 transition flex items-center justify-center ${mod.color}   `}
            >
              <Icon className="w-12 h-12" />

              {/* Tooltip */}
              <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                <div className="text-xs px-2 py-1 rounded-md whitespace-nowrap bg-accent">
                  {mod.name}
                </div>
                <div className="w-2 h-2 rotate-45 mx-auto -mt-1"></div>
              </div>
            </Link>

            <span className="mt-2 text-xs text-center font-medium">
              {mod.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
