export type RootProps = {
  id: string;
  children: React.ReactNode;
};

export type ImageProps = {
  url: string;
};

export type TextProps = {
  text: string;
}

export type ButtonProps = {
  onClick: () => void;
}