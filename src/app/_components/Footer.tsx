import Link from "next/link";
import type React from "react";
import GhLogo from "./GhLogo";
import Nav from "./Nav";
import Wrapper from "./Wrapper";

function Footer(props: React.HTMLProps<HTMLDivElement>) {
    return (
        <footer className={`${props.className} content-grid w-full `}>
            <div className="flex flex-row big flex-wrap justify-between w-full ">
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
                    <a href="https://github.com/jeermuce/docchat">
                        <div className="w-12 rounded-full overflow-hidden">
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
    );
}

export default Footer;