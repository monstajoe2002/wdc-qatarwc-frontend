import React, { useEffect } from "react";
import styles from "../styles/Reservations.module.css";
export default function Reservations() {
  return (
    <>
      <h1>Confirm purchase</h1>
      <div className={styles.reservation}>
        <h2>Reservation details</h2>
        <div className={styles["reservation-body"]}>
          <p>
            <strong>Match:</strong> Spain vs Costa Rica
          </p>
          <p>
            <strong>Time:</strong> 20:00
          </p>
          <p>
            <strong>Category:</strong> 1
          </p>
          <p>
            <strong>Quantity:</strong> 2
          </p>
        </div>
        <div className={styles["reservation-footer"]}>
          <h4>
            <strong>Total:</strong> $150
          </h4>
        </div>
      </div>
      <button className={styles["btn-primary"]}>Buy Now</button>

    </>
  );
}
