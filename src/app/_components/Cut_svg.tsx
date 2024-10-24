import { cn } from "@/lib/utils";
import React from "react";

function Cut_svg({
    variant = "bowl",
    className,
    zIndex = "inherit",
    ...props
}: {
    className?: string;
    zIndex?: number | "inherit";
    variant?: "bowl" | "cap";
}) {
    function path(variant: string) {
        switch (variant) {
            case "cap":
                return "M 1440,30 C 1440,30 1151.0782,0.5 720,0.5 288.92552,0.5 0,30 0,30 V 0 h 1440 z";
            default:
                return "M 1440,0 C 1440,0 1151.0782,30 720,30 288.92552,30 0,0 0,0 v 30 h 1440 z";
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
            <title>Cut_svg</title>
            <path id="path-cap" d={path(variant)} fill="currentColor" />
        </svg>
    );
}

export default Cut_svg;
