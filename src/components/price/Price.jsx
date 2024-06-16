import React from "react";
import styles from "./Price.module.css"

function Price() {
  return <div className={styles.price} >
    <div className={styles.heading}>
        <h2>Lorem, ipsum dolor.</h2>
        <div className={styles.text_bg}>
            <p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quis.</span>
            </p>
        </div>
    </div>
    <div className={styles.container}>
        <div className={styles.card}>
            <img src="https://images.pexels.com/photos/3894079/pexels-photo-3894079.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <div className={styles.content}>
                <h3>Rolls Royce</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://images.pexels.com/photos/16636054/pexels-photo-16636054/free-photo-of-black-car-on-narrow-countryside-road.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <div className={styles.content}>
                <h3>Peugeot</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://images.pexels.com/photos/11966284/pexels-photo-11966284.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <div className={styles.content}>
                <h3>Citroën</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://images.pexels.com/photos/1005633/pexels-photo-1005633.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <div className={styles.content}>
                <h3>Renault</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVnYXR0aXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <div className={styles.content}>
                <h3>Bugatti</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <div className={styles.content}>
                <h3>Mercedes Benz</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <div className={styles.content}>
                <h3>Audi</h3>
            </div>
        </div>
    </div>
  </div>;
}

export default Price;
