import { cn } from "@/lib/utils";
import React from "react";

interface NavProps extends React.HTMLProps<HTMLUListElement> {
    className?: string;
    children?: React.ReactNode;
    variant?: "row" | "col";
    aria?: string;
}

function Nav({
    className,
    children,
    variant = "row",
    aria,
    ...props
}: NavProps) {
    return (
        <nav aria-label={aria} className="">
            <ul
                className={cn(className, "flex", {
                    "flex-row": variant === "row",
                    "flex-col": variant === "col",
                })}
                {...props}
            >
                {React.Children.map(children, (child, index) => (
                    <li
                        key={(child as React.ReactElement).key || index}
                        className="hover:bg-accent hover:text-background  descendants:decoration-0 child:p-2 transition-all ease-in-out duration-100"
                    >
                        {child}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
