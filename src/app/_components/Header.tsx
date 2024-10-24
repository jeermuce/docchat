import { cn, extractClassValue } from "@/lib/utils";
import Link from "next/link";
import type React from "react";
import Cut_svg from "./Cut_svg";
import Nav from "./Nav";

function Header({
    className,
    zIndex = 1,
    children,
    ...props
}: {
    className?: string;
    zIndex?: number;
    children?: React.ReactNode;
}) {
    // Extract the background color class (including opacity)
    const colorClass = className ? extractClassValue(className, "bg") : "";

    return (
        <div className="w-full h-fit content-grid">
            <header
                style={{ zIndex: zIndex }}
                className={cn(className, "content-grid  all")}
            >
                <section className="flex flex-row flex-nowrap justify-evenly items-center w-full big">
                    <Nav className="">
                        <Link href="/">Home</Link>
                    </Nav>
                    <Nav className="">
                        <Link className="" href="/dashboard">
                            Dashboard
                        </Link>
                        <Link href="/about">About</Link>
                    </Nav>
                    <Nav>
                        <Link href="/dashboard">Dashboard</Link>
                        <Link href="/about">About</Link>
                    </Nav>
                </section>
            </header>
            <div className="overflow-hidden relative all content-grid">
                <Cut_svg
                    className={cn("all ", `text-${colorClass}`)}
                    variant="cap"
                    zIndex={zIndex + 2}
                />
            </div>
        </div>
    );
}

export default Header;
