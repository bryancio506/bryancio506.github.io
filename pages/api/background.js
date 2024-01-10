const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Tecnológico de Costa Rica',
                degree: 'BS, Computer Science',
                detail: "Bachelor's Degree in Computer Science from Tecnológico de Costa Rica.",
                year: '2017-Current'
            },
            {
                id: 1,
                title: 'C.T.P Mercedes Norte',
                degree: 'Middle Tecnician, Informatics',
                detail: "Software Development, Computer Equipment Maintenance,administrative Computer Environment, Computer Networks, IT",
                year: '2013-2015'
            },
            {
                id: 2,
                title: 'C.T.P Mercedes Norte',
                degree: 'High School Diploma',
                detail: "High School Diploma from C.T.P Mercedes Norte",
                year: '2013-2015'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Intel Corporation',
                role: 'Software Engineer - II',
                url: 'https://www.intel.com/',
                desc: `•During my time at Intel Corporation in Costa Rica, I played a pivotal role in automation and testing. I specialized in building Python automation scripts, showcasing my proficiency in scripting languages. I navigated various operating systems like Red Hat Linux and Windows Server, working across diverse platforms such as Servers, NUCs, and virtual machines for automated testing. Notably, I integrated these scripts with Intel's proprietary services, demonstrating my collaborative approach and ensuring efficient automated test result delivery.`,
                year: '07/2022 - 09/2023',
                location: 'Belen, Costa Rica'
            },
            {
                id: 2,
                title: 'Cecropia Solutions',
                role: 'Software Developer',
                url: 'http://www.cecropiasolutions.com/',
                desc: `I demonstrated a diverse skill set by building automated CI/CD pipelines on Bitbucket for Python 3 Flask applications and on Azure DevOps for C# .NET applications, incorporating Bash scripts for efficient solution rebuilding. Additionally, I optimized Docker container creation based on load tests, ensuring resource efficiency. Managing MQTT IoT solutions, I implemented Mosquitto broker technology, Prometheus, and Grafana for monitoring key metrics. Further, I developed Python and Bash CLI applications for automatic solution reconstruction in a DevOps context. In the realm of data analysis, I created an algorithm for merging Salesforce data using Azure Databricks. Complementing this hands-on work, I dedicated a month and a half to comprehensive theoretical and practical training in DevOps fundamentals, containers, cloud infrastructure, AWS, scripting, and CI/CD pipelines. This experience highlights my expertise in building robust pipelines, optimizing containerization, and leveraging advanced technologies for IoT solutions and data analysis.`,
                year: '04/2021 - 04/2022',
                location: 'San Jose, Costa Rica'
            },
            {
                id: 3,
                title: 'Unilver',
                role: 'Full Stack Engineer',
                url: 'https://www.unilever.com/',
                desc: `I spearheaded the design and implementation of a Golang Monolithic centralized system, revolutionizing paperless operations and enabling sophisticated data analysis across various domains like OEE, giveaway, WO, MES, and QMS. To enhance reporting capabilities, I developed microservices in Python, generating insightful reports and statistics via email. My involvement in multidisciplinary engineering encompassed IoT and industrial automation projects, focusing on improving industrial machine efficiency and achieving cost savings through data analysis. Additionally, I supervised and facilitated the enhancement of the industrial network. Recognizing the importance of efficient web servers, I optimized them for low-power networks, leveraging NGINX to compress traffic and adhering to web optimization guides, significantly improving load times. To streamline internal processes, I created Excel macros, enhancing company spreadsheets and facilitating the workflow for line supervisors and process engineers. This multifaceted experience underscores my proficiency in system design, microservices development, industrial automation, network optimization, and process improvement through technology integration`,
                year: '04/2019 - 04/21',
                location: 'Belen, Costa Rica'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
