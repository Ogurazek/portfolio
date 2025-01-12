import styles from "./app.module.css"
import SideBar from "./components/SideBar/SideBar"


function App() {

  return (
    <>
      <article className={styles.bodyApp}>
        <div className={styles.bodyApp_container}>
          <SideBar />
        </div>
      </article>
    </>
  )
}

export default App
