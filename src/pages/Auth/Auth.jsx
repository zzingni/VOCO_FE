import SignupCard from "./components/SignupCard";
import TrustBadge from "./components/TrustBadge";
import AuthLayout from "../../layouts/AuthLayout";

const Auth = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-lg relative">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
        
        <SignupCard />
        <TrustBadge />
      </div>
    </AuthLayout>
  );
};

export default Auth;
