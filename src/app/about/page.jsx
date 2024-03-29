import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Agency</h2>
        <h1>We create digital ideas that are bigger, bolder, braver, and better.</h1>
        <p>
          We create digital ideas that are bigger, bolder, braver, and better. We believe in good ideas flexibility and precision. We're world's Our Special Team best consulting & finance solution provider. Wide range of web and software development services.
        </p>
        <div className={styles.boxes}></div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default AboutPage