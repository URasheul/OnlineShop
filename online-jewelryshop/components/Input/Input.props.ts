import { DetailsHTMLAttributes } from "react";
import ArrowIcon from "./arrow-icon.svg";
import ArrowIconSmall from "./arrow-icon-small.svg";
import CrossIcon from "./cross-icon.svg";
import ShowPassIcon from "./show-icon.svg";
import SearchIcon from "./search-icon.svg";

export const InputIcons = {
    ArrowIcon,
    ArrowIconSmall,
    CrossIcon,
    ShowPassIcon,
    SearchIcon
}

export interface InputProps extends DetailsHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    size: "s" | "m" | "l";
    icon?:  keyof typeof InputIcons;
}