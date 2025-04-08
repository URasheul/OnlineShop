"use client"

import styles from "./Search.module.css";
import { SearchProps } from "./Search.props";
import SearchIcon from "./search-icon.svg";
import SearchIconSmall from "./search-icon-small.svg";
import { useState } from "react";
import cn from "classnames";
import { motion } from "motion/react";


export default function Search({ placeholder = "Поиск", opened = false,  className }: SearchProps) {	

	const [ isOpened, setIsOpened] = useState<boolean>(opened);
	

	return (
		<button className={cn( styles.search, {[styles.searchOpened] : isOpened}, className)} onClick={() => setIsOpened(true)}>			
			{
			isOpened
			?
			<motion.div className={styles.inputWrapper}
			initial={{x: 180, opacity: 0}}
			animate={{x: 0, opacity: 1, transition: {duration : 0.3}}}
			>
				<input placeholder={placeholder} className={styles.input}/>
				<SearchIconSmall/>				
			</motion.div>
			:
			<SearchIcon/>
			}
		</button>
	)
}