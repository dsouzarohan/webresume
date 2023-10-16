import RouteLayout from './components/RouteLayout/RouteLayout'
import styles from './page.module.scss'

export default function Home() {
  return (
    <RouteLayout>
      <div className="cont w-full h-full z-20">
        <div className={styles.intro}>
          <h1 className={`text-base md:text-2xl ${styles.title}`}>Hey there,</h1>
          <p className={`text-5xl md:text-8xl ${styles.name}`}>I'm Rohan.</p>
          <h4 className={`text-base md:text-2xl ${styles.title}`}>a Software Engineer.</h4>
        </div>
      </div>
    </RouteLayout>
  )
}
