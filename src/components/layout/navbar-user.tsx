"use client";

import { ChevronDown, LogOut, Palette, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { ThemeSelector } from "../ThemeSelecctor";
import { useAuth } from "@/src/hooks";
import { NavbarUserSkeleton } from "./navbar-user-skeleton";

export function NavbarUser() {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return <NavbarUserSkeleton />;
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto gap-3 rounded-xl px-2 py-2">
          <Avatar className="h-9 w-9">
            {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
            <AvatarFallback>
              {user.name?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>

          <div className="hidden text-left md:block">
            <p className="text-sm font-medium leading-none">{user.name}</p>

            <p className="text-xs text-muted-foreground">{user.role}</p>
          </div>

          <ChevronDown className="hidden h-4 w-4 text-muted-foreground md:block" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel>
          <div className="space-y-1">
            <p className="font-medium">{user.name}</p>

            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>User</DropdownMenuLabel>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            Perfil
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Configuración
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuLabel>View</DropdownMenuLabel>
          <DropdownMenuSubTrigger>
            <Palette className="mr-2 h-4 w-4" />
            Tema
          </DropdownMenuSubTrigger>

          <DropdownMenuSubContent>
            <ThemeSelector embedded />
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
