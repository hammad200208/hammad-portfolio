import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

// Individual Skill Bar Animation Component
const SkillBar = ({ skill }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="mb-6 bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 text-lg font-medium">
          {skill.icon}
          {skill.name}
        </div>
        <span className="font-semibold">{skill.level}</span>
      </div>
      <div className="w-full bg-blue-100 rounded-full h-2">
        <motion.div
          className="bg-blue-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.width}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const skills = [
  {
    name: "HTML5",
    level: "95%",
    icon: <FaHtml5 className="text-orange-600 text-xl" />,
    width: 95,
  },
  {
    name: "CSS3",
    level: "90%",
    icon: <FaCss3Alt className="text-blue-600 text-xl" />,
    width: 90,
  },
  {
    name: "Bootstrap",
    level: "85%",
    icon: <i className="devicon-bootstrap-plain colored text-xl"></i>,
    width: 85,
  },
  {
    name: "JavaScript",
    level: "80%",
    icon: <FaJs className="text-yellow-500 text-xl" />,
    width: 80,
  },
  {
    name: "React Js",
    level: "75%",
    icon: <i className="devicon-react-original colored text-xl"></i>,
    width: 75,
  },
  {
    name: "Git & GitHub",
    level: "70%",
    icon: (
      <div className="flex gap-2">
        <i className="devicon-git-plain colored text-xl"></i>
        <i className="devicon-github-original colored text-xl"></i>
      </div>
    ),
    width: 70,
  },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl font-semibold text-blue-600 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Skills List */}
          <div>
            {skills.map((skill, idx) => (
              <SkillBar key={idx} skill={skill} />
            ))}
          </div>

          {/* Right Side Image Animation */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="/work3.jpg"
              alt="Skills"
              className="w-[400px] rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
