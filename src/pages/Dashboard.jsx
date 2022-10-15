import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InnerContent from "../components/InnerContent";
import PageFooter from "../components/PageFooter";
// import Banner from "../partials/Banner";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const useAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };
  const user = useAuth();
  const location = useLocation();
  const navigation = useNavigate();

  const signOut = () => {
    localStorage.removeItem("user");
    navigation("/login");
  };

  const title = (location.pathname.split('/')[2])
  const description = 'description'

  return (
    <>
      {/*  Site header */}
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        signOut={signOut}
      />
      {/* Content area */}
      <div className="mx-auto w-full p-4 lg:p-0">
        <div className="lg:flex">
          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main
            className={`w-full min-w-0 flex-auto lg:static lg:ml-28 lg:max-h-full lg:overflow-visible lg:sidebar-expanded:!ml-72 2xl:ml-72 2xl:sidebar-expanded:!ml-72`}
          >
            <div className="flex w-full flex-col">
              {/* Welcome banner */}
              <WelcomeBanner title={title} description={description} />
              <InnerContent />
              {/* Dashboard actions */}
            </div>
          </main>

          {/* <Banner /> */}
        </div>
        <PageFooter/>
      </div>
    </>
  );
};

export default Dashboard;
