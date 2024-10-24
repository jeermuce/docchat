import { cn } from "@/lib/utils";
import React from "react";

function Bulge_svg({
    variant = "top",
    className,
    zIndex = "inherit",
    ...props
}: {
    className?: string;
    zIndex?: number | "inherit";
    variant?: "top" | "bot";
}) {
    function path(variant: string) {
        switch (variant) {
            case "bot":
                return "M 1440,0 C 1440,0 1151.0782,30 720,30 288.92552,30 0,0 0,0 v 0 z";
            default:
                return "M 1440,30 C 1440,30 1151.0782,0 720,0 288.92552,0 0,30 0,30 v 0 z";
        }
    }

    return (
        <svg
            viewBox="0 0 1440 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            className={cn(className, "min-h-2 w-full")}
            style={{ zIndex: zIndex }}
        >
            <title>Bulge</title>
            <path id="path-cap" d={path(variant)} fill="currentColor" />
        </svg>
    );
}

export default Bulge_svg;
