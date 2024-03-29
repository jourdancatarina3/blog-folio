import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/19845821/pexels-photo-19845821/free-photo-of-sheep-on-a-hillside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={styles.img} fill/>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corrupti et optio ea laudantium quia adipisci tempore aperiam odit expedita consequuntur voluptates in voluptate blanditiis quos, perferendis at ipsum. Tenetur.</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard
