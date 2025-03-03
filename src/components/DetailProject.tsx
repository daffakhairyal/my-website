"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { SiSitepoint } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  stack: string;
  duration:string;
}

const movies = [
    {
      id: 1,
      title: "PPID KPK",
      rating: "13+",
      year: 2024,
      image: "/img/ppid.png",
      description:
        "A public information service system by KPK, ensuring transparency and easy access for the public.",
        stack: "Vue JS + Laravel",
        duration: "3 months",
    },
    {
      id: 2,
      title: "PPSDMAP Dephub",
      rating: "13+",
      year: 2025,
      image: "/img/ppsdmap.png",
      description:
        "A training and human resource development management platform for the Ministry of Transportation.",
        stack: "Laravel",
        duration: "3 months",
    },
    {
      id: 3,
      title: "Dapur GOBA",
      rating: "13+",
      year: 2022,
      image: "/img/dapurgoba.png",
      description:
        "A catering business offering delicious and high-quality meals with excellent customer service.",
        stack: "HTML, CSS, JS",
        duration: "3 months",
    },
  ];

const projects: Project[] = [
  {
    id: 1,
    title: "PPID KPK",
    description:
      "A public information service system by KPK, ensuring transparency and easy access for the public.",
    image: "/img/ppid.png",
    link: "https://ppid.kpk.go.id",
    stack: "Vue JS + Laravel",
    duration: "3 months",
  },
  {
    id: 2,
    title: "PPSDMAP Dephub",
    description:
      "A training and human resource development management platform for the Ministry of Transportation.",
    image: "/img/ppsdmap.png",
    link: "https://ppsdmap.bpsdm.dephub.go.id",
    stack: "Laravel",
    duration: "3 months",
  },
  {
    id: 3,
    title: "Dapur GOBA",
    description:
      "A catering business offering delicious and high-quality meals with excellent customer service.",
    image: "/img/dapurgoba.png",
    link: "https://dapurgoba.github.io/",
    stack: "HTML, CSS, JS",
    duration: "3 months",
  },
];

export default function DetailProject() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const selectedProject = projects.find((p) => p.id === Number(id));
    setProject(selectedProject || null);
  }, [id]);

  if (!project) {
    return (
      <motion.div
        className="flex items-center justify-center h-screen bg-gray-900 text-white text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Project not found
      </motion.div>
    );
  }

  return (
    <motion.section>
    <motion.section
      className="relative w-full h-screen bg-gray-900 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      <motion.div
        className="relative z-10 flex flex-col text-center max-w-2xl px-6 md:px-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">{project.title}</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">{project.description}</p>
        <div className="mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-bold text-lg rounded-lg shadow-lg hover:bg-gray-300 transition transform hover:scale-105"
          >
            <SiSitepoint /> Visit Project
          </a>
        </div>
      </motion.div>
    </motion.section>
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-10 px-8 lg:px-20 bg-black text-white">
        <div className="">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">{project.title}</h1>
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-md text-sm">{project.stack}</span>
          </div>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          <div className="flex items-center gap-4 mb-6">
            <Image src={project.image} width={200} height={200} alt={project.title} className="rounded-lg" />
            <div>
              <p className="text-gray-400 text-xs">Duration</p>
              <p className="text-white font-semibold">{project.duration}</p>
            </div>
          </div>
          <Link href={project.link} target="_blank">
            Visit Website
          </Link>
        </div>
      </section>
    </motion.section>
    <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
    <section className="py-10 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6 px-8 lg:px-20">Check This Out</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 lg:px-20">
      {movies.map((movie) => (
  <motion.a
    key={movie.id}
    href={`/project/${movie.id}`} // Pastikan setiap movie memiliki properti link
    className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-navy-900 hover:scale-105 duration-500"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <img
      src={movie.image}
      alt={movie.title}
      className="w-full h-52 object-cover "
    />
    <div className="p-4">
      <h3 className="text-lg font-bold">{movie.title}</h3>
      <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
        <span>{movie.year}</span>
      </div>
      <p className="text-sm text-gray-300 mt-2">{movie.description}</p>
    </div>
  </motion.a>
))}

      </div>
    </section>
    </motion.section>
    </motion.section>
  );
}
