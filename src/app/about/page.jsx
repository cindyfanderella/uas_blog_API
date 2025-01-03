import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Kelompok-4</h2>
        <h1 className={styles.title}>
          We are kelompok-4 
        </h1>
        
        <p>1. arvilanti devani - 22104410075 <br />
          2. rizki ramadhan - 22104410088 <br />
          3. nur cindy intan fanderella - 22104410098 <br />
          4. ari handoyo - 22104410106 <br />
          5. wasiatul jannah - 22104410121 <br />
          6. sahrul ramadhan - 22104414002 <br />
        </p>

        <p className={styles.desc}>
          eioooo letsgoooo
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>2 +</h1>
            <p>Year of experience</p>
          </div>
          
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
