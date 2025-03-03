"use client"

import { useEffect, useRef, useState } from "react";
import { FiMonitor, FiLayers, FiCode, FiBarChart2 } from "react-icons/fi";

export default function Service() {
  const serviceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Akan aktif jika 20% elemen sudah terlihat
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

  const services = [
    { title: "UI/UX Design", description: "Designing intuitive and visually appealing user experiences.", icon: <FiLayers className="text-4xl text-blue-500" /> },
    { title: "Web Designer", description: "Creating modern, responsive, and aesthetic website layouts.", icon: <FiMonitor className="text-4xl text-green-500" /> },
    { title: "Web Developer", description: "Building high-performance, scalable, and secure web applications.", icon: <FiCode className="text-4xl text-red-500" /> },
    { title: "Data Analyst", description: "Transforming raw data into actionable insights to drive decision-making.", icon: <FiBarChart2 className="text-4xl text-yellow-500" /> },
  ];
  

  return (
    <section id="service" ref={serviceRef} className="flex flex-col items-center h-full w-full pt-10 pb-20 relative overflow-hidden">

      {/* Tambahkan animasi pada judul */}
      <div className={`flex flex-col justify-center items-center py-10 max-w-[75%] lg:max-w-[1000px] w-full gap-y-6 relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h1 className="text-5xl font-bold text-gray-900">My Services</h1>
        <p className="text-center lg:max-w-[75%] italic text-gray-700">
          Creating professional, engaging, and fully responsive websites that leave a lasting impression. 
          My services are designed to help businesses establish credibility and attract more customers.
        </p>
      </div>
      {/* Tambahkan animasi pada setiap kartu layanan */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1000px] lg:pt-20 px-6 relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
            <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-full">
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">{service.title}</h2>
            <p className="text-gray-600 mt-2 text-xs">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
