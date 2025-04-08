
import Link from "next/link";
import CountIcon from "./CountIcon/CountIcon";
import styles from "./HeaderIcon.module.css";
import { HeaderIconProps, HeaderIcons } from "./HeaderIcon.props";
import cn from "classnames";

export default function HeaderIcon({ count, type, children, className }: HeaderIconProps) {

	const Icon = HeaderIcons[type]

	const iconHref = {
		FavoritesIcon: "/favorites",
		CartIcon: "/cart",
		UserIcon: "/account"
	}

	return (		
		type === "MobileMenuIcon" || type === "CrossIcon" || type === "ExitIcon"
		?
		<button className={cn(styles.headerIcon, styles.link, className)}>			
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