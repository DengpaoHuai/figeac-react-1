import { Button, ButtonProps } from "primereact/button";

type ButtonPropsComponent = {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & React.Component<ButtonProps, HTMLButtonElement>;

const CustomButton = ({ children, ...props }: ButtonPropsComponent) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomButton;
