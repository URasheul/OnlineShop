import { DetailsHTMLAttributes } from "react";


export interface MobileMenuProps extends DetailsHTMLAttributes<HTMLButtonElement> {
    userLogined?: boolean;
}