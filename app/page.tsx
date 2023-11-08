import RouteLayout from './components/route-layout/route-layout'
import styles from './page.module.scss'
import Button from './common/button'
import Link from 'next/link';

export default function Home() {

  return (
    <RouteLayout>
      <div className="flex flex-col items-center justify-start">
        <div className={`w-full border-r-8 border-r-carrot`}>
          <h1 className={`text-lg md:text-2xl ${styles.title} font-ibm`}>Hey there,</h1>
          <p className={`text-5xl md:text-8xl pixelify fade-3`}>I&apos;m Rohan.</p>
          <h4 className={`text-lg md:text-2xl ${styles.title} font-ibm`}>a Software Engineer.</h4>
        </div>

        <div className={`bg-eerie border-l-8 border-l-carrot font-ibm mt-14 p-5 md:mx-14 lg:mx-40`}>
        Full-stack developer with a flair for creating captivating web apps. Expert in Angular, TypeScript, and frontend tech. Venturing into Go and distributed systems with a passion for backend and system design. An open-source advocate, striving to enhance user experiences with innovative web solutions.
        </div>
        <div className="flex flex-col justify-center items-center mt-14 gap-2 w-full">
          <Link className='flex w-40 md:w-6/12 lg:w-3/12 justify-center' href="/about-me"><Button text="About me"></Button></Link>
          <Link className='flex w-40 md:w-6/12 lg:w-3/12 justify-center' href="/profile"><Button text="Profile" className="bg-eerie hover:bg-eerie-900"></Button></Link>
          <Link className='flex w-40 md:w-6/12 lg:w-3/12 justify-center' href="/contact"><Button text="Contact" className="bg-onyx hover:bg-onyx-800"></Button></Link>
        </div>
      </div>
    </RouteLayout>
  )
}
