"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import { sendGTMEvent } from "@next/third-parties/google";

const printSizes = [
  { label: "Custom paper", value: 0 },
  {
    label:
      "Paper size 8.3 x 11.7 inches (A4) — Print area 6.9 x 9.8 inches (B5)",
    value: 17000,
  }, // IDR
  {
    label:
      "Paper size 11.7 × 16.5 inches (A3)  — Print area 9.8 × 13.9 inches (B4)",
    value: 26000,
  }, // IDR
  {
    label:
      "Paper size 13 × 19 inches (A3+)  — Print area 11.7 × 16.5 inches (A3)",
    value: 34500,
  }, // IDR

  {
    label:
      "Paper size 16.5 x 23.4 inches (A2) — Print area 9.7 × 27.8 inches (B2)",
    value: 57000,
  }, // IDR
];

const baseCostPerCapital = 651000; // IDR - Adjust this based on your base cost per sheet
const additionalCostPerColor = 10500; // IDR - Adjust this based on your cost per color

export default function Home() {
  const [costPerSheet, setCostPerSheet] = useState("");
  const [colors, setColors] = useState("");
  const [selectedPrintSize, setSelectedPrintSize] = useState(printSizes[0]);
  const [totalCost, setTotalCost] = useState("");

  const sendGTMEvent = () => {
    // Your logic to send GTM event goes here
    // For example:
    window.dataLayer.push({
      event: "calculateCostClicked",
      value: "xyz",
    });
  };

  const calculateCost = () => {
    const costPerSheetValue = parseFloat(costPerSheet.replace(/[^\d]/g, "")); // Remove non-numeric characters
    const colorsValue = parseFloat(colors.replace(/[^\d]/g, "")); // Remove non-numeric characters
    const printSizeValue = selectedPrintSize.value;
    sendGTMEvent();

    // Calculate total cost including base cost per sheet and additional cost per color
    const subtotal =
      (baseCostPerCapital / costPerSheetValue) * 2 +
      colorsValue * additionalCostPerColor +
      printSizeValue;

    // You might have other fees, discounts, or calculations to consider

    // Example: Apply a 10% discount for quantities over 100 (excluding print size cost)
    const discountThreshold = 50;
    const discountPercentage = costPerSheetValue > discountThreshold ? 0.1 : 0;

    const discount = subtotal * discountPercentage;
    const discountedTotal = subtotal - discount;

    setTotalCost(discountedTotal.toFixed(2));
  };

  return (
    <div className={styles.formula}>
      <div className={styles.container}>
        <h1> Calculated your Art print</h1>
        <hr />
        <div>
          <label>
            Sheet of Paper
            <input
              type="text"
              className={styles.input}
              value={new Intl.NumberFormat("id-ID").format(costPerSheet)}
              onChange={(e) => setCostPerSheet(e.target.value)}
            />
          </label>
          <label>
            Number of Colors
            <input
              type="text"
              className={styles.input}
              value={new Intl.NumberFormat("id-ID").format(colors)}
              onChange={(e) => setColors(e.target.value)}
            />
          </label>
          <label>
            Print Size
            <select
              className={styles.input}
              value={selectedPrintSize.label}
              onChange={(e) => {
                const selectedSize = printSizes.find(
                  (size) => size.label === e.target.value,
                );
                setSelectedPrintSize(selectedSize || printSizes[0]);
              }}
            >
              {printSizes.map((size) => (
                <option key={size.label} value={size.label}>
                  {size.label}
                </option>
              ))}
            </select>
          </label>
          <button className={styles.button} onClick={calculateCost}>
            Calculate
          </button>
          <h3>
            Total Cost per Sheet: IDR{" "}
            <span>{new Intl.NumberFormat("id-ID").format(totalCost)}</span>
          </h3>
          <hr />
          <p>Note: Contact us for custom paper </p>
        </div>
        <div>
          <p>Calculator Version 0.1.0</p>
        </div>
      </div>
    </div>
  );
}
