
import Link from "next/link";
import CountIcon from "./CountIcon/CountIcon";
import styles from "./HeaderIcon.module.css";
import { HeaderIconProps, HeaderIcons } from "./HeaderIcon.props";
import cn from "classnames";
import { motion } from "motion/react";

export default function HeaderIcon({ count, type, children, className, onClick }: HeaderIconProps) {

	const Icon = HeaderIcons[type]

	const iconHref = {
		FavoritesIcon: "/favorites",
		CartIcon: "/cart",
		UserIcon: "/account"
	}

	return (		
		type === "MobileMenuIcon" || type === "CrossIcon" || type === "ExitIcon"
		?
		<button 			
		onClick={onClick} 
		className={cn(styles.headerIcon, styles.link, className)
		}>			
			<Icon/>
			{children}		
		</button>
		:
		<button className={styles.headerIcon}>
			<Link className={cn(styles.link, className)} href={iconHref[type]}>
				<Icon/>
				{children}
			</Link>
			{ count && type !== "UserIcon" && <CountIcon count={count}/>}
		</button>		
	)
}