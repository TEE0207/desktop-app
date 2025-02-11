import React, { useState } from "react";
import styles from "./Footer/SecondFooter.module.css";  // Ensure this is correctly imported

export default function SocialMediaIcon({logo}) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      className={styles.secondFooterSocialMediaImage}
      width="24"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {logo && React.cloneElement(logo, { fill: hovered ? "#26BBA4" : "#4C545C" })}
    </svg>
  );
}
