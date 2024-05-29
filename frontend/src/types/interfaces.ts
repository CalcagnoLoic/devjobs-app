import { JobOffer } from "./types";

interface Typographies {
  content?: string | React.ReactNode;
  css?: string;
}

export interface HeadingProps extends Typographies {
  kind: "h1" | "h2" | "h3";
}

export interface ParagraphProps extends Typographies {
  kind: "p" | "span";
}

export interface JobCharacteristicProps {
  content: string;
  jobRequirements: string[];
  listStyle: string;
  jobDescription: string | string[];
}

export interface JobInformations {
  JobData: JobOffer;
  styleLocation: string;
  css: string;
  isRedirect: boolean;
  isCompanyName: boolean;
}

export interface DarkModeContextProps {
  isDark: boolean;
  toggleTheme: () => void;
}
