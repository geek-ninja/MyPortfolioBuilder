import SparklesText from '../../components/SparklesText'
import WordRotate from '../../components/WordRotate'
import ProfilePic from '../../static/img/myAvatar.jpg'
import { NeonGradientCard } from '../../components/NeonGradientCard'
import profileData from "../../data/profile.json"

function Banner() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
            <div className="w-full mb-8 flex flex-wrap items-center justify-evenly">
                <div className="flex-[0.6] text-center sm:text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                    <span className="flex text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-8xl 2xl:text-8xl font-semibold text-gray-700 dark:text-gray-200">
                        {profileData.firstName}&nbsp;
                        <WordRotate
                            className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-8xl 2xl:text-8xl font-semibold text-gray-700 dark:text-gray-200"
                            words={[profileData.lastName, "Learner", "Creator"]}
                        />
                    </span>
                    <SparklesText className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-[#ccf381] my-4" text={`I'm ${profileData.designation}`} />
                    <p className="text-2xl font-normal text-gray-700 dark:text-gray-200">{profileData.smallSummary}
                    </p>
                </div>
                <div className="py-4">
                    <NeonGradientCard className="w-[250px] h-[250px] rounded-full max-w-sm items-center justify-center text-center">
                        <img className="w-[250px] h-[250px] rounded-full object-cover" src={ProfilePic} alt='Sanekt' />
                    </NeonGradientCard>
                </div>
            </div>
        </div>
    )
}

export default Banner