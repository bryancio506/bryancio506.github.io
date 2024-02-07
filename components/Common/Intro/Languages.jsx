import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [spanish, setSpanish] = useState(0)
    const [english, setEnglish] = useState(0)
    const [portuguese, setPortuguese] = useState(0) // Step 1: New state for Portuguese
    const [japanese, setJapanese] = useState(0); // Step 4: New state for Japanese

    useEffect(() => {
        const timer = setInterval(() => {
            if (spanish < 100) {
                setSpanish(prevCount => prevCount + 1);
            }
            if (english < 88) {
                setEnglish(prevCount => prevCount + 1);
            }
            if (portuguese < 10) { // Assuming proficiency in Portuguese is 75%
                setPortuguese(prevCount => prevCount + 1);
            }
            if (japanese < 5) { // New condition for Japanese proficiency
                setJapanese(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [spanish, english, portuguese, japanese]) // Step 2: Update useEffect dependencies

    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row flex-wrap items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#23A8F2" type="circle" percent={spanish} size={72} />
                        <span className='text-xs font-bold text-Snow'>Spanish</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#23A8F2" type="circle" percent={english} size={72} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#23A8F2" type="circle" percent={portuguese} size={72} />
                        <span className='text-xs font-bold text-Snow'>Portuguese</span> {/* Step 3: New Progress component */}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#23A8F2" type="circle" percent={japanese} size={72} />
                        <span className='text-xs font-bold text-Snow'>Japanese</span> {/* Step 3: New Progress component */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages