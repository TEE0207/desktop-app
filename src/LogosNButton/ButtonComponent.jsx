import styles from "./Button.module.css"

export default function ButtonComponent(){
   
    

    return(
        <div className={styles.buttonContainer}>
            <button className={styles.iosButton}>Download for iOS</button>

            <button className={styles.macButton}>Download for Mac</button>
        </div>
    )
}