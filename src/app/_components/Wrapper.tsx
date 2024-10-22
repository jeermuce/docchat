import { cn } from "@/lib/utils";
import type React from "react";

function Wrapper({
    children,
    className,
    ...props
}: { children?: React.ReactNode; className?: string }) {
    return (
        <div className={cn(className, "content-grid")} {...props}>
            {children}
        </div>
    );
}

export default Wrapper;
