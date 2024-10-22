import { cn } from "@/lib/utils";
import Link from "next/link";
import type React from "react";
import Nav from "./Nav";

function Header({ className }: { className?: string }) {
    return (
        <header className={cn(className, "content-grid")}>
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
