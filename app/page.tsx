import Image from 'next/image'

export default function Home() {
  return (
    <main className="main-cont flex min-h-screen flex-col items-center justify-start p-24 w-100">
      <div className="cont w-full h-full z-20">
        <div className="intro">
          <h1>Hey there,</h1>
          <p className="name">
            I'm Rohan.
          </p>
          <h4 className="title">
            a Software Engineer.
          </h4>
        </div>
      </div>
    </main>
  )
}
