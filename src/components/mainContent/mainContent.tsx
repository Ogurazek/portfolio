import styles from './mainContent.module.css'

export default function MainContent() {
    return (
        <article className={styles.container}>
            <main className={styles.containerMain}>
                <header className={styles.header_MC_container}>
                    <nav className={styles.header_MC}>
                        <p>Portfolio</p>
                        <p>Portfolio</p>
                        <p>Portfolio</p>
                    </nav>
                </header>
            </main>
        </article>
    )
}