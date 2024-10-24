import Link from "next/link";
import type React from "react";
import GhLogo from "./GhLogo";
import Nav from "./Nav";

import { cn, extractClassValue } from "@/lib/utils";
import Cut_svg from "./Cut_svg";

function Footer({
    className,
    zIndex = 1,
    ...props
}: { className?: string; zIndex?: number }) {
    const colorClass = className ? extractClassValue(className, "bg") : "";
    return (
        <div className="w-full h-fit content-grid">
            <div className="overflow-hidden relative all content-grid">
                <Cut_svg
                    className={cn("all ", `text-${colorClass}`)}
                    variant="bowl"
                    zIndex={zIndex + 2}
                />
            </div>
            <footer
                style={{ zIndex: zIndex }}
                className={cn(className, "content-grid all")}
            >
                <div className="flex flex-row flex-wrap justify-between w-full big">
                    <Nav aria="Internal links" variant="col">
                        <Link href="/about">
                            <h4>About</h4>
                        </Link>
                        <Link href="/contact">
                            <h4>Contact</h4>
                        </Link>
                        <Link href="/privacy">
                            <h4>Privacy</h4>
                        </Link>
                    </Nav>
                    <Nav aria="External links" variant="col">
                        <a
                            href="https://github.com/jeermuce/docchat "
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="overflow-hidden w-12 rounded-full">
                                <GhLogo />
                            </div>
                        </a>
                        <a
                            href="https://docchat-two.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h4>Deployment</h4>
                        </a>
                        <Link href="/privacy">
                            <h4>Privacy</h4>
                        </Link>
                    </Nav>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
