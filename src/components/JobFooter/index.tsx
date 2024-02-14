import { JobOffer } from "../../types/types";

const Component = ({ datas }: { datas: JobOffer }) => {
  return (
    <footer className="flex">
      <div>
        <p>{datas?.company}</p>
        <p className="capitalize">so digital inc.</p>
      </div>

      <div className="w-[123px] cursor-pointer rounded bg-royalBlue px-8 py-3 font-bold text-white transition duration-300 hover:bg-portage">
        <a href={datas?.apply} target="_blank">
          Apply Now
        </a>
      </div>
    </footer>
  );
};

export default Component;
