import { JobOffer } from "../../types/types";
import { useConvertedColor } from "../../hooks/useConvertedColor";

const Component = ({ datas }: { datas: JobOffer }) => {
  const convertedColor = useConvertedColor(datas?.logoBackground);

  return (
    <header className="flex bg-white rounded-md rounded-tl-none overflow-hidden">
      <div
        style={{ backgroundColor: convertedColor }}
        className="grid h-[140px] w-[140px] place-content-center"
      >
        <img src={datas?.logo} alt="" className="scale-[2]" />
      </div>

      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-mirage text-2xl">{datas?.company}</h2>
          <p className="text-lynch text-base">{datas?.website}</p>
        </div>
        <div>
          <a href={datas?.website}>Company Site</a>
        </div>
      </div>
    </header>
  );
};

export default Component;
