import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

type AppLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ title, children }) => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
      {children}
    </>
  );
};

export default AppLayout;
