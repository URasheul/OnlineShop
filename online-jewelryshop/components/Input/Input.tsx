
import styles from "./Input.module.css";
import { InputIcons, InputProps } from "./Input.props";
import cn from "classnames";


export function Input({placeholder, size = 'm', icon, className, name} : InputProps) {

    const Icon = icon && InputIcons[icon];

    return (
        <div className={cn(styles.inputWrapper, className)}>
            <input name={name} placeholder={placeholder} 
            className={cn(styles.input, styles[size], {[styles.inputBorder] : icon === "ArrowIcon" || icon === "ArrowIconSmall"})}/>
            { icon ? <button className={styles.button}><Icon className={cn(styles.icon, styles[icon])}/></button> : <></> }
        </div>
    ) 
}