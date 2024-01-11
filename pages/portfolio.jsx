import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import portfolioData from "../data/portfolio.json"


const Portfolio = () => {

    const data = portfolioData;

    return (
        <BannerLayout>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">

                {
                    data?.map((item, key) => (
                        <PortfolioCard key={key} data={item} />
                    ))
                }


            </div >
            <br />
            <br />
            <br />
            <Footer />
        </BannerLayout >
    );
};

export default Portfolio;
