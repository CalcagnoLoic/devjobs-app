export interface JobOffer {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirements;
  role: Role;
}

export interface Requirements {
  content: string;
  items: string[];
}

export interface Role {
  content: string;
  items: string[];
}

export type InputFieldProps = {
  type: string;
  css: string;
  value?: string;
  id?: string;
  placeholder?: string;
  onClick?: () => void;
  reference?: React.RefObject<HTMLInputElement>;
};

export type FilterProps = {
  additionalCSS?: string | "";
  additionalCSSIcon?: string | "";
}