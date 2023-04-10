import React, { useState } from "react";
import img4 from "../assets/images/project-img4.png";
import img2 from "../assets/images/project-img2.png";
import img3 from "../assets/images/project-img3.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);
  const projects = [
    {
      id: 1,
      title: "Yotube Clone",
      description: <a href="https://roaring-zuccutto-520680.netlify.app/" target="_blank">"Project on Netlify"</a>,
      img: img4,
    },
    {
      id: 2,
      title: "E-commerce site",
      description: <a href="https://chimerical-puppy-0e222e.netlify.app/" target="_blank">"Project on Netlify"</a>,
      img: img2,
    },
    {
      id: 3,
      title: "First site",
      description: <a href="https://makar789654.github.io/makar7879654.ex1.github.io/" target="_blank">"Project on GitHub"</a>,
      img: img3,
    }
   
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default Projects;
