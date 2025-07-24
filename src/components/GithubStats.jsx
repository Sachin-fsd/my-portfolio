import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const GITHUB_USERNAME = "Sachin-fsd";
const GITHUB_PROFILE = "https://github.com/Sachin-fsd";
const GITHUB_LOGO = "https://github.com/Sachin-fsd.png";

const statCards = [
    {
        src: "https://awesome-github-stats.azurewebsites.net/user-stats/Sachin-fsd?cardType=github&theme=tokyonight&preferLogin=false",
        alt: "Awesome GitHub Stats",
        title: "Awesome Stats",
    },
    {
        src: "https://github-readme-stats.vercel.app/api/top-langs/?username=Sachin-fsd&layout=compact&theme=tokyonight",
        alt: "Top Languages",
        title: "Top Languages",
    },
    {
        src: "https://streak-stats.demolab.com/?user=Sachin-fsd&theme=tokyonight",
        alt: "GitHub Streak Stats",
        title: "Streak",
    },
];

const GithubStats = () => (
    <section className="mt-12 sm:mt-20 w-full px-4">
        <div className="mb-8 sm:mb-10">
            <p className={`${styles.sectionSubText} text-center`}>Open Source</p>
            <h2 className={`${styles.sectionHeadText} text-center`}>My GitHub Stats</h2>
        </div>
        <div className="flex flex-col items-center mb-6 sm:mb-8">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
            >
                <img
                    src={GITHUB_LOGO}
                    alt="GitHub Logo"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-secondary mb-4 object-cover"
                />
                <h3 className="text-white text-[18px] sm:text-[22px] font-bold mb-2">
                    <a
                        href={GITHUB_PROFILE}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#915EFF] transition-colors duration-300"
                    >
                        {GITHUB_USERNAME}
                    </a>
                </h3>
                <p className="text-secondary text-[14px] sm:text-[16px] text-center px-4">Full Stack Developer | Open Source Enthusiast</p>
            </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
            {statCards.map((card, idx) => (
                <motion.div
                    key={card.alt}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 * idx }}
                    viewport={{ once: true }}
                    className="bg-tertiary rounded-2xl shadow-card p-4 sm:p-6 lg:p-8 flex flex-col items-center w-full lg:w-1/3 min-h-[350px] sm:min-h-[400px]"
                >
                    <span className="text-white font-semibold mb-3 sm:mb-4 text-lg sm:text-xl text-center">{card.title}</span>
                    <div className="flex-1 w-full flex items-center justify-center">
                        <img
                            src={card.src}
                            alt={card.alt}
                            className="w-full max-w-full h-auto max-h-[250px] sm:max-h-[300px] object-contain rounded-lg"
                            loading="lazy"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

export default GithubStats;