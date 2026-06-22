import ModuleGrid from "@/src/components/ModuleGrid";
import { Box, ChartBar, User, Cog } from "lucide-react";

export default function HomePage() {
  const modules = [
    {
      id: 1,
      name: "Usuarios",
      tooltip: "Modulo Usuarios",
      icon: User,
      href: "/users",
    },
    {
      id: 2,
      name: "Inventario",
      tooltip: "Modulo Inventario",
      icon: Box,
      href: "/inventory",
    },
    {
      id: 3,
      name: "Reportes",
      tooltip: "Modulo Reportes",
      icon: ChartBar,
      href: "/reports",
    },
    {
      id: 4,
      name: "Configuracion",
      tooltip: "Modulo Configuracion",
      icon: Cog,
      href: "/reports",
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
