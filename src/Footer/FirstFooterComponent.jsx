import ButtonComponent from "../LogosNButton/ButtonComponent";
import styles from "./FirstFooter.module.css"

export default function FirstFooterComponent({title, paragraph}){


    return(
        <div className={styles.firstFooterHeadingParagraphAndButtonContainer}>
            <div className={styles.firstFooterHeadingAndParagraphContainer}>
                <div className={styles.firstFooterHeadingContainer}>
                    <h3>{title}</h3>
                </div>

                <div className={styles.firstFooterParagraph}>
                    <p>{paragraph}</p>
                </div>

            </div>

            <ButtonComponent />

        </div>
    )
}