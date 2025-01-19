import styles from './cardAboutMe.module.css'



type CardAboutMeProps = {
    icon: any;
    descripción: string;
}


export default function CardAboutMe({ icon, descripción }: CardAboutMeProps) {
    return (
        <>
            <article className={styles.containerCardAboutMe}>
                <div className={styles.containerIcon}>
                    {icon}
                </div>
                <p>{descripción}</p>
            </article>
        </>
    )
}