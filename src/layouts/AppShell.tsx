import { Outlet } from "react-router-dom";
import MainNav from "@/components/layout/MainNav";

const AppShell = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MainNav />
      <Outlet />
    </div>
  );
};

export default AppShell;
