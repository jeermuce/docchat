import { cn } from "@/lib/utils";
import type React from "react";

function Wrapper({
    children,
    className,

    zIndex = 1,
    ...props
}: { children?: React.ReactNode; zIndex?: number; className?: string }) {
    return (
        <div
            style={{ zIndex: zIndex }}
            className={cn(className, "content-grid")}
            {...props}
        >
            {children}
        </div>
    );
}

export default Wrapper;
