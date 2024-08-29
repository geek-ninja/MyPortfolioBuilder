import { MagicCard } from "../../components/MagicCard"
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { BorderBeam } from "../../components/BorderBeam";
import Particles from "../../components/Particles";
import { SiMongodb } from "react-icons/si";
import { SiElasticsearch } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

interface ThemeProps {
    isDark?: boolean;
}

const skillIcons = [
    {
        icon: <FaAngular />,
        name: "Angular"
    },
    {
        icon: <FaReact />,
        name: "React"
    },
    {
        icon: <FaNodeJs />,
        name: "NodeJs"
    },
    {
        icon: <FaHtml5 />,
        name: "HTML"
    },
    {
        icon: <FaCss3Alt />,
        name: "CSS"
    },
    {
        icon: <IoLogoJavascript />,
        name: "Javascript"
    },
    {
        icon: <SiTypescript />,
        name: "Typescript"
    },
    {
        icon: <FaPython />,
        name: "Python"
    },
    {
        icon: <SiMongodb />,
        name: "MongoDB"
    },
    {
        icon: <SiElasticsearch />,
        name: "Elastic Search"
    },
    {
        icon: <SiPostman />,
        name: "Postman"
    },
    {
        icon: <FaGithub />,
        name: "Github"
    },
    {
        icon: <FaGitlab />,
        name: "Gitlab"
    }
]

const Skills: React.FC<ThemeProps> = ({ isDark }) => {

    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(isDark ? "#ffffff" : "#000000");
    }, [isDark]);

    return (
        <div id = "skills" data-aos="fade-up" className="relative overflow-hidden mb-16 px-4 sm:px-4 md:px-20 lg:px-24 xl:px-24 2xl:px-24">
            <div className="relative flex w-full flex-col overflow-hidden rounded-lg border dark:border-[#27272a] bg-[#FAFBFB] bg-gradient-to-br from-[#B1D9C6]/10 to-[#158B52]/10 dark:bg-black md:shadow-xl">
                <BorderBeam size={250} duration={12} delay={9} />
                <p className="pt-3 sm:pt-3 md:pt-5 lg:pt-5 xl:pt-5 2xl:pt-5 px-10 text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-[#adfc15] font-semibold ">My Skills</p>
                <div className="flex justify-center flex-wrap py-3 sm:py-3 md:py-5 lg:py-5 xl:py-5 2xl:py-5">
                    {
                        skillIcons.map((icon, index) => {
                            return (
                                <MagicCard
                                    key={index}
                                    className="flex  w-36 z-10 p-4 mx-1 sm:mx-1 md:mx-4 lg:mx-8 xl:mx-4 2xl:mx-4 mb-8  cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl overflow-hidden rounded-lg border dark:border-[#27272a] bg-[#FAFBFB] bg-gradient-to-br from-[#B1D9C6]/10 to-[#158B52]/10 dark:bg-black md:shadow-xl"
                                    gradientColor={!isDark ? "#D9D9D955" : "#262626"}
                                >
                                    <div className="flex flex-col items-center justify-center p-4">
                                        {icon.icon}
                                        <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-200">{icon.name}</p>
                                    </div>

                                </MagicCard>
                            )
                        })
                    }
                </div>
            </div>
            <Particles
                className="absolute inset-0"
                quantity={200}
                ease={80}
                color={color}
                refresh
            />
        </div>
    )
}

export default Skills