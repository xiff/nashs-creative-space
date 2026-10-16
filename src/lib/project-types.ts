export const projectTypes = [
  "Identité visuelle / Logo",
  "Affiche / Événement",
  "Illustration",
  "Merch / Produit",
  "Autre",
] as const;

export type ProjectType = (typeof projectTypes)[number];