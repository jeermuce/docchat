import type React from "react";

function Wrapper(
    props: React.HTMLProps<HTMLDivElement>,

    children: React.ReactNode,
) {
    return <div className={`${props.className} content-grid`}>{children}</div>;
}

export default Wrapper;
