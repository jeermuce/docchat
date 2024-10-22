import { cn } from "@/lib/utils";
import type React from "react";

function Main({
    children,
    className,
    ...props
}: { children?: React.ReactNode; className?: string }) {
    return (
        <main {...props} className={cn(className, "content-grid")}>
            {children}
        </main>
    );
}

export default Main;
