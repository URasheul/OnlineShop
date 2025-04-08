
import Link from "next/link";
import styles from "./MobileMenu.module.css";
import HeaderIcon from "../HeaderIcon/HeaderIcon";


export default function MobileMenu() {
	
	return (		
			<div className={styles.mobileMenu}>
				<Link className={styles.text} href={"/"}>Главная</Link>
				<Link className={styles.text} href={"/products"}>Магазин</Link>
				<Link className={styles.text} href={"/about"}>О нас</Link>
				<div className={styles.line}></div>				
				<HeaderIcon className={styles.text} type={"UserIcon"}>Мой аккаунт</HeaderIcon>
				<HeaderIcon className={styles.text} type={"FavoritesIcon"}>Избранное</HeaderIcon>
				<HeaderIcon className={styles.text} type={"CrossIcon"}>Выход</HeaderIcon>					
			</div>	
	);
}