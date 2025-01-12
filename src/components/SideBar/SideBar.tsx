import styles from "./SideBar.module.css"


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
                </section>

            </article>
        </>
    )

}