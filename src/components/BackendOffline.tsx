"use client";

import { CookingPot, Mail, RefreshCcw } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function BackendOffline() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-background p-4 md:p-10">
      <Card className="w-full max-w-lg border-none bg-transparent shadow-none md:border-solid md:bg-card md:shadow-sm">
        <CardHeader className="items-center justify-center pb-6 text-center">
          <CookingPot className="mx-auto mb-2 h-16 w-16 text-primary " />
          <h1>Servicio no disponible</h1>
          <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            La cocina está cerrada
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-8 text-center">
          <CardDescription className="mx-auto max-w-md text-base">
            No pudimos conectar con el servidor de{" "}
            <span className="font-semibold text-foreground">PosCocina</span>.
            Puede que estemos realizando mantenimiento o haya un problema de
            conexión.
          </CardDescription>

          <div className="mx-auto max-w-xs rounded-lg border bg-muted/50 p-4 text-left shadow-sm">
            <div className="flex items-center gap-3 text-sm font-medium text-foreground">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-destructive" />
              </span>
              Servidor fuera de línea
            </div>
            <div className="mt-3 border-t pt-2 font-mono text-xs text-muted-foreground">
              poscocina · sistema pos
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4">
          <Button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto"
            size="lg"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Reintentar conexión
          </Button>

          <Button
            asChild
            variant="ghost"
            className="w-full text-muted-foreground hover:text-foreground sm:w-auto"
            size="lg"
          >
            <a href="mailto:soporte@poscocina.com">
              <Mail className="mr-2 h-4 w-4" />
              Contactar soporte
            </a>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
