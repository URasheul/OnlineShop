
import styles from "./SocialNetwork.module.css";
import InstIcon from "./inst-icon.svg";
import FacebookIcon from "./facebook-icon.svg";
import InIcon from "./in-icon.svg";
import TwittIcon from "./twitter-icon.svg";
import Link from "next/link";

export function SocialNetwork() {
    return (
        <div className={styles.network}>
            <Link href={""}><InIcon/></Link>           
            <Link href={""}><FacebookIcon/></Link>           
            <Link href={""}><InstIcon/></Link>           
            <Link href={""}><TwittIcon/></Link> 
        </div>
    )
}