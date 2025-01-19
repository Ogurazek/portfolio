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
                            icon={<Mail color="#6ee1f2" />}
                            link="mailto:eg378556@gmail.com"
                        />
                        <LinkCards
                            title="Linkedin"
                            description="Perez, Elías Leonel"
                            icon={<Linkedin color="#6ee1f2" />}
                            link="https://www.linkedin.com/in/eliasperez-"
                        />
                        <LinkCards
                            title="CV / Resumé"
                            description="Ver CV"
                            icon={<FileUser color="#6ee1f2" />}
                            link="https://drive.google.com/file/d/1-zA_XON9SOBT4sSgVCnWR5tqafNV2aqg/view?usp=sharing"
                        />
                        <LinkCards
                            title="Ubicación"
                            description="Argentina, Chaco"
                            icon={<MapPin color="#6ee1f2" />}
                            link="https://www.google.com.ar/maps/place/Resistencia,+Chaco/@-27.5645803,-59.4043056,10z/data=!4m6!3m5!1s0x94450c62a6f5f70b:0xf03ac86511c2cd6d!8m2!3d-27.4518622!4d-58.9855547!16zL20vMDJ0Yjdr?hl=es&entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D"
                        />

                    </section>
                </section>



            </article>
        </>
    )

}