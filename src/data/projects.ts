export type Project = {
  title: string;
  summary: string;
  stack: string[];
  link: string;
  highlight?: boolean;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "GRADAR NIDS",
    summary:
      "Experimental network intrusion detection prototype exploring gradient-based anomaly scoring on Zeek flow data.",
    stack: ["Python", "Pandas", "scikit-learn"],
    link: "https://github.com/RedFlame2112/GRADAR-NIDS",
    highlight: true,
    status: "Research"
  },
  {
    title: "Depth-aware Neural Style Transfer",
    summary:
      "CS445 final project: MiDaS v3 depth + VGG19 style transfer with depth-dependent masks, per-layer stylization strengths, and normalized alpha blending for foreground/midground/background.",
    stack: ["Python", "PyTorch", "MiDaS", "VGG19"],
    link: "https://github.com/RedFlame2112/CS445_FinalProject",
    highlight: true,
    status: "Research"
  },
  {
    title: "dupedbyte.dev",
    summary:
      "This Astro + Tailwind site, tuned for speed on Cloudflare Pages with Markdown-driven content and Pagefind search.",
    stack: ["Astro", "Tailwind CSS", "Pagefind"],
    link: "/",
    status: "In progress"
  }
];
