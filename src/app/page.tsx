import React from "react";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Main from "./_components/Main";
export default function Home() {
    return (
        <>
            <Header className="bg-background" />
            <Main className="bg-transparent" />
            <Footer className="bg-background" />
        </>
    );
}
