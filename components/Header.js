import styles from 'styles/Header.module.scss'

export default function Header({ title }) {
    return (
        <header className={styles.header}>
            <h1>BRANZ Concierge</h1>
            <h1 className={styles.pageTitle}>{title}</h1>
        </header>
    )
}