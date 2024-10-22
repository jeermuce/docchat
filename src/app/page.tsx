import { Button } from "@/components/ui/button";
import React from "react";
import Cut from "./_components/Cut";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Main from "./_components/Main";
export default function Home() {
    return (
        <>
            <Header
                className="bg-background overflow-hidden rounded-ellipse"
                zIndex={4}
            />
            <Cut className="bg-accent" zIndex={3} />
            <Main className="rounded-ellipse bg-background" zIndex={2}>
                <Button
                    variant={"outline"}
                    className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
                >
                    DocChat is live
                </Button>
            </Main>
            <Cut className="bg-accent" zIndex={1} />
            <Footer className="bg-background" zIndex={0} />
        </>
    );
}
