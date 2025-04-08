

import styles from "./CountIcon.module.css";
import { CountIconProps } from "./CountIcon.props";

export default function CountIcon({ count = 0 }: CountIconProps) {

	return (				
			<span className={styles.count}>{count}</span>		
	)
}