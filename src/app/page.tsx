import { Button } from "@/components/ui/button";
import React from "react";

import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Main from "./_components/Main";
import Spacer from "./_components/Spacer";
export default function Home() {
    return (
        <>
            <Header className="overflow-hidden bg-secondary/70" zIndex={60} />
            <Main className="py-8 bg-accent" zIndex={50}>
                <div className="">hello</div>
                <Button
                    variant={"outline"}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    DocChat is live
                </Button>
                {/* <Spacer
                    className="absolute top-0 all text-background"
                    variant="cap"
                />
                <Spacer
                    className="absolute top-0 all text-primary/70"
                    variant="cap"
                /> */}
            </Main>
            <Footer className="bg-background" zIndex={0} />
        </>
    );
}
