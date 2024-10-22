import Link from "next/link";
import type React from "react";
import Nav from "./Nav";

function Header(props: React.HTMLProps<HTMLDivElement>) {
    return (
        <header className={`${props.className} content-grid`}>
            <div className="big flex flex-row flex-nowrap w-full justify-between">
                <Nav className="m-0">
                    <Link href="/home">ome</Link>
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
