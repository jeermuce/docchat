import { cn } from "@/lib/utils";
import React from "react";

function CurvedSvg({
    variant = "bowl",
    className,
    zIndex = "inherit",
    ...props
}: {
    className?: string;
    zIndex?: number | "inherit";
    variant?: "bowl" | "cap";
}) {
    // Use the passed bgColorClass dynamically

    function path() {
        if (variant === "cap") {
            return (
                <path
                    id="path-cap"
                    d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"
                    fill="currentColor"
                />
            );
        }
        return (
            <path
                id="path-bowl"
                transform="rotate(180) translate(-1440, -60)"
                d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"
                fill="currentColor"
            />
        );
    }

    return (
        <svg
            viewBox="0 0 1440 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            className={cn(className, "min-h-8 w-full")}
            style={{ zIndex: zIndex }}
        >
            <title>CurvedSvg</title>
            {path()}
        </svg>
    );
}

export default CurvedSvg;
