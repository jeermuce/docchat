import type React from "react";

function Main(
    props: React.HTMLProps<HTMLDivElement>,

    children: React.ReactNode,
) {
    return (
        <main className={`${props.className} content-grid`}>{children}</main>
    );
}

export default Main;
