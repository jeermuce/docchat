import { cn } from "@/lib/utils";
import type React from "react";

function Main({
    children,
    className,
    zIndex = 1,
    ...props
}: { children?: React.ReactNode; className?: string; zIndex?: number }) {
    return (
        <main
            style={{ zIndex: zIndex }}
            {...props}
            className={cn(className, "content-grid relative")}
        >
            {children}
        </main>
    );
}

export default Main;
