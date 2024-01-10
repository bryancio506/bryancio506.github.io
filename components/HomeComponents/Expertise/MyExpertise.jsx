import ExpertiseCard from "./ExpertiseCard"
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import expertiseData from "../../../data/expertise.json"


const MyExpertise = () => {

    const data = expertiseData;

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

                {
                    data?.map((item, key) => (
                        <ExpertiseCard key={key} data={item} />
                    ))
                }
            </div>
        </>
    )
}

export default MyExpertise