import { useDarkMode } from "../../hooks/useDarkMode";
import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const { isDark } = useDarkMode();

  return (
    <div className="mx-5 mt-3 text-center md:mx-24 md:mt-10">
      <Paragraph kind="span" content="🫢" css="text-8xl" />
      <Heading
        kind="h3"
        content="404"
        css={`text-7xl italic mt-5 ${isDark ? "text-white" : "text-mirage"}`}
      />
      <Paragraph
        kind="span"
        content="The page you are trying to reach seems inaccessible at the moment. Please
        try again later, or contact the site administrator."
        css={`block mt-12 text-xl ${isDark ? "text-white" : "text-mirage"}`}
      />
    </div>
  );
};

export default Component;
