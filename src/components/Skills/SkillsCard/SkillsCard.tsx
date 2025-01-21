import styles from './SkillsCard.module.css'


type SkillsCardProps = {
    title: string;
    img: string;
}

export default function SkillsCard({ title, img }: SkillsCardProps) {
    return (
        <>
            <article className={styles.containerCard}>
                <div className={styles.containerCardImg}>
                    <img src={img} alt="" />
                </div>
                <span>{title}</span>
            </article>
        </>
    )
}