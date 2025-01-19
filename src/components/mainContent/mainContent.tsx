import styles from './mainContent.module.css'
import AboutMe from '../AboutMe/aboutme'
import Proyectos from '../Proyectos/proyectos'
import ChangePageHook from '../Hooks/ChangePage/ChangePageHook'

export default function MainContent() {

    const { stateAboutMe,
        handleAboutMe,
        handleSkills,
        handleProyectos,
        stateSkills,
        stateProyectos } = ChangePageHook()

    return (
        <article className={styles.container}>
            <main className={styles.containerMain}>
                <header className={styles.header_MC_container}>
                    <nav className={styles.header_MC}>
                        <button className={stateAboutMe ? styles.buttonFocus : ""} onClick={handleAboutMe}>Sobre mí</button>
                        <button className={stateProyectos ? styles.buttonFocus : ""} onClick={handleProyectos}>Proyectos</button>
                        <button className={stateSkills ? styles.buttonFocus : ""} onClick={handleSkills}>Skills</button>
                    </nav>
                </header>
                <article className={styles.containerAboutMeProyeTec}>
                    <div className={styles.containerMainAboutMeProyeTec}>
                        {stateAboutMe && <AboutMe />}
                        {stateProyectos && <Proyectos />}
                    </div>
                </article>
            </main>
        </article>
    )
}