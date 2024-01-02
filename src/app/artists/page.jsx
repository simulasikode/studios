"use client";
import styles from "./artist.module.scss";
import { useState } from "react";
import Project from "./project";
import Modal from "./modal";
import Contact from "../components/Contact";

const projects = [
  {
    title: "M Fahriza Ansyari",
    contact: "Screen print",
    src: "1.jpg",
    color: "#000000",
  },
  {
    title: "Ahmad Lutfi",
    contact: "Riso print",
    src: "1.jpg",
    color: "#8C8C8C",
  },
  {
    title: "Iggypoke",
    contact: "riso print",
    src: "1.jpg",
    color: "#EFE8D3",
  },
  {
    title: "Kurlyminal",
    contact: "screen print",
    src: "1.jpg",
    color: "#706D63",
  },
];

export default function ArtistPage() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div>
      <div className={styles.title}>
        <p>Artist Information:</p>
        <hr />
        <h1>Partnering with artists to curate unique variants of art prints</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.table}>
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                contact={project.contact}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </div>
      <Contact />
    </div>
  );
}
