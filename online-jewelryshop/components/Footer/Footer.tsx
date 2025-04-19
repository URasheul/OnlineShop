"use client"

import Link from "next/link";
import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";
import { Input } from "../Input/Input";
import { SocialNetwork } from "../SocialNetwork/SocialNetwork";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NotificationBar } from "../Notification/Notification";
import NotifyIcon from "./notify-icon.svg";
import Form from "next/form";



export default function Footer({} : FooterProps) {

	const [screenWidth, setScreenWidth] = useState<number|null>(null);
	
	const notify = () => toast.custom(<NotificationBar icon={NotifyIcon} message="Ваш email подписан на новости и уведомления"/>, {
		position: "bottom-center",
		duration: 3000
	  })
	  
	useEffect(() => {	
		setScreenWidth(window.outerWidth);		
	}, []);
		
	return (
		<footer className={styles.footer}>
			<div className={styles.top}>
				<div className={styles.footerLinks}>
					<Link href={"/contacts"} className={styles.link}>КОНТАКТЫ</Link>
					<Link href={"/conditions"} className={styles.link}>УСЛОВИЯ ПОКУПКИ</Link>
					<Link href={"/delivery"} className={styles.link}>ДОСТАВКА И ВОЗВРАТ</Link>
				</div>
					{
					screenWidth && (screenWidth > 800)
					?
					<Form action={() => {
						notify();											
					}}>
						<Input name={'Email'} className={styles.input} placeholder="Ваш email для акций и предложений" size="l" icon="ArrowIcon"/>					
					</Form>
					:
					<Form action={() => {
						notify();											
					}}>
						<Input onClick={notify} className={styles.input} placeholder="Ваш email для акций и предложений" size="m" icon="ArrowIconSmall"/>
					</Form>					
					}
			</div>
			<div className={styles.bottom}>
				<span className={styles.copyright}>© 2024 Shoppe</span>
				<SocialNetwork/>
			</div>
			<Toaster containerClassName={styles.toaster}/> 
		</footer>		
	)
}