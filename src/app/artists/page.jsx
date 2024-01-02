"use client";
import styles from "./artist.module.scss";
import { useState } from "react";
import Project from "./project";
import Modal from "./modal";
import Contact from "../components/Contact";

const projects = [
  {
    title: "Ahmad Luthfi",
    contact: "Riso print",
    src: "1.jpg",
    color: "#8C8C8C",
    link: "https://www.instagram.com/lutpihh/",
  },
  {
    title: "Fajarallanda",
    contact: "Screen print",
    src: "1.jpg",
    color: "#e3e3e3",
    link: "https://www.instagram.com/allandafajar/",
  },

  {
    title: "Iggypoke",
    contact: "Riso print",
    src: "1.jpg",
    color: "#EFE8D3",
    link: "https://www.instagram.com/iggypoketattoo/",
  },
  {
    title: "Indah Indriyati F.",
    contact: "Riso print",
    src: "1.jpg",
    color: "#000000",
    link: "https://www.instagram.com/indahindriyantif/",
  },

  {
    title: "Kurlyminal",
    contact: "Screen print, Riso print",
    src: "1.jpg",
    color: "#706D63",
    link: "https://www.instagram.com/kurlyminal/",
  },
  {
    title: "M Fahriza Ansyari",
    contact: "Screen print",
    src: "1.jpg",
    color: "#000000",
    link: "https:instagram.com/keppett",
  },
];

export default function ArtistPage() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div>
      <div className={styles.title}>
        <p>Artist Information:</p>
        <hr />
        <h1>
          When collaborating with artists, it is important to create variant art
          prints together.
        </h1>
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
                projects={projects}
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
