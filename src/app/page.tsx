import { Button } from "@/components/ui/button";
import React from "react";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Main from "./_components/Main";
export default function Home() {
    return (
        <>
            <Header className="bg-background" />
            <Main className="bg-transparent">
                <Button
                    variant={"outline"}
                    className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
                >
                    DocChat is live
                </Button>
            </Main>
            <Footer className="bg-background" />
        </>
    );
}
