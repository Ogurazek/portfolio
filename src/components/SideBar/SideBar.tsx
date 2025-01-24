import styles from "./SideBar.module.css"
import LinkCards from "../cardLinks/LinkCard"
import { Mail, Linkedin, FileUser, Github } from 'lucide-react';

export default function SideBar() {

    return (
        <>
            <article className={styles.containerSB}>
                <section className={styles.sectionImgSB}>
                    <div>
                        <img src="/profileIMG.webp" alt="" />
                    </div>
                    <strong>Perez Elías Leonel</strong>
                </section>
                <section className={styles.sectioninfoSB}>

                    <div className={styles.sectioninfoSecSB}>
                        <div className={styles.containerinfoSB}>
                            <p>FrontEnd | TypeScript | JavaScript | React | Docker | Git | Bootstrap | Github | HTML | CSS | ...</p>
                        </div>
                    </div>
                    <div className={styles.sectionlinedivcontainer}>
                        <div className={styles.sectionline}></div>
                    </div>

                    <section className={styles.sectionLinks}>
                        <LinkCards
                            title="Email"
                            description="eg378556@gmail.com"
                            icon={<Mail color="#6ee1f2" />}
                            link="mailto:eg378556@gmail.com"
                        />
                        <LinkCards
                            title="LinkedIn"
                            description="Perez, Elías Leonel"
                            icon={<Linkedin color="#6ee1f2" />}
                            link="https://www.linkedin.com/in/eliasperez-"
                        />
                        <LinkCards
                            title="CV / Resumé"
                            description="Ver CV"
                            icon={<FileUser color="#6ee1f2" />}
                            link="https://drive.google.com/file/d/1J45lvBZ05WJcmbcqQd0yUjP8elMk4v8j/view"
                        />
                        <LinkCards
                            title="GitHub"
                            description="Ogurazek"
                            icon={<Github color="#6ee1f2" />}
                            link="https://github.com/Ogurazek"
                        />

                    </section>
                </section>
            </article>
        </>
    )

}