"use client";
import React from "react";
import styles from "./style.module.scss";

export default function index({ index, title, contact, setModal }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <div>
        <h2>{title}</h2>
        <span>
          <p>{contact}</p>
        </span>
      </div>
    </div>
  );
}
