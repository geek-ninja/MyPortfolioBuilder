import { BentoCard, BentoGrid } from "../../components/BentoLayout";
import { BorderBeam } from "../../components/BorderBeam";
import profileData from "../../data/profile.json"

// const features = [
//   {
//     Icon: "",
//     name: "Save your files",
//     description: "We automatically save your files as you type.",
//     href: "#",
//     cta: "Learn more",
//     className: "col-span-3 lg:col-span-1",
//     background: (<h1>hello</h1>
//     ),
//   },
//   {
//     Icon: "",
//     name: "Notifications",
//     description: "Get notified when something happens.",
//     href: "#",
//     cta: "Learn more",
//     className: "col-span-3 lg:col-span-2",
//     background: (
//       <h1>hello</h1>
//     ),
//   },
//   {
//     Icon: "",
//     name: "Integrations",
//     description: "Supports 100+ integrations and counting.",
//     href: "#",
//     cta: "Learn more",
//     className: "col-span-3 lg:col-span-2",
//     background: (
//       <h1>hello</h1>
//     ),
//   },
//   {
//     Icon: "",
//     name: "Calendar",
//     description: "Use the calendar to filter your files by date.",
//     className: "col-span-3 lg:col-span-1",
//     href: "#",
//     cta: "Learn more",
//     background: (
//       <h1></h1>
//     ),
//   },
// ];

const Projects = () => {
  return (
    <div id="projects" data-aos="fade-up" className="px-4 mb-16 mt-2 sm:px-4 md:px-20 lg:px-24 xl:px-24 2xl:px-24">
      <div className="relative flex w-full flex-col overflow-hidden rounded-lg border dark:border-[#27272a] bg-[#FAFBFB] bg-gradient-to-br from-[#B1D9C6]/10 to-[#158B52]/10 dark:bg-black md:shadow-xl">
        <BorderBeam size={250} duration={12} delay={9} />
        <div className="py-3 sm:py-3 md:py-5 lg:py-5 xl:py-5 2xl:py-5 px-10">
          <p className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-[#adfc15] font-semibold mb-4">My Projects</p>
          <BentoGrid>
            {profileData.projects.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}

export default Projects