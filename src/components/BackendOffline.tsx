"use client";

import { CookingPot } from "lucide-react";

export function BackendOffline() {
  return (
    <main className="grid min-h-full place-items-center bg-zinc-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Icono de cocina / olla */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-500/10 ring-1 ring-amber-500/20">
          <CookingPot className="text-amber-400 h-12 w-12" />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-amber-400">
          Servicio no disponible
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          La cocina está cerrada
        </h1>

        <p className="mt-6 text-lg text-zinc-400 max-w-md mx-auto">
          No pudimos conectar con el servidor de{" "}
          <span className="font-semibold text-amber-400">PosCocina</span>. Puede
          que estemos realizando mantenimiento o haya un problema de conexión.
        </p>

        {/* Estado visual tipo "ticket" */}
        <div className="mt-8 mx-auto max-w-xs rounded-lg border border-zinc-700 bg-zinc-800/60 p-4 text-left">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Servidor fuera de línea
          </div>
          <div className="mt-2 border-t border-zinc-700 pt-2 text-xs text-zinc-500 font-mono">
            poscocina · sistema pos
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors cursor-pointer"
          >
            Reintentar conexión
          </button>
          <a
            href="mailto:soporte@poscocina.com"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Contactar soporte <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
