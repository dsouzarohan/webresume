import RouteLayout from './components/RouteLayout/RouteLayout'
import styles from './page.module.scss'

export default function Home() {
  return (
    <RouteLayout>
      <div className="cont w-full h-full z-20">
        <div className={styles.intro}>
          <h1 className={`text-lg md:text-2xl ${styles.title}`}>Hey there,</h1>
          <p className={`text-5xl md:text-8xl ${styles.name}`}>I'm Rohan.</p>
          <h4 className={`text-lg md:text-2xl ${styles.title}`}>a Software Engineer.</h4>
        </div>

        <div className={`mt-10 p-5 ${styles.desc}`}>
        Full-stack developer with a flair for creating captivating web apps. Expert in Angular, TypeScript, and frontend tech. Venturing into Go and distributed systems with a passion for backend and system design. An open-source advocate, striving to enhance user experiences with innovative web solutions.
        </div>
        <div className="flex justify-center mt-10">
          <button className="rounded-none p-5 bg-carrot font-ibm">Profile</button>
        </div>
      </div>
    </RouteLayout>
  )
}
