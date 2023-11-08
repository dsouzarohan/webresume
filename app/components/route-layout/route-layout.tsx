import Footer from "../footer/footer";
import styles from './RouteLayout.module.scss';

type RouteLayoutProps = {
  children: React.ReactNode;
};

const RouteLayout: React.FC<RouteLayoutProps> = ({ children }) => {

  return (
    <div className={`bg-jet text-white min-h-screen h-fit relative`}>
      <main className="!pb-36 p-12 md:p-24 w-100 h-fit relative z-20">
        {children}
      </main>
      <footer>
            <Footer />
      </footer>
    </div>
  );
};

export default RouteLayout;
