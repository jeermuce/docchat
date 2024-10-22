import { cn } from "@/lib/utils";
import type React from "react";

function Cut({
    children,
    className,
    zIndex = 1,
    ...props
}: { children?: React.ReactNode; className?: string; zIndex?: number }) {
    return (
        <div
            className={cn(
                className,
                "h-8  w-[100%] all max-w-[100%] min-w-[100%] rounded-ellipse -my-2  rounded-t-none",
            )}
            style={{ zIndex: zIndex }}
        />
    );
}

export default Cut;
