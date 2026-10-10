"use client";

import { useEffect } from "react";

// Feeds the cursor position to whichever .surface card is hovered; the glow itself is CSS (globals.css).
export default function Spotlight() {
    useEffect(() => {
        if (!window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;

        function onMove(event: PointerEvent) {
            const card = (event.target as Element).closest<HTMLElement>(".surface");
            if (!card) return;
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
            card.style.setProperty("--my", `${event.clientY - rect.top}px`);
        }

        document.addEventListener("pointermove", onMove, { passive: true });
        return () => document.removeEventListener("pointermove", onMove);
    }, []);

    return null;
}
