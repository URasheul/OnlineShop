
import HeaderIcon from "@/components/HeaderIcon/HeaderIcon";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";
import Search from "../Search/Search";
import Link from "next/link";


export default function Header({} : HeaderProps) {

	

	return (
		<nav className={styles.header}>
			<Link className={styles.logo} href={"/"}>
				<span><span className={styles.firstLetter}>S</span>HOPPE</span>
			</Link>			
				<div className={styles.headerRight}>
					<div className={styles.linksBlock}>
						<Link className={styles.link} href={"/products"}>Магазин</Link>
						<Link className={styles.link} href={"/about"}>О нас</Link>
						<div className={styles.border}></div>
					</div>
					<div className={styles.buttonsBlock}> 
						<Search/>
						<HeaderIcon type={"CartIcon"}/>
						<HeaderIcon type={"FavoritesIcon"}/>
						<HeaderIcon type={"UserIcon"}/>
					</div>
				</div>			
				<div className={styles.headerRightTablet}>						
						<Search/>
						<HeaderIcon type={"CartIcon"}/>
						<HeaderIcon type={"MobileMenuIcon"}/>					
				</div>			
				<div className={styles.headerRightMobile}>						  
						<HeaderIcon type={"CartIcon"}/>
						<HeaderIcon type={"MobileMenuIcon"}/>					
				</div>
				<Search opened className={styles.searchInput}/>							
		</nav>
	)
}