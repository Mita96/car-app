import React from "react";
import styles from "./Driver.module.css";
import driver from "../../images/driver.jpg"
function Driver() {
  return <div className={styles.drive}>
        <div className={styles.left}>
            <img src={driver} alt="" />
        </div>
        <div className={styles.right}>
            <h2>Lorem ipsum dolor sit <span>amet, consectetur adipisicing elit.</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quod ullam in et harum incidunt magni molestiae deleniti eaque impedit.</p>
            <button>Lorem, ipsum.</button>
        </div>
  </div>;
}

export default Driver;

//1h 04min 24 sec