import { cn, extractClassValue } from "@/lib/utils";
import Link from "next/link";
import type React from "react";
import Nav from "./Nav";
import Spacer from "./Spacer";

function Header({
    className,
    zIndex = 1,
    ...props
}: {
    className?: string;
    zIndex?: number;
}) {
    // Extract the background color class (including opacity)
    const colorClass = className ? extractClassValue(className, "bg") : "";

    return (
        <div className="w-full h-fit content-grid">
            <header
                style={{ zIndex: zIndex }}
                className={cn(className, "content-grid all")}
            >
                <div className="flex flex-row flex-nowrap justify-evenly items-center w-full big">
                    <Nav className="outline-1 outline-red-500 outline">
                        <Link href="/home">
                            <h2>Home</h2>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link href="/dashboard">Dashboard</Link>
                        <Link href="/about">About</Link>
                    </Nav>
                    <Nav>
                        <Link href="/dashboard">Dashboard</Link>
                        <Link href="/about">About</Link>
                    </Nav>
                </div>
            </header>
            <div className="relative bg-transparent all content-grid">
                <Spacer
                    className={cn("", "all min-h-4", `text-${colorClass}`)}
                    variant="cap"
                    zIndex={zIndex}
                />
            </div>
        </div>
    );
}

export default Header;
