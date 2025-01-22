import styles from './aboutMe.module.css'
import CardAboutMe from './CardAboutMe/cardAboutMe'
import { Gamepad2, Dumbbell, Laptop, Popcorn } from 'lucide-react';

export default function AboutMe() {
    return (
        <>
            <h2>Sobre mí</h2>
            <div className={styles.line}></div>
            <section className={styles.aboutMe}>
                <p> <b>¡Hola! Soy Elías, un desarrollador front-end apasionado por crear experiencias web dinámicas y atractivas.</b> Me encanta todo lo relacionado con la informática, pero fue el desarrollo web lo que realmente despertó mi interés, especialmente el
                    front-end, donde puedo combinar creatividad y
                    tecnología para dar vida a ideas.
                </p>
                <p>Actualmente estudio la <b>Tecnicatura en Informática Aplicada al Diseño Multimedia y de
                    Sitios Web</b> en la Universidad Nacional del Litoral, donde curso de manera virtual. Ya
                    completé exitosamente mi primer año y sigo perfeccionando mis
                    habilidades día a día para convertirme en un excelente desarrollador front-end.
                </p>
                <h3>Mis Pasatiempos</h3>
                <section className={styles.containerPasatiempo}>
                    <CardAboutMe descripción={"Videojuegos"} icon={<Gamepad2 size={32} color="#6ee1f2" />} />
                    <CardAboutMe descripción={"Gym"} icon={<Dumbbell size={32} color="#6ee1f2" />} />
                    <CardAboutMe descripción={"Desarrollar nuevas habilidades"} icon={<Laptop size={32} color="#6ee1f2" />} />
                    <CardAboutMe descripción={"Películas o Series"} icon={<Popcorn size={32} color="#6ee1f2" />} />
                </section>
            </section>
        </>
    )
}