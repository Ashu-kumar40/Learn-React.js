import React from 'react'
import styles from "./CSS/Style.module.css"
import styles1 from "./CSS/Style1.module.css"
export default function StyleModule() {
  return (
    <div>
      <h1 className={styles.heading}>This div has Style module</h1>
      <h1 className={styles1.heading}>This div has Style 1 module</h1>
      <p className={styles.heading}>The benificial of using style module is that it will not effect the other components. if we use the same class name in other components then it will not effect the other components.</p>
    </div>
  )
}
