"use client";

import { useEffect, useRef, useState } from "react";


export default function Project() {
  const serviceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "PPID KPK",
      description:
        "A public information service system by KPK, ensuring transparency and easy access for the public.",
      image: "/img/ppid.png",
      link: "https://ppid.kpk.go.id",
    },
    {
      id: 2,
      title: "PPSDMAP Dephub",
      description:
        "A training and human resource development management platform for the Ministry of Transportation.",
      image: "/img/ppsdmap.png",
      link: "https://ppsdmap.bpsdm.dephub.go.id",
    },
    {
      id: 3,
      title: "Dapur GOBA",
      description:
        "A catering business offering delicious and high-quality meals with excellent customer service.",
      image: "/img/dapurgoba.png",
      link: "https://dapurgoba.github.io/",
    },
  ];  

  return (
    <section
      ref={serviceRef}
      className="flex flex-col items-center h-full w-full pb-20 relative overflow-hidden"
      id="project"
    >
      {/* Judul Section */}
      <div
        className={`flex flex-col py-10 max-w-[75%] lg:max-w-[1000px] w-full gap-y-6 relative transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl font-bold text-gray-900">My Latest Project</h1>
        <p className="max-w-[75%] italic text-gray-700">
          Take a look at my latest projects, where innovation meets
          functionality. Every website is designed to impress and perform
          seamlessly.
        </p>
      </div>

      {/* Grid Project */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 px-6 w-full max-w-[1200px]">
        {projects.map((project) => (
<div
  key={project.id}
  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-700  group hover:scale-105 ${
    isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
  }`}
>
  <a
    href={`/project/${project.id}`}
    className="relative block"
    rel="noopener noreferrer"
  >
    {/* Gambar Project */}
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-[400px] object-cover"
    />

{/* Overlay Box (Perbaikan) */}
<div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden duration-500 group-hover:w-full">
  <div className="flex flex-col items-center justify-center h-full p-3 text-left text-white font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <h1 className="text-lg">{project.title}</h1>
    <br />
    <p className="text-md font-light max-w-[75%]">{project.description}</p>
    <br />
    <p className="max-w-[75%] text-md font-light">Read more...</p>
  </div>
</div>


  </a>
</div>

        ))}
      </div>
        <br />
    </section>
  );
}
