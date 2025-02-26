import styles from './skills.module.css';
import SkillsCard from './SkillsCard/SkillsCard';



export default function Skills() {
    return (
        <>
            <h2>Skills</h2>
            <div className={styles.line}></div>
            <article className={styles.containerSkills}>
                <SkillsCard img='/react.svg' title='ReactJS' />
                <SkillsCard img='/nextjs.svg' title='NextJS' />
                <SkillsCard img='/tailwindcss2.svg' title='TailwindCSS' />
                <SkillsCard img='/typescript.svg' title='TypeScript' />
                <SkillsCard img='/javascript.svg' title='JavaScript' />
                <SkillsCard img='/html5.svg' title='HTML5' />
                <SkillsCard img='/css.svg' title='CSS' />
                <SkillsCard img='/docker.svg' title='Docker' />
                <SkillsCard img='/github.svg' title='GitHub' />
                <SkillsCard img='/bootstrap.svg' title='Bootstrap' />
                <SkillsCard img='/vite.svg' title='Vite' />
            </article>
        </>
    )
}