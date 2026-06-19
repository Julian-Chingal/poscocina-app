"use client";

import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";
import { ThemeLabels } from "@/config/themeConfig";

export function ThemeSelector() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-md"
          >
            <Palette className="h-5 w-5" />
            <span className="sr-only">Cambiar tema</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {themes.map((t) => (
            <DropdownMenuItem
              key={t}
              onClick={() => setTheme(t)}
              className={t === theme ? "font-semibold" : ""}
            >
              {ThemeLabels[t]}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
