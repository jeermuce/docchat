import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function extractClassValue(className: string, prefix: string) {
    const startIndex = className.indexOf(`${prefix}-`);
    if (startIndex === -1) return "";

    const valueStartIndex = startIndex + prefix.length + 1;
    const endIndex = className.indexOf(" ", valueStartIndex);
    return endIndex === -1
        ? className.slice(valueStartIndex)
        : className.slice(valueStartIndex, endIndex);
}
