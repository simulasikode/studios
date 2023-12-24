"use client";
import styles from "./nav.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";

const links = [
  {
    title: "Home",
    href: "/",
    src: "home.png",
  },
  {
    title: "Artist",
    href: "/artist",
    src: "artist.png",
  },
  {
    title: "Exhibition",
    href: "/exhibitions",
    src: "exhibitions.png",
  },
  {
    title: "Project",
    href: "/projects",
    src: "projects.png",
  },
  {
    title: "Service",
    href: "/service",
    src: "service.png",
  },
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
        </div>
      </div>
    </motion.div>
  );
}
