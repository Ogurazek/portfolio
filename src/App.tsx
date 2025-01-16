import styles from "./app.module.css"
import MainContent from "./components/mainContent/mainContent"
import SideBar from "./components/SideBar/SideBar"


function App() {

  return (
    <>
      <article className={styles.bodyApp}>
        <div className={styles.bodyApp_container}>
          <SideBar />
          <MainContent />
        </div>

      </article>
    </>
  )
}

export default App
