import { BorderBeam } from '../../components/BorderBeam'
import profileData from '../../data/profile.json'

const Experience = () => {
    return (
        <div id="experience" data-aos="fade-up" className="px-4 mb-16 mt-2 sm:px-4 md:px-20 lg:px-24 xl:px-24 2xl:px-24">
            <div className="relative flex w-full flex-col overflow-hidden rounded-lg border dark:border-[#27272a] bg-[#FAFBFB] bg-gradient-to-br from-[#B1D9C6]/10 to-[#158B52]/10 dark:bg-black md:shadow-xl">
                <BorderBeam size={250} duration={12} delay={9} />
                <div className="py-3 sm:py-3 md:py-5 lg:py-5 xl:py-5 2xl:py-5 px-10">
                    <p className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-[#adfc15] font-semibold mb-4">My Experience</p>
                    {
                        profileData.experience.map((exp, index) => {
                            return (
                                <ul className="list-disc" key={index}>
                                    <li className="text-base font-normal text-gray-700 dark:text-gray-200 mb-2">
                                        {exp}
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience