export const ThemeLabels: Record<string, string> = {
  pastel: "🌸 Pastel",
  cupcake: "🧁 Cupcake",
  corporate: "⚙️ Corporate",
  forest: "🌿 Forest",
  dracula: "🦇 Dracula",
};

export const THEMES = [
  "pastel", 
  "cupcake",
  "corporate", 
  "forest", 
  "dracula", 
] as const;
export type Theme = (typeof THEMES)[number];