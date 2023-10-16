import Footer from "../Footer/Footer";
import styles from './RouteLayout.module.scss';

type RouteLayoutProps = {
    children: React.ReactNode;
};

const RouteLayout: React.FC<RouteLayoutProps> = ({ children }) => {
  return (
    <div className={`${styles.mainCont} min-h-screen bg-transparent`}>
      <main className="flex flex-col items-center justify-start p-12 md:p-24 w-100">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RouteLayout;
