import styles from "./SideBar.module.css"
import LinkCards from "../cardLinks/LinkCard"
import { Mail, Linkedin, FileUser, MapPin } from 'lucide-react';

export default function SideBar() {

    return (
        <>
            <article className={styles.containerSB}>
                <section className={styles.sectionImgSB}>
                    <div>
                        <img src="/profileIMG.png" alt="" />
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
                            icon={<Mail color="#0097b2" />}
                            link="mailto:eg378556@gmail.com"
                        />
                        <LinkCards
                            title="Linkedin"
                            description="Perez, Elías Leonel"
                            icon={<Linkedin color="#0097b2" />}
                            link="https://www.linkedin.com/in/eliasperez-"
                        />
                        <LinkCards
                            title="CV / Resumé"
                            description="Ver CV"
                            icon={<FileUser color="#0097b2" />}
                            link="https://drive.google.com/file/d/1-zA_XON9SOBT4sSgVCnWR5tqafNV2aqg/view?usp=sharing"
                        />
                        <LinkCards
                            title="Ubicación"
                            description="Argentina, Chaco"
                            icon={<MapPin color="#0097b2" />}
                            link=""
                        />

                    </section>
                </section>



            </article>
        </>
    )

}