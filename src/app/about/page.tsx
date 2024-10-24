import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import Bulge_svg from "../_components/Bulge_svg";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Main from "../_components/Main";
import Spacer from "../_components/Spacer";

export default function page() {
    const bgOfBars = "bg-secondary/70";
    return (
        <>
            <Header className={cn("", bgOfBars)} zIndex={60} />
            <Main className="" zIndex={50}>
                <Spacer className="mid" variant="cap" />

                <h1>hello</h1>
                <Spacer className="big" variant="bowl" />
                <h1>hello</h1>
                <Spacer className="all" variant="cap-neg" />
                <h1>hello</h1>
                <Spacer className="big" variant="bowl-neg" />
            </Main>
            <Footer className={cn("", bgOfBars)} zIndex={60} />
        </>
    );
}
