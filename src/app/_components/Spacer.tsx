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
                <div>
                    <Bulge_svg variant="top" />
                    <Cut_svg variant="cap" />
                </div>
            );
        case "cap-neg":
            return (
                <div>
                    <Cut_svg variant="cap" />
                    <Bulge_svg variant="top" />
                </div>
            );
        case "bowl-neg":
            return (
                <div>
                    <Bulge_svg variant="bot" />
                    <Cut_svg variant="bowl" />
                </div>
            );
        case "bowl":
            return (
                <div>
                    <Cut_svg variant="bowl" />
                    <Bulge_svg variant="bot" />
                </div>
            );
    }
}

export default Spacer;
