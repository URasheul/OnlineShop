
import FavoritesIcon from "./favorites-icon.svg";
import CartIcon from "./shopping-cart-icon.svg";
import UserIcon from "./user-icon.svg";
import MobileMenuIcon from "./mobile-menu-icon.svg";
import CrossIcon from "./cross-icon.svg";
import ExitIcon from "./exit-icon.svg";
import { DetailsHTMLAttributes } from "react";

export const HeaderIcons = {
	FavoritesIcon,
	CartIcon,
	UserIcon,
	MobileMenuIcon,
	CrossIcon,
	ExitIcon
}

export interface HeaderIconProps extends DetailsHTMLAttributes<HTMLElement> {
	count?: number;
	type: keyof typeof HeaderIcons;
}