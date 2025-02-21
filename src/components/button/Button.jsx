import styles from '../button/Button.module.scss'

export function Button({ data, className, ...props }) {
    return (
        <button className={`${styles.button} ${className || ''}`} {...props}>
            {data}
        </button>
    )
}