"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function NavbarSearch() {
  return (
    <div className="hidden w-full max-w-md lg:flex">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar productos, pedidos, clientes..."
          className="pl-10"
        />
      </div>
    </div>
  );
}
