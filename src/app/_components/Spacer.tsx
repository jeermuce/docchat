import { cn } from "@/lib/utils";
import React from "react";
import Bulge_svg from "./Bulge_svg";
import Cut_svg from "./Cut_svg";

function Spacer({
    variant,
    className,
    zIndex = "inherit",
    ...props
}: {
    className?: string;
    zIndex?: number | "inherit";
    variant?: "bowl" | "cap" | "bowl-neg" | "cap-neg";
}) {
    switch (variant) {
        default:
            return (
                <div
                    className={cn(className, "content-grid")}
                    style={{ zIndex: zIndex }}
                >
                    <Bulge_svg className="all" variant="top" />
                    <Cut_svg className="all" variant="cap" />
                </div>
            );
        case "cap-neg":
            return (
                <div
                    className={cn(className, "content-grid")}
                    style={{ zIndex: zIndex }}
                >
                    <Cut_svg className="all" variant="cap" />
                    <Bulge_svg className="all" variant="top" />
                </div>
            );
        case "bowl-neg":
            return (
                <div
                    className={cn(className, "content-grid")}
                    style={{ zIndex: zIndex }}
                >
                    <Bulge_svg className="all" variant="bot" />
                    <Cut_svg className="all" variant="bowl" />
                </div>
            );
        case "bowl":
            return (
                <div
                    className={cn(className, "content-grid")}
                    style={{ zIndex: zIndex }}
                >
                    <Cut_svg className="all" variant="bowl" />
                    <Bulge_svg className="all" variant="bot" />
                </div>
            );
    }
}

export default Spacer;
