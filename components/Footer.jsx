import { AiFillCopyrightCircle } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaDownload} from 'react-icons/fa';
import Download from '../components/Common/Intro/Download';

const Footer = () => {
    return (
        <div id='intro' className="mt-4 mb-10 lg:mb-0">

            <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
                <div className='flex items-center'>

                    <a href="https://wa.me/50688615958" target='_blank' rel="noreferrer">
                        +506 88615958
                    </a>
                </div>
                <div className='flex items-center'>

                    <a href='/Bryan_Romero_Chinchilla_CV.pdf' target='_blank' className='flex items-center gap-x-4'>
                    <span className='text-Snow tex-download '>Download Resume</span>
                    <span className="flicker-animation footer-download" ><FaDownload/></span>
                    </a>
                </div>
                {/* <div className="flex items-center">
                    <a href='https://www.fiverr.com/codeworthy' target="_blank" rel="noreferrer">Made with ❤️ by <span className='font-bold'>Osama</span></a>
                </div> */}
                <div className="hidden md:flex items-center">
                    <div className="mr-1 text-base">
                        <MdMail />
                    </div>
                    <a  href="mailto:r0ch1bryan@gmail.com" target='_blank' rel="noreferrer">
                        r0ch1bryan@gmail.com
                    </a>
                </div>
            </div>
            {/* <Download icon={<FaDownload />} /> */}
{/* <Download icon={<FaDownload />} />
            <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
            <div className='flex items-center'>
            <Download icon={<FaDownload />} />
            </div>
                
            </div> */}
            
        </div>
    )
}

export default Footer