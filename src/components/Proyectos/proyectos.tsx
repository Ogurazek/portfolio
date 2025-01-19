import styles from './proyectos.module.css';
import CardProyectos from './CardProyectos/cardProyectos';

export default function Proyectos() {
    return (
        <>
            <h2>Proyectos</h2>
            <div className={styles.line}></div>
            <div className={styles.container}>
                <CardProyectos />
                <CardProyectos />
                <CardProyectos />
            </div>
        </>
    );
}