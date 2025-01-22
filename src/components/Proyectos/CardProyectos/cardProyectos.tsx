import styles from './cardProyectos.module.css';
import { Eye, Github } from 'lucide-react';


type CardProyectosProps = {
    tecnologias: string;
    title: string;
    description: string;
    link: string;
    linkGit: string;
    img: string;
}

export default function CardProyectos({ tecnologias, title, description, link, img, linkGit }: CardProyectosProps) {
    return (
        <>
            <article className={styles.cardContainer} style={{ backgroundImage: `url(${img})` }}>
                <section className={styles.containerSection}>
                    <div className={styles.containerTitle}>
                        <div className={styles.containerTitleLeft}>
                            <strong className={styles.h3pcolor}>{title}</strong>
                            <p>{tecnologias}</p>
                        </div>
                        <div className={styles.containerTitleRight}>
                            <a className={styles.h3pcolor} href={linkGit} target='_blank'><Github size={28} color="#6ee1f2" /></a>
                            <a className={styles.h3pcolor} href={link} target='_blank'><Eye size={28} color="#6ee1f2" /></a>
                        </div>
                    </div>
                    <section className={styles.containerDescription}>
                        <p>{description}</p>
                    </section>

                </section>
            </article >
        </>
    )
}