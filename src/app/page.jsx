import styles from "./home.module.css"

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Creative Thoughts Agency.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className={styles.buttons}>
        
      </div>
    </div>
    <div className={styles.imageContainer}></div>
  </div>
};

export default Home;