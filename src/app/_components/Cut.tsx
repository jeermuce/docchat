import { cn } from "@/lib/utils";
import type React from "react";

function Cut({
    children,
    className,
    zIndex = 1,
    width = "all",
    ...props
}: {
    children?: React.ReactNode;
    className?: string;
    zIndex?: number;
    width?: "all" | "big" | "mid";
}) {
    return (
        <div
            {...props}
            className={cn(
                className,
                "h-8  w-[100%]  max-w-[100%] min-w-[100%] rounded-ellipse -my-2  rounded-t-none",
                width,
            )}
            style={{ zIndex: zIndex }}
        />
    );
}

export default Cut;
