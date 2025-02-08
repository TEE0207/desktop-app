import computer from "../assets/imageComputer.png"
import styles from "./first.module.css";

export default function FirstHeroComponent (){

    return(
        <div className={styles.firstHeroContainer}>
            <div className={styles.firstHeroHeadingParagraphContainer}>
                  <div className={styles.firstHeroHeadingContainer}>
                    <h1>Keep track of your snippets</h1>
                  </div>

                  <div className={styles.firstHeroParagraphContainer}>
                    <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
                  </div>
            </div>

            <div className={styles.desktopAndTheThreeContentContainer}>
                <div className={styles.desktopPicContainer}>
                    <img src={computer} alt="desktop picture" className = {styles.desktopPicContainerImg}/>
                </div>

                <div className={styles.theThreeContentContainer}>
                    <div className={styles.contentHeadingAndParagraphContainer}>
                         <div className={styles.contentHeadingContainer}>
                            <h3 >Quick Search</h3>
                         </div>

                         <div className={styles.contentParagraphContainer1}>
                            <p>Easily search your snippets by content, category, web address, application, and more.</p>
                         </div>
                    </div>

                    <div className={styles.contentHeadingAndParagraphContainer}>
                         <div className={styles.contentHeadingContainer}>
                            <h3>icoud Sync</h3>
                         </div>

                         <div className={styles.contentParagraphContainer2}>
                            <p>Instantly saves and syncs snippets across all your devices.</p>
                         </div>
                    </div>


                    <div className={styles.contentHeadingAndParagraphContainer}>
                         <div className={styles.contentHeadingContainer}>
                            <h3>Complete History</h3>
                         </div>

                         <div className={styles.contentParagraphContainer3}>
                            <p>Retrieve any snippets from the first moment you started using the app.</p>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    )
}