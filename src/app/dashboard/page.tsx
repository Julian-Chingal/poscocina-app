import ModuleGrid from "@/src/components/ModuleGrid";
import { Box, ChartBar, User, Cog } from "lucide-react";

export default function HomePage() {
  const modules = [
    {
      id: 1,
      name: "Usuarios",
      icon: User,
      href: "/users",
      color: "bg-accent",
    },
    {
      id: 2,
      name: "Inventario",
      icon: Box,
      href: "/inventory",
      color: "bg-info",
    },
    {
      id: 3,
      name: "Reportes",
      icon: ChartBar,
      href: "/reports",
      color: "bg-secondary",
    },
    {
      id: 4,
      name: "Configuracion",
      icon: Cog,
      href: "/reports",
      color: "bg-secondary-foreground",
    },
  ];

  return (
    <div className="min-h-screen space-y-8 p-6">
      <section className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Bienvenido</h1>
        <p className="text-muted-foreground">
          Selecciona un módulo para comenzar a trabajar.
        </p>
      </section>

      <ModuleGrid modules={modules} />
    </div>
  );
}
