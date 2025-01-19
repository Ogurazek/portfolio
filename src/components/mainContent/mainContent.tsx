import styles from './mainContent.module.css'
import AboutMe from '../AboutMe/aboutme'

export default function MainContent() {
    return (
        <article className={styles.container}>
            <main className={styles.containerMain}>
                <header className={styles.header_MC_container}>
                    <nav className={styles.header_MC}>
                        <button>Sobre mí</button>
                        <button>Proyectos</button>
                        <button>Tecnologías</button>
                    </nav>
                </header>
                <article className={styles.containerAboutMeProyeTec}>
                    <div className={styles.containerMainAboutMeProyeTec}>
                        <AboutMe />
                    </div>
                </article>
            </main>
        </article>
    )
}