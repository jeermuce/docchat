import { Button } from "@/components/ui/button";
import React from "react";

import { cn } from "@/lib/utils";
import CurvedSvg from "./_components/CurvedSvg";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Main from "./_components/Main";
export default function Home() {
    const bgOfBars = "bg-secondary/70";
    return (
        <>
            <Header
                className={cn("overflow-hidden pt-2", bgOfBars)}
                zIndex={60}
            />
            <Main className="" zIndex={50}>
                <div className="">hello</div>
                <Button
                    variant={"outline"}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    DocChat is live
                </Button>
                {/* <CurvedSvg
                    className="absolute top-0 all text-background"
                    variant="cap"
                />
                <CurvedSvg
                    className="absolute top-0 all text-primary/70"
                    variant="cap"
                /> */}
            </Main>
            <Footer
                className={cn("overflow-hidden pb-2", bgOfBars)}
                zIndex={60}
            />
        </>
    );
}
