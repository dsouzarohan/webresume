import RouteLayout from './components/RouteLayout/RouteLayout'
import styles from './page.module.scss'

export default function Home() {
  return (
    <RouteLayout>
      <div className="cont w-full h-full z-20">
        <div className={styles.intro}>
          <h1 className={styles.title}>Hey there,</h1>
          <p className={styles.name}>I'm Rohan.</p>
          <h4 className={styles.title}>a Software Engineer.</h4>
        </div>
      </div>
    </RouteLayout>
  )
}
