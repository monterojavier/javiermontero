import './About.css'

export default function About() {
  return (
    <article className='about  active' data-page='about'>
      <header>
        <h2 className='h2 article-title'>About me &#128064;</h2>
      </header>

      <section className='about-section'>
        <section className='about-text my-story'>
          <header>
            <h3>My Story</h3>
          </header>
          <p>Hello! &#128075;&#127997; I'm Javier, a software engineer with experience in the Tech Industry.</p>

          <p>
            As a software engineer: I've had experience at 3 organizations where they've had me creating new features,
            bug fixes, improving the code base, and most important improving my skills every day as a developer. I'm a
            proactive achiever with a proven ability to deliver results.
          </p>

          <p>
            Skilled at front-end development, back-end development, databases, agile methodology, continuous
            integration/continuous deployment, cybersecurity awareness, version controls, code review, RESTful APIs.
          </p>
        </section>

        <section className='about-text area-of-interest'>
          <header>
            <h3>Areas of Interest</h3>
          </header>
          <ul>
            <li>AI</li>
            <li>Machine Learning</li>
            <li>Frontend</li>
            <li>Backend</li>
          </ul>
        </section>

        <section className='about-text who-am-i'>
          <header>
            <h3>Outside from software engineering? Who am I?</h3>
          </header>
          <ul>
            <li>Driven & ambitious</li>
            <li>Travel enthusiast</li>
            <li>Tech aficionado</li>
            <li>Learning Chinese(Mandarin) (I speak English and Spanish)</li>
          </ul>
        </section>
      </section>
      <strong>Thanks for stopping by!!</strong>
    </article>
  )
}
