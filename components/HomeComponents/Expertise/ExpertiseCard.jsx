import CardLayout from "../../Common/CardLayout"

const ExpertiseCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="h-full space-y-2 p-8 card_stylings">
                <div className="flex items-center">
                        {/* Add your img tag here */}
                        <img src={data.image} alt="Icon" className="mr-2" style={{ width: '60px' }}/>
                        <div className="flex-initial text-[17px] text-Snow font-medium">{data.title}</div>
                </div>
                <div className="text-sm text-LightGray font-normal">
                    {data.desc}
                </div>
            </div>
        </CardLayout>
    )
}

export default ExpertiseCard