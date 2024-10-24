import { Button } from "@/components/ui/button";
import React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Bulge_svg from "./_components/Bulge_svg";
import Cut_svg from "./_components/Cut_svg";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Main from "./_components/Main";
import Nav from "./_components/Nav";
export default function Home() {
    const bgOfBars = "bg-secondary/70";
    return (
        <>
            <Header className={cn("", bgOfBars)} zIndex={60} />
            <Main className="" zIndex={50}>
                <Button
                    variant={"outline"}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    DocChat is live
                </Button>
                <Bulge_svg />
                hello
                <Bulge_svg variant="bot" />
            </Main>
            <Footer className={cn("", bgOfBars)} zIndex={60} />
        </>
    );
}
