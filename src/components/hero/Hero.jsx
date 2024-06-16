import React from "react";
import styles from "./Hero.module.css"
import { AiOutlineSearch } from "react-icons/ai";
function Hero() {
  return <div className={styles.hero}>
          <form>
              <div className={styles.text}>
                  <label>Where</label>
                  <input type="text" placeholder="Type here..."/>
              </div>
              <div className={styles.from}>
                <span className={styles.border}></span>
                <label>From</label>
                <input type="date"/>
              </div>
              <div className={styles.until}>
                <span className={styles.border}></span>
                <label>Until</label>
                <input type="date"/>
              </div>
              <div className={styles.search_icon}>
                <AiOutlineSearch className={styles.icon}></AiOutlineSearch>
                <button className={styles.btn}>CLICK</button>
              </div>
          </form>
  </div>;
}

export default Hero;
//26 min 23 min