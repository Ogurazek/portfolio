import styles from './LinkCard.module.css'

type CardProps = {
    icon: any,
    title: string,
    description: string
    link: string;
}


export default function LinkCards({ icon, title, description, link }: CardProps) {



    return (
        <>
            <article className={styles.containerLC}>
                <section className={styles.containerLCSection}>
                    <div className={styles.containerIcon}>{icon}</div>
                    <div className={styles.containerText}>
                        <p>{title}</p>
                        <a href={link} target="_blank">{description}</a>
                    </div>
                </section>
            </article>
        </>
    )

}