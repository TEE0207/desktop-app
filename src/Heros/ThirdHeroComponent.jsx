import blacklists from "../assets/icon-blacklist.svg"
import text from "../assets/icon-text.svg"
import preview from "../assets/icon-preview.svg"
import styles from "./Third.module.css"



export default function ThirdHeroComponent(){
    return(
        <div className={styles.thirdHeroComponentContainer}>
            <div className={styles.thirdHeroHeadingParagraphContainer}>
                <div className={styles.thirdHeroHeadingContainer}>
                    <h3>Supercharge your work flow</h3>
                </div>

                <div className={styles.thirdHeroFirstParagraphContainer}>
                    <p>We've got the tools to boost your productivity.</p>
                    
                </div>

          </div>
             

             <div className={styles.theThreeIconAndItsContentContainer}>

                <div className={styles.thirdHeroIconHeadingParagraphContainer}>

                    <div className={styles.thirdHeroIconAndHeadingContainer}>

                        <div className={styles.thirdHeroIconContainer}>
                            <img src={blacklists} alt="logo" className={styles.thirdHeroIconImage}/>
                        </div>
                        <div className={styles.thirdHeroHeadingAfterIconContainer1}>
                            <h4>Create blacklists</h4>
                        </div>
                    </div>

                    <div className={styles.thirdHeroParagraphContainer1}>
                        <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </div>
                </div>

                <div className={styles.thirdHeroIconHeadingParagraphContainer}>
                    <div className={styles.thirdHeroIconAndHeadingContainer}>

                        <div className={styles.thirdHeroIconContainer}>
                            <img src={text} alt="logo" className={styles.thirdHeroIconImage}/>
                        </div>
                        <div className={styles.thirdHeroHeadingAfterIconContainer2}>
                            <h4>Plain text snippets</h4>
                        </div>
                    </div>

                    <div className={styles.thirdHeroParagraphContainer2}>
                        <p>Remove unwanted formatting from copied text for a consistent look.</p>
                    </div>
                </div>


                <div className={styles.thirdHeroIconHeadingParagraphContainer}>
                    <div className={styles.thirdHeroIconAndHeadingContainer}>

                        <div className={styles.thirdHeroIconContainer3}>
                            <img src={preview} alt="logo" className={styles.thirdHeroIcon3Image} />
                        </div>
                        <div className={styles.thirdHeroHeadingAfterIconContainer3} >
                            <h4>Sneak preview</h4>
                        </div>
                    </div>

                    <div className={styles.thirdHeroParagraphContainer3}>
                        <p>Quick preview of all snippets on your Clipboard for easy access.</p>
                    </div>
                </div>
             </div>
           
        </div>
    )
}