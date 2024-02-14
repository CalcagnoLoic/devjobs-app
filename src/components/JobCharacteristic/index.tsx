import { JobOffer } from "../../types/types";

interface JobCharacteristicProps {
  content: string;
  jobData: JobOffer;
  listStyle: string;
}

const Component = ({ content, jobData, listStyle }: JobCharacteristicProps) => (
  <div className="mt-12 text-lynch">
    <h2 className="text-xl font-bold text-mirage">{content}</h2>
    <p className="mt-7 leading-7 text-lynch">{jobData?.requirements.content}</p>
    <ul className="ml-4 mt-8">
      {jobData?.requirements.items.map((item: string, index: number) => (
        <li key={index} className={`mt-4 ${listStyle} text-royalBlue`}>
          <p className="ml-8 text-lynch">{item}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Component;
