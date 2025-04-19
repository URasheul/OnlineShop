
import Link from "next/link";
import styles from "./MobileMenu.module.css";
import HeaderIcon from "../HeaderIcon/HeaderIcon";
import cn from "classnames";
import { MobileMenuProps } from "./MobileMenu.props";


export default function MobileMenu({className, userLogined} : MobileMenuProps) {
	
	return (		
			<div className={cn(styles.mobileMenu, className)}>
				<Link className={styles.text} href={"/"}>Главная</Link>
				<Link className={styles.text} href={"/products"}>Магазин</Link>
				<Link className={styles.text} href={"/about"}>О нас</Link>
				<div className={styles.line}></div>				
				<HeaderIcon className={cn(styles.text, styles.iconItem)} type={"UserIcon"}>Мой аккаунт</HeaderIcon>
				<HeaderIcon className={cn(styles.text, styles.iconItem)} type={"FavoritesIcon"}>Избранное</HeaderIcon>
				{
					userLogined
					?
					<HeaderIcon className={cn(styles.text, styles.iconItem)} type={"ExitIcon"}>Выход</HeaderIcon>	
					:
					null				
				}
			</div>	
	);
}