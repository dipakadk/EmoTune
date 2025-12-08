import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../images/hero-image.png";
import Nav from "../Nav"

export  const About = () => {
  return (
    <>
      <Nav />
    <section className="relative h-full py-20 overflow-hidden text-white">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] animate-gradient-slow"></div>
      
      {/* Floating music notes */}
      <div className="absolute inset-0 opacity-10">
        <div className="music-notes"></div>
      </div>

      {/* Content container with glass effect */}
      <div className="container relative z-10 px-6 mx-auto lg:px-12">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute transition duration-1000 rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur group-hover:opacity-75"></div>
              <img
                src={aboutImage}
                alt="About EmoTune"
                className="relative h-auto transition-all duration-500 transform rounded-lg hover:scale-105 hover:shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/50 to-transparent rounded-lg"></div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="w-full p-8 shadow-2xl lg:w-1/2 backdrop-blur-sm bg-white/5 rounded-xl"
          >
            <motion.h2 
              className="mb-4 text-5xl font-extrabold text-transparent transition-transform duration-300 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              About EmoTune
            </motion.h2>
            <h3 className="mb-6 text-2xl font-semibold text-purple-300">DJ DBD</h3>
            <p className="text-lg leading-relaxed text-purple-100 ">
              We help move your mind, body, and soul by delivering tracks that
              stand out from the norm. Our mission is to connect emotion and
              rhythm — crafting an experience that transcends ordinary music.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default About;