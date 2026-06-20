"use client";

import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavbarNotifications() {
  const unread = 3;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative rounded-xl">
          <Bell className="h-5 w-5" />

          {unread > 0 && (
            <Badge
              className="absolute -right-1 -top-1 h-5 min-w-5 rounded-full px-1"
              variant="destructive"
            >
              {unread > 99 ? "99+" : unread}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Traer info desde back */}
        <div className="space-y-3 p-3">
          <p className="text-sm font-medium">Nuevo pedido recibido</p>

          <p className="text-xs text-muted-foreground">
            Mesa 12 solicitó un nuevo pedido.
          </p>

          <DropdownMenuSeparator />

          <p className="text-sm font-medium">Caja cerrada correctamente</p>

          <p className="text-xs text-muted-foreground">Hace 10 minutos.</p>

          <DropdownMenuSeparator />

          <Button variant="outline" className="w-full">
            Ver todas
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
