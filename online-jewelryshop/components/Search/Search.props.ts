import { DetailsHTMLAttributes } from "react";


export interface SearchProps extends DetailsHTMLAttributes<HTMLInputElement> {
	placeholder?: string;
	opened?: boolean;
}