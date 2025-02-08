import devices from "../assets/image-devices.png"
import styles from "./Second.module.css"

export default function secondHeroComponent({title , paragraph}){


    return(
        <div>
            <div className={styles.secondHeroContainer}>
                <div className={styles.secondHeroHeadingAndParagraphContainer}>

                    <div className={styles.secondHeroHeadingContainer}>
                       <h3>{title}</h3>
                    </div>

                    <div className={styles.secondHeroParagraphContainer}>
                        <p>{paragraph}</p>
                    </div>
                </div>

                <div className={styles.secondHeroDevicePicContainer}>
                    <img src={devices} alt="devices" className ={styles.secondHeroDeviceImage}/>
                </div>
            </div>
        </div>
    )
}