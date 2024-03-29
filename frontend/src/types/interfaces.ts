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
