import { DetailsHTMLAttributes, ReactNode } from "react";


export interface NotificationProps extends DetailsHTMLAttributes<HTMLElement> {
    icon?: () => ReactNode;
    message: string;
}