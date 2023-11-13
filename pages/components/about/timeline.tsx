import React from 'react';
import Image from 'next/image';

const TimelineItem = ({ 
  imageSrc, 
  altText, 
  year, 
  position, 
  description, 
  align = 'right', 
  dashed = true,
  content 
}) => (
  <div className="flex">
      {align === 'left' && 
          <div className={`w-11/12 text-right`} style={{ marginLeft: '-300px' }}>
              <h1>{year}</h1>
              {imageSrc && <Image src={imageSrc} alt={altText} width={260} height={200}/>}
              <h3 className="text-lg font-semibold mt-2">{position}</h3>
              {description && <h4>{description}</h4>}
          </div>
      }
        {
        year && 
        <div className="w-1/12 mx-4 flex flex-col items-center">
            <div className="w-3 h-3 mt-1 border border-gray-400 rounded-full mb-2"></div> 
            <div className={`flex-grow border-l-1 ${dashed ? 'border-dashed' : 'border-solid'} border-gray-300`}></div>
        </div>
        }
      {align === 'right' && 
          <div className={`w-11/12 text-left`} style={{ marginRight: '+20px' }}>
              <h1>{year}</h1>
              {imageSrc && <Image src={imageSrc} alt={altText} width={260} height={200} />}
              <h3 className="text-lg font-semibold mt-2">{position}</h3>
              {description && <h4>{description}</h4>}
          </div>
      }
  </div>
);


const Timeline: React.FC = () => {
    return (
        <div className="my-4" style={{ marginLeft: '270px' }}>
            <TimelineItem
                imageSrc="/logo_goldsmiths.png"
                altText="Logo of Goldsmiths"
                year="2025"
                position="University"
                description="BS in Computer science"
                align="right"
                content="I am currently pursuing a degree in Computer Science with a concentration in AI, fueling my passion for technology. This academic journey complements my skill set as a software developer, further enhancing my expertise in Machine Learning and AI."
            />
            <TimelineItem
                imageSrc="/logo_pluspetrol.png"
                altText="Logo of Pluspetrol"
                align="left"
                dashed={false}
            />
            <TimelineItem
                year="2022 - Present"
                position="Sr. Planner"
                align="left"
                dashed={false}
                content="Schedule"
            />
            <TimelineItem
                year="2021 - 2022"
                position="Ssr. Schedule, budget and cost control analyst"
                align="left"
                dashed={false}
                content="Cost control"
            />
            <TimelineItem
                year="2020 - 2021"
                position="Sr. Electrical technician"
                align="left"
                dashed={false}
                content="maintenance"
            />
            <TimelineItem
                imageSrc="/logo_incae.svg"
                altText="Logo of INCAE"
                year="2025"
                position="University"
                description="Master in Business Administration"
                align="right"
                dashed={false}
                content="Earning my MBA at INCAE was one of the most challenging and rewarding experiences of my life. INCAE, established with the support of Harvard Business School (HBS) and President John F. Kennedy, is regarded as one of the best business schools in Latin America. It boasts the 'Triple Crown' accreditation from AACSB, AMBA, and EQUIS."
            />
            <TimelineItem
                imageSrc="/logo_cnel.png"
                altText="Logo of CNEL"
                year="2017 - 2018"
                position="Protection and Control Engineer"
                align="left"
                dashed={false}
                content="At the largest power distribution company in Ecuador, I was entrusted with ensuring the proper operation of protection across all business units. Additionally, I worked with SCADA systems, utilizing protocols like DNP3 and IEC 61850."
            />
            <TimelineItem
                imageSrc="/logo_espol.svg"
                altText="Logo of ESPOL"
                year="2016"
                position="University"
                description="BS in Electrical Engineering"
                align="right"
                dashed={false}
                content="Graduating among the top ten from Espol, one of Ecuador's premier universities, I earned a degree in Electrical Engineering, focused on Power Systems. This prestigious degree comes with an ABET accreditation."
            />
            <TimelineItem
                imageSrc="/logo_cepmsa.png"
                altText="Logo of Cepmsa"
                year="2017 - 2018"
                position="Project Manager"
                align="left"
                dashed={false}
                content="Electromechanical projects"
            />
        </div>
    );
}

export default Timeline;
