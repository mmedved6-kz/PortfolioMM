import { ogSize, renderOg } from "@/lib/og";

export const alt = "Medet Murzakhanov - Software Engineer";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOg({
    eyebrow: "Software Engineer",
    title: "I build practical full-stack products.",
    subtitle: "Projects, case studies and writing by Medet Murzakhanov.",
  });
}
