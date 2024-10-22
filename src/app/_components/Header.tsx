import { cn } from "@/lib/utils";
import Link from "next/link";
import type React from "react";
import Nav from "./Nav";

function Header({
    className,
    zIndex = 1,
    ...props
}: { className?: string; zIndex?: number }) {
    return (
        <header
            style={{ zIndex: zIndex }}
            className={cn(className, "content-grid", "pb-[0.13rem] ")}
        >
            <div className="big flex items-center flex-row flex-nowrap w-full justify-between">
                <Nav className="outline-1 outline-red-500 outline ">
                    <Link href="/home">
                        <h2 className="">Home</h2>
                    </Link>
                </Nav>

                <Nav>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/about">About</Link>
                </Nav>
            </div>
        </header>
    );
}

export default Header;
