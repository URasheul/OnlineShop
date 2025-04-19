
import { ReactNode } from "react";
import styles from "./Notification.module.css";
import { NotificationProps } from "./Notification.props";
import { motion } from "motion/react";



export function NotificationBar({icon, message}: NotificationProps) {

    const Icon = icon as () => ReactNode;

    return (        
        <motion.div 
        initial={{y: 200}}
        animate={{y: 0, transition: { duration: 0.6}}}
        exit={{y: 200, transition: { duration: 0.6}}}
        className={styles.notification}>
            {icon ? <Icon/> : <></>}         
            <span className={styles.message}>{message}</span>
        </motion.div>        
    )
}