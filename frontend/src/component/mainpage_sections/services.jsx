import React from "react";
import { motion } from "framer-motion";
import servLeft from "../../images/service-left.jpg";
import service1 from "../../images/service-1.png";
import service2 from "../../images/joystick.png";
import service4 from "../../images/service-4.png";

const services = [
  {
    image: service1,
    title: "Disabled Individual",
    description:
      "Benefits visually impaired individuals by recommending music based on emotional cues rather than visual facial expressions.",
  },
  {
    image: service2,
    title: "Gaming",
    description:
      "Adapts in-game music to match player emotions and enhance immersion.",
  },
  {
    image: servLeft,
    title: "Mental Health & Therapy",
    description:
      "Utilizes music to support emotional well-being, relaxation, and therapy.",
  },
  {
    image: service4,
    title: "Social Media",
    description:
      "Enhances posts and videos with mood-appropriate background music for engaging content.",
  },
];

export const Services = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="container px-6 mx-auto lg:px-12">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* Left Video / Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full overflow-hidden shadow-xl lg:w-1/2 rounded-2xl"
          >
            <img
              src={servLeft}
              alt="Service Visual"
              className="object-cover w-full h-full"
            />
            <a
              href="https://www.youtube.com/watch?v=JGwWNGJdvx8"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="p-6 transition rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm">
                <i className="text-5xl text-white fa fa-play"></i>
              </div>
            </a>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid w-full grid-cols-1 gap-6 lg:w-1/2 sm:grid-cols-2"
          >
            {services.map((srv, index) => (
              <div
                key={index}
                className="p-6 text-center transition bg-white shadow-lg rounded-xl hover:shadow-2xl"
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h4 className="mb-2 text-xl font-bold text-slate-800">
                  {srv.title}
                </h4>
                <p className="text-sm text-gray-600">{srv.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
