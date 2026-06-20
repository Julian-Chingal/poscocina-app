import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Bienvenido</h1>

        <p className="mt-2 text-muted-foreground">
          Selecciona un módulo para comenzar a trabajar.
        </p>
      </section>

      <Card>
        <CardContent className="flex h-60 items-center justify-center">
          <p className="text-muted-foreground">
            Aquí aparecerán los módulos del sistema.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
