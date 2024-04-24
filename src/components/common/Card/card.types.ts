export type RootProps = {
  id?: string;
  children: React.ReactNode;
};

export type ImageProps = {
  url: string;
  width?: number;
  height?: number;
};

export type TextProps = {
  text: string;
};

export type ButtonProps = {
  onClick: () => void;
};
