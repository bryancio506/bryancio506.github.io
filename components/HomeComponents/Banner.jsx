import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import { Link } from 'react-scroll';

const Banner = () => {
    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-LightGray/10 w-[95%] h-[90%] mx-auto p-4 rounded-xl overflow-hidden flex flex-col items-center justify-center">
                    <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold mb-4">Hi, Pura Vida!</h1>
                    <div className="font-cascadia-normal text-Snow text-lg sm:text-xl xl:text-2xl  h-20 lg:h-auto flex items-center justify-center">
                        <span>{"<"}<span className="text-Green font-bold ">div</span>{">"} I am a <span className="inline-block"></span> </span>
                        <Typewriter
                            options={{
                                strings: [
                                    'Full Stack Developer',
                                    'DevOps Developer',
                                    'Free Software Enthusiast',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <span> {"</"}<span className="text-Green font-bold">div</span>{">"} </span>
                    </div>
                    <Link spy={true}  smooth={true} duration={500} offset={-50} className="button mt-4">Explore</Link>
                </div>
            </div>
        </BannerLayout>
    )
}

export default Banner;