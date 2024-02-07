import { JobOffer } from "../../types/types";

type jobInfosProps = {
    jobInformations: JobOffer;
}

const Component = ({ jobInformations }: jobInfosProps) => {
  return (
    <li className="">
        company: {jobInformations.company}
        Position: {jobInformations.position}
    </li>
  )
}

export default Component;