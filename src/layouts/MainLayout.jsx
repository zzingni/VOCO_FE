import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="lg:ml-64 pt-24 px-6">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;