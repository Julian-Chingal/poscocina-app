import Link from "next/link";

import { ChefHat } from "lucide-react";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-80"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-accent shadow-sm">
        <ChefHat className="h-5 w-5" />
      </div>

      <div className="hidden sm:flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight">POS Cocina</span>

        <span className="text-xs text-muted-foreground">
          Sistema de Gestión
        </span>
      </div>
    </Link>
  );
}
