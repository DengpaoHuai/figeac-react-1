type CardComponentProps = {
  title: string;
  footerDescription: string;
  children: React.ReactNode;
};

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  footerDescription,
  children,
}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
      <p>{footerDescription}</p>
    </div>
  );
};

export default CardComponent;
