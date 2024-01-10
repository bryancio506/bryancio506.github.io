import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import backgroundData from '../data/background.json';


function Background() {

    const data = backgroundData;

    return (
        <BannerLayout>
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
                    {data && data[0]?.eduCards?.map((item, key) => (
                        <Edu_Card key={key} data={item} />
                    ))}

                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>
                        {data && data[1]?.expCards?.map((item, key) => (
                        <Exp_Card key={key} data={item} />
                    ))}

                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;
