import React from "react";

interface NavProps extends React.HTMLProps<HTMLUListElement> {
    className?: string;
    children: React.ReactNode;
    variant?: "row" | "col";

    aria?: string;
}

const Nav: React.FC<NavProps> = ({
    className,
    children,
    variant = "row",
    aria,
    ...props
}) => {
    return (
        <nav aria-label={aria} className="">
            <ul className={`${className} flex flex-${variant}`} {...props}>
                {React.Children.map(children, (child, index) => (
                    <li
                        key={(child as React.ReactElement).key || index}
                        className="hover:bg-accent hover:text-background child:p-2 md:child:p-4  transition-all ease-in-out duration-100"
                    >
                        {child}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
