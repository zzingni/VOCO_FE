import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="lg:ml-64 pt-24 pb-12 min-h-screen px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;